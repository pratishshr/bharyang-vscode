import Editor from './Editor';
import * as bharyang from 'bharyang';

/**
 * Perform supplied operation on the editor selection.
 * 
 * @param {Function} algorithm 
 */
function sort(algorithm: Function) {
  let editor = new Editor();
  let selection = editor.getSelection();

  let sortedLines = algorithm(selection);

  editor.replace(sortedLines);
}

/**
 * Arrange in ascending order.
 * 
 * @returns {string}
 */
export function sortAscending() {
  return sort(bharyang.sortAscending);
}

/**
 * Arrange in descending order.
 * 
 * @returns {string}
 */
export function sortDescending() {
  return sort(bharyang.sortDescending);
}

/**
 * Group and Sort Imports.
 * 
 * @returns {string} 
 */
export function sortImports() {
  return sort(bharyang.sortImports);
}
