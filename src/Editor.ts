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

  public getSelection(): string {
    return this.document.getText(this.selection);
  }

  public replace(text: string) {
    this.editor.edit(editBuilder => {
      editBuilder.replace(this.selection, text);
    });
  }
}

export default Editor;
