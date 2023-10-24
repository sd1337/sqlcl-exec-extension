import * as vscode from 'vscode';
import * as fs from 'fs';
import Connection from '../database/connection';
import { APEXFolder, Node } from '../shared/treeViewUtils';
import { BindTypes } from '../database/preparedStatement';

type RegionSelect = {
  region_name: string;
  display_sequence: number;
  region_id: string;
  region_type: string;
};

type SelectResponse<T> = {
  items: T[];
};

export default class ApexProvider implements vscode.TreeDataProvider<Node> {
  constructor(private workspaceRoot: string, private connection: Connection, private extensionName: string) { }

  refresh(): void {
    debugger;
  }

  getTreeItem(element: Node): vscode.TreeItem {
    return element;
  }

  async getPages(pages: Pages) {
    // const data:any =  this.connection.getSelectStatement(`SELECT page_id, page_name
    // FROM apex_application_pages
    // WHERE application_id = ${pages.applicationId}
    // ORDER BY page_id;`);
    const data: any = await this.connection.prepareStatement(`SELECT page_id, page_name
     FROM apex_application_pages
     WHERE application_id = :ID
     ORDER BY page_id;`).addParameter('ID', pages.applicationId.toString(), BindTypes.NUMBER).executeQuery();
    const mapped = data.items.map((p) => new Page(`${p.page_name} (${p.page_id})`, pages.applicationId, vscode.TreeItemCollapsibleState.Collapsed, null, p.page_id));
    return mapped;
  }

  getPage(page: Page): Thenable<Node[]> {
    return Promise.resolve([
      new PageRegions(page.applicationId, page.pageId, vscode.TreeItemCollapsibleState.Collapsed),
      new PageDynamicActions(page.applicationId, page.pageId, vscode.TreeItemCollapsibleState.Collapsed),
      new PageProcesses(page.applicationId, page.pageId, vscode.TreeItemCollapsibleState.Collapsed),
    ]);
  }

  getPageRegions(pageRegions: PageRegions, parentRegion: PageRegion = null): Thenable<Node[]> {
    if (parentRegion) {
      return Promise.resolve([]);
    }
    return this.connection.getSelectStatement(`SELECT region_name, display_sequence, TO_CHAR(region_id) region_id, source_type_plugin_name region_type
      FROM apex_application_page_regions
      WHERE application_id = ${pageRegions.applicationId}
      AND page_id = ${pageRegions.pageId}
      AND parent_region_id IS NULL
      ORDER BY display_sequence`).then((data: SelectResponse<RegionSelect>) => {
      const mapped = data.items.map((p) => new PageRegion(
        `${p.region_name} (${p.display_sequence})`,
        pageRegions.applicationId,
        pageRegions.pageId,
        p.region_id,
        p.region_type,
        vscode.TreeItemCollapsibleState.Collapsed,
        {
          command: `${this.extensionName}.openRegionSource`,
          title: '',
          arguments: [p.region_id, p.region_type],
        },
      ));
        // debugger;
      return Promise.resolve(mapped);
    });
  }

  getSharedComponents(sharedComponents: SharedComponents): Thenable<Node[]> {
    return Promise.resolve([
      new ApplicationItems(sharedComponents.applicationId, vscode.TreeItemCollapsibleState.Collapsed),
      new ApplicationProcesses(sharedComponents.applicationId, vscode.TreeItemCollapsibleState.Collapsed),
      new ApplicationComputations(sharedComponents.applicationId, vscode.TreeItemCollapsibleState.Collapsed),
      new BuildOptions(sharedComponents.applicationId, vscode.TreeItemCollapsibleState.Collapsed),
    ]);
  }

  getApplicationItems(applicationItems: ApplicationItems): Thenable<Node[]> {
    return this.connection.getSelectStatement(`SELECT item_name
    FROM apex_application_items
    WHERE application_id = ${applicationItems.applicationId}
    ORDER BY item_name;`).then((data: any) => {
      const mapped = data.items.map((p) => new ApplicationItem(`${p.item_name}`, vscode.TreeItemCollapsibleState.None));
      // debugger;
      return Promise.resolve(mapped);
    });
  }

