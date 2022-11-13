const electron = require("electron")
const app = electron.app

app.on("ready", () => {
    const window = new electron.BrowserWindow({
        fullscreen: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    window.loadFile("assets/index.html")
    window.setBackgroundColor("black")
})

app.on("window-all-closed", () => {
    app.quit()
})