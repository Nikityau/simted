const {BrowserWindow} = require('electron')

class WindowApp {
    win

    constructor(screen) {
        const display = screen.getPrimaryDisplay()

        this.win = new BrowserWindow({
            width: display.workAreaSize.width * 0.7,
            height: 800,
            center: true,
            title: 'Simted',
            autoHideMenuBar: true,
            webPreferences: {
                preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
            },
        });
    }

    load(url) {
        console.log('win load')
    }
}

module.exports = WindowApp