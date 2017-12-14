import Editor from './Editor';
import * as bharyang from 'bharyang';

function sort(algorithm: Function) {
  let editor = new Editor();
  let selection = editor.getSelection();

  let sortedLines = algorithm(selection);

  editor.replace(sortedLines);
}

export function sortAscending() {
  return sort(bharyang.sortAscending);
}

export function sortDescending() {
  return sort(bharyang.sortDescending);
}

export function sortImports() {
  return sort(bharyang.sortImports);
}
