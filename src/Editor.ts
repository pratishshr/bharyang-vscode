import { window, TextEditor, Selection, TextDocument } from 'vscode';

class Editor {
  private editor: TextEditor;
  private selection: Selection;
  private document: TextDocument;

  constructor() {
    if (!window.activeTextEditor) {
      throw new Error('Text Editor is not available.');
    }

    this.editor = window.activeTextEditor;
    let { document, selection } = this.editor;

    this.document = document;
    this.selection = selection;
  }

  /**
   * Return editor selection.
   * 
   * @returns {string}
   */
  public getSelection(): string {
    return this.document.getText(this.selection);
  }

  /**
   * Replace editor selection with the supplied text.
   * 
   * @param {string} text 
   */
  public replace(text: string) {
    this.editor.edit(editBuilder => {
      editBuilder.replace(this.selection, text);
    });
  }
}

export default Editor;
