const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');


export default class Connection {
    globalTmpDir: string;
    proc: any;
    workspacePath = '';
    stdOutCallbacks = {};
    ready: boolean = false;
    busy: boolean = false;

    debounce(func, delay) {
        let timeoutId;

        return function () {
            const context = this;
            const args = arguments;

            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        };
    }

    stdOutCallback = (data: any) => {
        console.log(`stdout: ${data}`);
        const str = data.toString();
        // if(!this.ready && (str.indexOf("SQL>") > -1 || str.indexOf("Connected to:") > -1)){
        if(!this.ready && (str.indexOf("Connected.") > -1)){
            this.ready = true;
            this.proc.stdin.write('set linesize 32767 long 2000000;\n');
            return;
        }
        if(!this.ready && (str.indexOf("SQL>") > -1)){
            if(!this.service){
                this.proc.stdin.write("connect " + this.user + "/" + this.pass + "@" + this.host + ";\n");
            }else{
                this.proc.stdin.write("connect " + this.user + "/" + this.pass + "@" + this.host + ":" + this.port + "/" + this.service + ";\n");
            }
            return;
        }
        Object.entries(this.stdOutCallbacks).forEach(([key, callback]) => {
            /*check if keyfile exists */
            const filePath = path.resolve(path.join(this.globalTmpDir, key + ".lst"));
            while(!(fs.existsSync(filePath) && fs.statSync(filePath).size > 0)){
                this.sleep(10);
            }
            if (true) {
                //read file
                const fileData = fs.readFileSync(filePath, 'utf8');
                //delete file
                try{
                    (callback as any)(fileData);
                }catch(e){
                    this.sleep(10);
                    try{
                        (callback as any)(fileData);
                    }catch(e){
                        console.log(e);
                        this.proc.stdin.write('BEGIN;NULL;END;\n');
                        return;
                    }
                }
                fs.unlinkSync(filePath);
                delete this.stdOutCallbacks[key];
            }else{
                console.log("no file");
            }
        });
    };


    constructor(private readonly executablePath: string,
         tmpDir: string, 
         private readonly user: string, 
         private readonly pass: string, 
         private readonly host: string, 
         private readonly port?: string, 
         private readonly service?: string) {
        this.globalTmpDir = tmpDir;
        // this.proc = spawn(executablePath + " " + "@" + host + ":" + port + "/" + service, { cwd: this.globalTmpDir, shell: true });
        // this.proc.stdin.write(user + "\n");
        // this.proc.stdin.write(pass + "\n");
        
        this.proc = spawn(executablePath + " /nolog", { cwd: this.globalTmpDir, shell: true });
        // this.proc.stdin.write("connect " + user + "/" + pass + "@" + host + ":" + port + "/" + service + ";\n");
        this.proc.stdout.on('data', this.debounce(this.stdOutCallback, 50));
        this.proc.stderr.on('data', this.debounce(this.stdOutCallback, 50));
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getSelectStatement = async (statement: string) => {
        if(!statement.endsWith(";")){
            statement += ";";
        }
        const rndName = Math.random().toString(36).substring(7);
        const res = new Promise(async (resolve, reject) => {
            while(!this.ready || this.busy){
                await this.sleep(10);
            }
            this.busy = true;
            this.proc.stdin.write('SET SQLFORMAT json;\nSET FEEDBACK OFF;\nSPOOL \'' + rndName + '\';\n' + statement + '\nSPOOL OFF;\nSET FEEDBACK ON;\n');
            this.stdOutCallbacks[rndName] = (data) => {
                const resp = JSON.parse(data);
                resolve(resp.results[0]);
                this.busy = false;
            };
        });
        return res;
    };

    executeCompile = async (statement: string): Promise<string> => {
        const rndName = Math.random().toString(36).substring(7);
        const res = new Promise<string>(async (resolve, reject) => {
            while(!this.ready || this.busy){
                await this.sleep(10);
            }
            this.proc.stdin.write('SPOOL \'' + rndName + '\';\n' + statement + '\nSPOOL OFF;\n');
            this.stdOutCallbacks[rndName] = (data) => {
                resolve(data.toString());
            };
        });
        return res;
    };
}