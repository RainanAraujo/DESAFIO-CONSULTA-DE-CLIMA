const { app, BrowserWindow } = require('electron');
const path = require('node:path');

function criarJanela() {
  const janela = new BrowserWindow({ width: 700, height: 550 });
  janela.loadFile(path.join(__dirname, 'src', 'index.html'));
}

app.whenReady().then(criarJanela);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
