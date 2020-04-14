const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const { autoUpdater } = require('electron-updater');

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadFile('index.html');
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
  mainWindow.on('ready-to-show', () => {
    autoUpdater.checkForUpdatesAndNotify();
  });
  const template =                 [{
    label: 'Check for Updates',
    click: () => {
        console.log('Update available');
        autoUpdater.checkForUpdates();
    }
  }];

  let appMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(appMenu);
}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('app_version', (event) => {
  event.sender.send('app_version', { version: app.getVersion() });
});

autoUpdater.on('update-available', () => {
  mainWindow.webContents.send('update_available');
});

autoUpdater.on('update-downloaded', () => {
  mainWindow.webContents.send('update_downloaded');
});

ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});