const {app, BrowserWindow, screen} = require('electron');
const path = require('path');

const FileEditor = require('./main/windows/file-editor')


const createWin = (win) => {
    win.load()
}

const main = () => {
    const fileEditor = new FileEditor(screen)
    createWin(fileEditor)
}

app.on('ready', main);

if (require('electron-squirrel-startup')) {
    app.quit();
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

/*
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        fileEditor.load()
    }
});*/
