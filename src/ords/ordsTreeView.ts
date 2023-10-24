import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import Connection from '../database/connection';
import { BindTypes } from '../database/preparedStatement';

/* ORDS.DEFINE_HANDLER(
      p_module_name    => 'Asset',
      p_pattern        => 'open-reservations',
      p_method         => 'GET',
      p_source_type    => 'json/collection',
      p_items_per_page =>  1000,
      p_mimes_allowed  => '',
      p_comments       => NULL,
      p_source         =>
'SELECT * FROM endur.user_bpe_open_reservations'
      ); */

type HandlerMetadata = {
  moduleName: string,
  pattern: string,
  method: string,
  sourceType: string,
  itemsPerPage: number,
  mimesAllowed: string,
  comments?: string,
  source: string,
  document: vscode.TextDocument,
};

export class BasicNode extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly tooltip: string,
    public readonly description: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly command?: vscode.Command,
  ) {
    super(label, collapsibleState);
  }

  iconPath = {
    light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
    dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg'),
  };

  contextValue = 'dependency';
}

class Modules extends BasicNode {
  constructor() {
    super('Modules', 'Modules', '', vscode.TreeItemCollapsibleState.Collapsed);
  }
}

class Privileges extends BasicNode {
  constructor() {
    super('Privileges', 'Privileges', '', vscode.TreeItemCollapsibleState.Collapsed);
  }
}

class Roles extends BasicNode {
  constructor() {
    super('Roles', 'Roles', '', vscode.TreeItemCollapsibleState.Collapsed);
  }
}

class Module extends BasicNode {
  constructor(
    name: string,
    uriPrfix: string,
    public readonly status: string,
    collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly moduleId: number,
  ) {
    super(name, '', uriPrfix, collapsibleState);
  }
}

class Template extends BasicNode {
  constructor(
    uriTemplate: string,
    public readonly method: string,
    public readonly source: string,
    collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly templateId: number,
    public readonly methods: string[],
  ) {
    super(uriTemplate, '', '', collapsibleState);
  }
}

class TemplateMethod extends BasicNode {
  constructor(
    method: string,
    collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly templateId: number,
    command: vscode.Command,
  ) {
    super(method, '', '', collapsibleState, command);
  }
}

export class OrdsTreeProvider implements vscode.TreeDataProvider<BasicNode> {
  private _onDidChangeTreeData: vscode.EventEmitter<BasicNode | undefined | void> = new vscode.EventEmitter<BasicNode | undefined | void>();

  readonly onDidChangeTreeData: vscode.Event<BasicNode | undefined | void> = this._onDidChangeTreeData.event;

  constructor(private workspaceRoot: string, private connection: Connection, private extensionName: string, private globalTempDir: string) {
    vscode.commands.registerCommand(`${extensionName}.openHandlerSource`, this.openHandlerSource);
  }

  openDocuments: HandlerMetadata[] = [];

  documentCallback = async (document: vscode.TextDocument) => {
    const found = this.openDocuments.find((p: HandlerMetadata) => p.document === document);
    if (found) {
      const result = await this.connection.prepareStatement(`BEGIN
            ORDS.DEFINE_HANDLER(
                p_module_name    => :MODULE_NAME,
                p_pattern        => :PATTERN,
                p_method         => :METHOD,
                p_source_type    => :SOURCE_TYPE,
                p_items_per_page => :ITEMS_PER_PAGE,
                p_mimes_allowed  => :MIMES_ALLOWED,
                p_comments       => :COMMENTS,
                p_source         => :SOURCE
                );
    COMMIT;
END;
/
`)
        .addParameter('MODULE_NAME', found.moduleName, BindTypes.VARCHAR2)
        .addParameter('PATTERN', found.pattern, BindTypes.VARCHAR2)
        .addParameter('METHOD', found.method, BindTypes.VARCHAR2)
        .addParameter('SOURCE_TYPE', found.sourceType, BindTypes.VARCHAR2)
        .addParameter('ITEMS_PER_PAGE', found.itemsPerPage, BindTypes.NUMBER)
        .addParameter('MIMES_ALLOWED', found.mimesAllowed, BindTypes.VARCHAR2)
        .addParameter('COMMENTS', found.comments, BindTypes.VARCHAR2)
        .addParameter('SOURCE', found.document.getText(), BindTypes.CLOB)
        .execute();
      debugger;
    }
  };

