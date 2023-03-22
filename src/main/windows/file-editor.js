const WindowApp = require('./interface/window')

class FileEditor extends WindowApp {
    constructor(screen) {
        super(screen)
    }

    load(url) {
        this.win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
    }
}

module.exports = FileEditor