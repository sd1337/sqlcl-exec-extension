import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import Connection from '../database/connection';

export class OrdsTreeProvider implements vscode.TreeDataProvider<BasicNode> {

	private _onDidChangeTreeData: vscode.EventEmitter<BasicNode | undefined | void> = new vscode.EventEmitter<BasicNode | undefined | void>();
	readonly onDidChangeTreeData: vscode.Event<BasicNode | undefined | void> = this._onDidChangeTreeData.event;

	constructor(private workspaceRoot: string, private connection: Connection, private extensionName: string) { }

	refresh(): void {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: BasicNode): vscode.TreeItem {
		return element;
	}

	getModules

	getChildren(element?: BasicNode): Thenable<BasicNode[]> {
		if (!this.workspaceRoot) {
			vscode.window.showInformationMessage('No dependency in empty workspace');
			return Promise.resolve([]);
		}

		if (element) {
			if(element instanceof Modules){
			
			}else if(element instanceof Privileges){
			
			}else if(element instanceof Roles){
			
			}
			return Promise.resolve([]);
		} else {
			return Promise.resolve([
				new Modules(),
				new Privileges(),
				new Roles(),
			])
		}

	}
}

export class BasicNode extends vscode.TreeItem {

	constructor(
		public readonly label: string,
		public readonly tooltip: string,
		public readonly description: string,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly command?: vscode.Command
	) {
		super(label, collapsibleState);

		// this.tooltip = `${this.label}-${this.version}`;
		// this.description = this.version;
	}

	iconPath = {
		light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
	};

	contextValue = 'dependency';
}

class Modules extends BasicNode {
	constructor() {
		super('Modules', null, 'Modules', vscode.TreeItemCollapsibleState.Collapsed);
	}
}

class Privileges extends BasicNode {
	constructor() {
		super('Privileges', null, 'Privileges', vscode.TreeItemCollapsibleState.Collapsed);
	}
}

class Roles extends BasicNode {
	constructor() {
		super('Roles', null, 'Roles', vscode.TreeItemCollapsibleState.Collapsed);
	}
}