  getApplicationProcesses(applicationProcesses: ApplicationProcesses): Thenable<Node[]> {
    return this.connection.getSelectStatement(`SELECT process_name
    FROM apex_application_processes
    WHERE application_id = ${applicationProcesses.applicationId}
    ORDER BY process_name;`).then((data: any) => {
      const mapped = data.items.map((p) => new ApplicationItem(`${p.process_name}`, vscode.TreeItemCollapsibleState.None));
      // debugger;
      return Promise.resolve(mapped);
    });
  }

  getApplicationComputations(applicationComputations: ApplicationComputations): Thenable<Node[]> {
    return this.connection.getSelectStatement(`SELECT computation
    FROM apex_application_computations
    WHERE application_id = ${applicationComputations.applicationId}
    ORDER BY computation;`).then((data: any) => {
      const mapped = data.items.map((p) => new ApplicationItem(`${p.computation_name}`, vscode.TreeItemCollapsibleState.None));
      // debugger;
      return Promise.resolve(mapped);
    });
  }

  getChildren(element?: Node): Thenable<Node[]> {
    if (!this.workspaceRoot) {
      vscode.window.showInformationMessage('No dependency in empty workspace');
      return Promise.resolve([]);
    }

    if (element) {
      if (element instanceof Application) {
        return Promise.resolve([
          new Pages('Pages', element.applicationId, vscode.TreeItemCollapsibleState.Collapsed),
          new SharedComponents('Shared Components', element.applicationId, vscode.TreeItemCollapsibleState.Collapsed),
        ]);
      } if (element instanceof Pages) {
        return this.getPages(element);
      } if (element instanceof Page) {
        return this.getPage(element);
      } if (element instanceof PageRegions) {
        return this.getPageRegions(element);
      } if (element instanceof SharedComponents) {
        return this.getSharedComponents(element);
      } if (element instanceof ApplicationItems) {
        return this.getApplicationItems(element);
      } if (element instanceof ApplicationProcesses) {
        return this.getApplicationProcesses(element);
      } if (element instanceof ApplicationComputations) {
        return this.getApplicationComputations(element);
      }
    } else {
      return this.connection.getSelectStatement(`select a.application_id, a.application_name || ' ('||a.application_id|| ')' name, a.version, a.*
      from apex_applications a
      WHERE a.owner = user
      order by a.application_id;`).then((data: any) => {
        const mapped = data.items.map((p) => new Application(p.name, p.version.toString(), vscode.TreeItemCollapsibleState.Collapsed, null, p.application_id));
        // debugger;
        return Promise.resolve(mapped);
      });
    }
  }

  private pathExists(p: string): boolean {
    try {
      fs.accessSync(p);
    } catch (err) {
      return false;
    }
    return true;
  }
}

class Application extends Node {
  constructor(
    public readonly label: string,
    protected version: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly command?: vscode.Command,
    public readonly applicationId?: number,
  ) {
    super(label, version, collapsibleState, command, 'apex-80.svg');
    this.tooltip = `${this.label}-${this.version}`;
    this.description = this.version;
  }
}

class Page extends Node {
  constructor(
    public readonly label: string,
    public readonly applicationId: number,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly command?: vscode.Command,
    public readonly pageId?: number,
  ) {
    super(label, null, collapsibleState, command);
    this.tooltip = `${this.label}`;
    this.description = '';
  }
}

class Pages extends APEXFolder {
  constructor(
    public readonly label: string,
    public readonly applicationId: number,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
  ) {
    super(label, applicationId, collapsibleState);
    this.tooltip = this.label;
    this.description = '';
  }
}

class SharedComponents extends APEXFolder {
  constructor(
    public readonly label: string,
    public readonly applicationId: number,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
  ) {
    super(label, null, collapsibleState, 'gear-2.svg');
    this.tooltip = this.label;
    this.description = '';
  }
}

class ApplicationItems extends APEXFolder {
  constructor(
    public readonly applicationId: number,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
  ) {
    super('Application Items', null, collapsibleState);
    this.tooltip = this.label;
    this.description = '';
  }
}

