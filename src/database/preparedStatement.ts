import Connection from "./connection";

export enum BindTypes {
    NUMBER = 'NUMBER',
    VARCHAR2 = 'VARCHAR2',
    DATE = 'DATE',
    CLOB = 'CLOB',
}

export type Parameter = {
    name: string,
    value: string,
    type: BindTypes,
}

export class PreparedStatement {

    parameters: Parameter[] = [];

    constructor(private query: string, private connection: Connection) {

    }

    addParameter(name: string, value: any, type: BindTypes): PreparedStatement {
        this.parameters.push({ name, value, type });
        return this;
    }

    private prepareQuery(): string {
        // let textToExecute = 'SET FEEDBACK OFF\n';
        if(!this.parameters.length){
            return;
        }
        let textToExecute = '';
        let bind = 'BEGIN\n';
        this.parameters.forEach(p => {
            let val;
            switch (p.type) {
                case BindTypes.NUMBER:
                    val = p.value;
                    break;
                case BindTypes.VARCHAR2:
                    val = p.value ? `'${p.value.replace(/'/g, "''")}'` : null;
                    break;
                case BindTypes.DATE:
                    val = `TO_DATE('${p.value}', 'YYYY-MM-DD')`;
                    break;
                case BindTypes.CLOB:
                    val = `TO_CLOB('${p.value.replace(/'/g, "''")}')`;
                    break;
            }
            if(val === undefined || val === null){
                val = 'null';
            }
            textToExecute += `VARIABLE ${p.name} ${p.type};\n`;
            bind += `:${p.name} := ${val};\n`;
        });
        bind += `END;`;
        // textToExecute += "SET FEEDBACK ON\n";
        return `${textToExecute}\n${bind}\n/\n`;
    }

    async execute() {
        const prepared = this.prepareQuery();
        if(prepared){
            await this.connection.executeCompile(prepared);
        }
        const result = await this.connection.executeCompile(this.query);
        return result;
    }

    async executeQuery() {
        const prepared = this.prepareQuery();
        if(prepared){
            await this.connection.executeCompile(prepared);
        }
        const result = await this.connection.getSelectStatement(this.query);
        return result;
    }
}