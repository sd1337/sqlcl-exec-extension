// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import ApexProvider from './apex/apexTreeView';
import Connection from './database/connection';
import getParser from './parser/parser';
import { PlSqlParserListener } from './parser/PlSqlParserListener';
import { OrdsTreeProvider } from './ords/ordsTreeView';

const fs = require('fs');
const path = require('path');
const os = require('os');

const antlr4 = require('antlr4');
const { PlSqlParser } = require('./parser/PlSqlParser');

// import parse from './parser/parser';

// const res = parse('SELECT * FROM DUAL;');
// debugger;

let connection: Connection;
let workspacePath = '';
let globalTmpDir = '';
const extensionName = 'demo-extension';

const collection = vscode.languages.createDiagnosticCollection('sqlErrors');
const config = vscode.workspace.getConfiguration();
let ordsTreeProvider: OrdsTreeProvider;
// const compileOnSave = config.get("sqlclExecute.compileOnSave");

const outputChannel = vscode.window.createOutputChannel('sqlcl execute');
outputChannel.show(true);

const documentCloseCallback = async (document: vscode.TextDocument) => {
  if (ordsTreeProvider) {
    ordsTreeProvider.documentCloseCallback(document);
  }
};

const documentCallback = async (document: vscode.TextDocument) => {
  if (document.languageId !== 'plsql' && document.languageId !== 'sql' && document.languageId !== 'oraclesql') { return; } // Only process JSON files
  if (ordsTreeProvider) {
    ordsTreeProvider.documentCallback(document);
  }
  const originalPath = document.uri.fsPath;
  if (config.get('sqlclExecute.compileOnSave')) {
    const txt = document.getText();
    const match = txt.match(/CREATE\s+(?:OR\s+REPLACE\s+)?(?:EDITIONABLE|NONEDITIONABLE\s+)?(\w+)\s+(?:BODY\s+)?(?:"([^"]+)"\.)?((?:"(?:[^"]+)")|(?:\w+))/);
    if (match) {
      // const { parser, tokens } = getParser(txt.toUpperCase());
      // const tree: ParserRuleContextType = parser;
      const linesBeforeMatch = txt.substring(0, match.index).match(/\n/g);
      const offset = linesBeforeMatch ? linesBeforeMatch.length - 1 : 0;
      const type = match[1];
      const schema = match[2];
      const name = match[3].replace(/"/g, '');
      // console.log(`CREATE ${type} ${name}`);
      // fs.copyFileSync(originalPath, copyPath);
      const compile = await connection.executeCompile(`@${originalPath}`);
      outputChannel.appendLine(compile);
      const res: any = await connection.getSelectStatement(`SELECT * FROM user_errors WHERE name = '${name.toUpperCase()}';`);
      if (res && res.items) {
        const mapped = res.items.map((p: any) => {
          const line = Math.max(p.line - 1 + offset, 0);
          const minPos = Math.max(p.position - 1, 0);
          const foundLocal = document.getWordRangeAtPosition(new vscode.Position(line, minPos));
          const range = new vscode.Range(
            new vscode.Position(line, minPos),
            new vscode.Position(line, Math.max(minPos, (foundLocal ? foundLocal.end.character : minPos))),
          );
          const diag = new vscode.Diagnostic(range, p.text);
          return diag;
        });
        const { uri } = document;
        collection.delete(uri);
        collection.set(uri, mapped);
      } else {
        collection.delete(document.uri);
      }
      // debugger;
    }
  }

  // // Copy the file
  // fs.copyFileSync(originalPath, copyPath);

  // if(proc){
  // 	// proc.stdin.write('SET SQLFORMAT json;\nSET FEEDBACK off;\nSPOOL \'tmp.json\';\n' + document.getText() + '\nSPOOL OFF;\n');
  // 	proc.stdin.write('SPOOL tmp.txt\n@' + copyPath + '\nSPOOL OFF;\n');
  // 	// proc.stdin.write('SET SQLFORMAT json;\n' + document.getText() + '\n');
  // }
};

vscode.workspace.onDidSaveTextDocument(documentCallback);
vscode.workspace.onDidCloseTextDocument(documentCloseCallback);

