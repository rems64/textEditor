let {remote} = require('electron');
var $ = require("jquery");
var play = $('#playground');
const ipcRenderer = require('electron').ipcRenderer;

console.log("coucou");

function getSelectedText() {
  t = (document.all) ? document.selection.createRange().text : document.getSelection();

  return t;
}

ipcRenderer.on('file-save', function() {
    console.log('save file!!!');
    var selection = getSelectedText();
    var selection_text = selection.toString();

    // How do I add a span around the selected text?

    var span = document.createElement('B');
    span.textContent = selection_text;

    var range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
});
