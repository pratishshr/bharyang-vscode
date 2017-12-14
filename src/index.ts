import { sort, sortOrder } from 'sort-o';
import { window, commands, ExtensionContext, TextEdit } from 'vscode';

import { sortAscending, sortDescending, sortImports } from './extension';

export function activate(context: ExtensionContext) {
  let scripts = [
    commands.registerCommand('extension.sortAscByLength', sortAscending),
    commands.registerCommand('extension.sortDescByLength', sortDescending),
    commands.registerCommand('extension.groupSortAscByLength', sortImports)
  ];

  scripts.forEach(script => {
    context.subscriptions.push(script);
  });
}

export function deactivate() {}
