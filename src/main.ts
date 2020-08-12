import { BrowserWindow, app, Menu } from 'electron'
import url from 'url'
import path from 'path'

let mainWindow

app.on('ready', () => {
  // Create new window
  mainWindow = new BrowserWindow({})

  // Load html into window
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'mainWindow.html'),
      protocol: 'file',
      slashes: true
    })
  )
  
  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
  // Insert menu
  Menu.setApplicationMenu(mainMenu)

})

// Create menu template
const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Add Item'
      },
      {
        label: 'Clear Items'
      },
      {
        label: 'Quit',
        click(){
          app.quit()
        }
      },
    ]
  }
]
