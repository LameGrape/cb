const electron = require("electron")
const app = electron.app

app.on("ready", () => {
    const window = new electron.BrowserWindow({
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    window.loadFile("assets/index.html")
})

app.on("window-all-closed", () => {
    app.quit()
})