class ApplicationItem extends Node {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
  ) {
    super(label, null, collapsibleState);
    this.tooltip = this.label;
    this.description = '';
  }
}

class ApplicationProcesses extends APEXFolder {
  constructor(
    public readonly applicationId: number,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
  ) {
    super('Application Processes', null, collapsibleState);
    this.tooltip = this.label;
    this.description = '';
  }
}

class ApplicationComputations extends APEXFolder {
  constructor(
    public readonly applicationId: number,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
  ) {
    super('Application Computations', null, collapsibleState);
    this.tooltip = this.label;
    this.description = '';
  }
}

class BuildOptions extends APEXFolder {
  constructor(
    public readonly applicationId: number,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
  ) {
    super('Build Options', applicationId, collapsibleState);
    this.tooltip = this.label;
    this.description = '';
  }
}

class PageRegions extends APEXFolder {
  constructor(
    public readonly applicationId: number,
    public readonly pageId: number,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
  ) {
    super('Regions', applicationId, collapsibleState, 'layout-header-nav-left-rows-46.svg');
    this.tooltip = this.label;
    this.description = '';
  }
}

class PageRegion extends Node {
  constructor(
    public readonly label: string,
    public readonly applicationId: number,
    public readonly pageId: number,
    public readonly regionId: string,
    public readonly regionType: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly command?: vscode.Command,
  ) {
    let icon: string = null;
    switch (regionType) {
      case 'NATIVE_BREADCRUMB':
        icon = 'breadcrumbs-107.svg';
        break;
      case 'NATIVE_CALENDAR':
        icon = 'calendar-109.svg';
        break;
      case 'NATIVE_CARDS':
        icon = 'card-396.svg';
        break;
      case 'NATIVE_CSS_CALENDAR':
        icon = 'calendar-109.svg';
        break;
      // case 'NATIVE_DATA_UPLOAD_COLUMN_MAPPING':
      //   icon = '';
      //   break;
      case 'NATIVE_DISPLAY_SELECTOR':
        icon = 'tabs-158.svg';
        break;
      case 'NATIVE_DYNAMIC_CONTENT':
        icon = 'dynamic-content-118.svg';
        break;
      case 'NATIVE_FACETED_SEARCH':
        icon = 'table-filter-490.svg';
        break;
      case 'NATIVE_FORM':
        icon = 'forms-65.svg';
        break;
      case 'NATIVE_HELP_TEXT':
        icon = 'question-circle-113.svg';
        break;
      case 'NATIVE_IG':
        icon = 'table-cursor-374.svg';
        break;
      case 'NATIVE_IR':
        icon = 'table-pointer-114.svg';
        break;
      case 'NATIVE_JET_CHART':
        icon = 'bar-chart-295.svg';
        break;
      case 'NATIVE_JSTREE':
        icon = 'tree-org-143.svg';
        break;
      case 'NATIVE_LIST':
        icon = 'list-117.svg';
        break;
      case 'NATIVE_MAP_REGION':
        icon = 'map-434.svg';
        break;
      // case 'NATIVE_PLSQL':
      //   icon = '';
      //   break;
      case 'NATIVE_SQL_REPORT':
        icon = 'table-119.svg';
        break;
      case 'NATIVE_STATIC':
        icon = 'code-263.svg';
        break;
      // case 'NATIVE_TABFORM':
      //   icon = '';
      //   break;
      default:
        break;
    }
    super(label, null, collapsibleState, null, icon);
    this.tooltip = this.label;
    this.description = '';
  }
}

class PageDynamicActions extends APEXFolder {
  constructor(
    public readonly applicationId: number,
    public readonly pageId: number,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
  ) {
    super('Dynamic Actions', null, collapsibleState, 'bolt-68.svg');
    this.tooltip = this.label;
    this.description = '';
  }
}

class PageProcesses extends APEXFolder {
  constructor(
    public readonly applicationId: number,
    public readonly pageId: number,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
  ) {
    super('Processes', null, collapsibleState, 'processing-71.svg');
    this.tooltip = this.label;
    this.description = '';
  }
}