  documentCloseCallback = async (document: vscode.TextDocument) => {
    // debugger;
  };

  openHandlerSource = async (templateId: number, method: string) => {
    const data: any = await this.connection.getSelectStatement(`SELECT m.name module_name, t.uri_template pattern, h.method, h.source_type, h.items_per_page, h.mimes_allowed, h.comments, h.source
        FROM user_ords_handlers h
        JOIN user_ords_templates t ON t.id = h.template_id
        JOIN user_ords_modules m ON t.module_id = m.id
        WHERE h.template_id = ${templateId}
        AND h.method = '${method}'`);
    const [handler] = data.items;
    const { source } = handler;
    const regionName = `${handler.pattern}_${method}`;

    try {
      /* write file in temp dir */
      fs.writeFileSync(path.join(this.globalTempDir, `${regionName}.sql`), source || '');
      const uri = vscode.Uri.file(`${path.join(this.globalTempDir, regionName)}.sql`);
      const doc = await vscode.workspace.openTextDocument(uri);
      this.openDocuments.push({
        moduleName: handler.module_name,
        pattern: handler.pattern,
        method: handler.method,
        sourceType: handler.source_type,
        itemsPerPage: handler.items_per_page,
        mimesAllowed: handler.mimes_allowed,
        comments: handler.comments,
        source: handler.source,
        document: doc,
      });
      await vscode.window.showTextDocument(doc);
    } catch (e) {
      console.log(e);
    }
  };

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: BasicNode): vscode.TreeItem {
    return element;
  }

  async getModules() {
    const data: any = await this.connection.getSelectStatement(`SELECT id, name, uri_prefix, status
        FROM user_ords_modules
        ORDER BY name`);
    const mapped = data.items
      .map((p) => new Module(
        p.name,
        p.uri_prefix,
        p.status,
        vscode.TreeItemCollapsibleState.Collapsed,

        p.id,
      ));
    return mapped;
  }

  async getHandlers(module: Module) {
    const data: any = await this.connection.getSelectStatement(`SELECT t.id, t.uri_template, LISTAGG(h.method, ':') methods
        FROM user_ords_templates t
        JOIN user_ords_handlers h ON t.id = h.template_id
        WHERE module_id = ${module.moduleId}
        GROUP BY t.id, t.uri_template`);
    const mapped = data.items.map((p) => new Template(p.uri_template, '', '', vscode.TreeItemCollapsibleState.Collapsed, p.id, p.methods.split(':')));
    return mapped;
  }

  getChildren(element?: BasicNode): Thenable<BasicNode[]> {
    if (!this.workspaceRoot) {
      vscode.window.showInformationMessage('No dependency in empty workspace');
      return Promise.resolve([]);
    }

    if (element) {
      if (element instanceof Modules) {
        return this.getModules();
      } if (element instanceof Module) {
        return this.getHandlers(element);
      } if (element instanceof Template) {
        return Promise.resolve(element.methods
          .map((p) => new TemplateMethod(
            p,
            vscode.TreeItemCollapsibleState.None,
            element.templateId,
            {
              command: `${this.extensionName}.openHandlerSource`,
              title: '',
              arguments: [element.templateId, p],
            },
          )));
      } if (element instanceof Privileges) {

      } else if (element instanceof Roles) {

      }
      return Promise.resolve([]);
    }
    return Promise.resolve([
      new Modules(),
      new Privileges(),
      new Roles(),
    ]);
  }
}
