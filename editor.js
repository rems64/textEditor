let {remote} = require('electron');
var $ = require("jquery");
var play = $('#playground');
const ipcRenderer = require('electron').ipcRenderer;

console.log("coucou");

function getSelectedText() {
  t = (document.all) ? document.selection.createRange().text : document.getSelection();

  return t;
}


function save() {
    console.log('save file!!!');
    var selection = getSelectedText();
    console.log(selection);
    var selection_text = selection.toString();
    console.log(selection_text);

    // How do I add a span around the selected text?

    var span = document.createElement('b');
    span.textContent = selection_text;

    var range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
};


function italic() {
    console.log('italic');
    var selection = getSelectedText();
    var selection_text = selection.toString();

    var span = document.createElement('i');
    span.textContent = selection_text;

    var range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
};

function bold() {
    console.log('bold');
    var selection = getSelectedText();
    var selection_text = selection.toString();

    var span = document.createElement('b');
    span.textContent = selection_text;

    var range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
};

function underline() {
    console.log('underline');
    var selection = getSelectedText();
    var selection_text = selection.toString();

    var span = document.createElement('underline');
    span.textContent = selection_text;

    var range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
};















ipcRenderer.on('save', function() {
  save();
});

ipcRenderer.on('bold', function() {
  bold();
});

ipcRenderer.on('italic', function() {
  italic();
});

ipcRenderer.on('underline', function() {
  italic();
});

$("#bold").on('click', function() {
  bold();
})

$("#italic").on('click', function() {
  italic();
})

$("#underline").on('click', function() {
  underline();
})
