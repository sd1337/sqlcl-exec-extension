import * as vscode from 'vscode';
import * as path from 'path';

export class Node extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    protected version: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly command?: vscode.Command,
    icon?: string,
  ) {
    super(label, collapsibleState);
    this.tooltip = `${this.label}-${this.version}`;
    this.description = this.version;
    if (icon) {
      this.iconPath = {
        light: path.join(__filename, '..', '..', '..', 'resources', 'apex', 'light', icon),
        dark: path.join(__filename, '..', '..', '..', 'resources', 'apex', 'dark', icon),
      };
    } else {
      this.iconPath = {
        light: path.join(__filename, '..', '..', '..', 'resources', 'light', 'dependency.svg'),
        dark: path.join(__filename, '..', '..', '..', 'resources', 'dark', 'dependency.svg'),
      };
    }
  }

  contextValue = 'dependency';
}

export class APEXFolder extends Node {
  constructor(
    public readonly label: string,
    public readonly applicationId: number,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    icon?: string,
  ) {
    super(label, null, collapsibleState, null, icon || 'folder-198.svg');
    this.tooltip = this.label;
    this.description = '';
    this.applicationId = applicationId;
  }
}

export class ORDSFolder extends Node {
  constructor(
    public readonly label: string,
    public readonly identifier: number,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    icon?: string,
  ) {
    super(label, null, collapsibleState, null, icon || 'folder-198.svg');
    this.tooltip = this.label;
    this.description = '';
  }
}
