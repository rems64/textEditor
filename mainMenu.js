const {Menu} = require('electron')
const electron = require('electron')
const app = electron.app

const template = [
  {
    label: 'Fichier',
    submenu: [
      {
        role: 'open',
        label: 'Ouvrir',
        accelerator: 'ctrl+O',
        click () { ouvrir() }
      },
      {
        role: 'save',
        label: 'Enregistrer',
        accelerator: 'ctrl+S'
      },
      {
        role: 'savas',
        label: 'Enregistrer sous',
        accelerator: 'ctrl+Alt+S'
      },
    ]
  },
  {
    label: 'Editer',
    submenu: [
      {
        role: 'undo',
        label: 'Annuler',
        accelerator: 'ctrl+Z'
      },
      {
        role: 'redo',
        label: 'Rétablir',
        accelerator: 'ctrl+Y'
      },
      {
        type: 'separator'
      },
      {
        role: 'cut',
        label: 'Couper',
        accelerator: 'ctrl+X'
      },
      {
        role: 'copy',
        label: 'Copier',
        accelerator: 'ctrl+C'
      },
      {
        role: 'paste',
        label: 'Coller',
        accelerator: 'ctrl+V'
      },
      {
        role: 'selectall',
        label: 'Tout sélectionner',
        accelerator: 'ctrl+A'
      }
    ]
  },
  {
    role: 'Help',
    submenu: [
      {
        label: 'À propos',
        click () { require('electron').shell.openExternal('http://electron.atom.io') }
      }
    ]
  }
]


const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

function ouvrir(){
  console.log("Coucou!!");
  const { dialog } = require('electron')
  var cheminFichier = dialog.showOpenDialogSync({ properties: ['openFile', 'multiSelections'] })
  console.log(cheminFichier[0]);
}
