const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

//listen for the app

app.on('ready', function(){
    //create new window
    mainWindow = new BrowserWindow({});
    //load html file
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

mainWindow.removeMenu();

});