const rootPath =	vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0
	  ? vscode.workspace.workspaceFolders[0].uri.fsPath
	  : undefined;
// vscode.window.registerTreeDataProvider(
//   'apexApplications',
//   new ApexProvider(rootPath)
// );

async function openRegionSource(regionId: string, regionType: string) {
  const resp: any = await connection.getSelectStatement(`SELECT region_name, region_source
    FROM apex_application_page_regions
	WHERE region_id = ${regionId}`);
  const regionSource = resp.items[0].region_source;
  const regionName = resp.items[0].region_name;

  try {
    /* write file in temp dir */
    fs.writeFileSync(path.join(globalTmpDir, `${regionName}.sql`), regionSource || '');
    const uri = vscode.Uri.file(`${path.join(globalTmpDir, regionName)}.sql`);
    const doc = await vscode.workspace.openTextDocument(uri);
    await vscode.window.showTextDocument(doc);
  } catch (e) {
    console.log(e);
  }
}

class MyListener extends PlSqlParserListener {
  enterAnonymous_block(ctx: any) {
    console.log(ctx);
  }

  enterPackage_name(ctx: any) {
    console.log(ctx);
  }

  enterSchema_name(ctx: any) {
    console.log(ctx);
  }

  enterProcedure_name(ctx: any) {
    console.log(ctx);
  }
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(`Congratulations, your extension "${extensionName}" is now active!`);

  if (vscode.workspace?.workspaceFolders?.length) {
    workspacePath = vscode.workspace.workspaceFolders[0].uri.fsPath;
  }
  globalTmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'sqlcl-execute-tmp-'));
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  connection = new Connection("sql", globalTmpDir, "", "", "");
  // vscode.window.createTreeView('apexApplications', {
  // 	// treeDataProvider: new ApexProvider(rootPath, connection),
  // 	treeDataProvider: new DepNodeProvider(rootPath),
  //   });
  // vscode.window.registerTreeDataProvider('apexApplications', new DepNodeProvider(rootPath));
  // const { parser, tokens } = getParser(`begin
  // wwv_flow_imp.component_begin (
  //  p_version_yyyy_mm_dd=>'2022.10.07'
  // ,p_release=>'22.2.0'
  // ,p_default_workspace_id=>1300875210900755
  // ,p_default_application_id=>116
  // ,p_default_id_offset=>0
  // ,p_default_owner=>'DIADEM'
  // );
  // wwv_flow_imp_page.remove_page (p_flow_id=>wwv_flow.g_flow_id, p_page_id=>4);
  // wwv_flow_imp.component_end;
  // end;`.toUpperCase());
  // // parser.match(PlSqlParser.ANONYMOUS_BLOCK);
  // const tree: ParserRuleContextType = parser.anonymous_block();
  // // const unit = parser.unit_statement();
  // antlr4.tree.ParseTreeWalker.DEFAULT.walk(new MyListener(), tree);
  // /*convert to json stop without nested objects */
  // JSON.stringify(tree, (key, value) => {
  // 	if (key === 'parentCtx') {
  // 		return undefined;
  // 	}
  // 	return value;
  // });
  // debugger;
  if (config.get('sqlclExecute.showApexApps')) {
    const nodeDependenciesProvider = new ApexProvider(rootPath, connection, extensionName);
    // vscode.window.registerTreeDataProvider('apexApplications', nodeDependenciesProvider);
    vscode.window.createTreeView('apexApplications', {
      treeDataProvider: nodeDependenciesProvider,
    });
  }
  if (config.get('sqlclExecute.ordsServices')) {
    ordsTreeProvider = new OrdsTreeProvider(rootPath, connection, extensionName, globalTmpDir);
    // vscode.window.registerTreeDataProvider('apexApplications', nodeDependenciesProvider);
    vscode.window.createTreeView('ordsServices', {
      treeDataProvider: ordsTreeProvider,
    });
  }
  const disposable = vscode.commands.registerCommand(`${extensionName}.helloWorld`, () => {
  });

  vscode.commands.registerCommand(`${extensionName}.openRegionSource`, openRegionSource);

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
