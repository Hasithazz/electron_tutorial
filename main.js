const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile('index.html');
};

// electron encorage to use app.whenReady() instead of app.on('ready',()=>{createWindow()})

app.whenReady().then(() => {
  createWindow();

  // macOS specific. Because macOS apps stay open even after all windows are closed.
  //You should listen for activate event after your app is initialized. Therefore need to place this code inside app.whenReady()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed. in Windows and Linux
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
