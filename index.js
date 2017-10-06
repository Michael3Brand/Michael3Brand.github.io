const electron = require('electron')
const { app, BrowserWindow, Menu } = electron

app.on('ready', () => {
    var win = new BrowserWindow({ width: 800, height: 600, icon: __dirname + '/webapp/ressources/logoMB.png', });
    win.loadURL(`file://${__dirname}/index.html`);
});

app.on('window-all-closed', app.quit);


// Build Menu
const template = [{
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            { role: 'pasteandmatchstyle' },
            { role: 'delete' },
            { role: 'selectall' }
        ]
    },
    {
        label: 'View',
        submenu: [
            { role: 'reload' },
            { role: 'forcereload' },
            { role: 'toggledevtools' },
            { type: 'separator' },
            { role: 'resetzoom' },
            { role: 'zoomin' },
            { role: 'zoomout' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    },
    {
        role: 'window',
        submenu: [
            { role: 'minimize' },
            { role: 'close' }
        ]
    },
    {
        role: 'help',
        submenu: [{
                label: 'Website',
                click() { require('electron').shell.openExternal('https://michael3brand.github.io') }
            },
            {
                label: 'GitHub',
                click() { require('electron').shell.openExternal('https://github.com/Michael3Brand') }
            },
            {
                label: 'Mail',
                click() { require('electron').shell.openExternal('mailto:brand-michael@outlook.de') }
            }
        ]
    }
]

if (process.platform === 'darwin') {
    template.unshift({
        label: app.getName(),
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services', submenu: [] },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideothers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    })

    // Edit menu
    template[1].submenu.push({ type: 'separator' }, {
        label: 'Speech',
        submenu: [
            { role: 'startspeaking' },
            { role: 'stopspeaking' }
        ]
    })

    // Window menu
    template[3].submenu = [
        { role: 'close' },
        { role: 'minimize' },
        { role: 'zoom' },
        { type: 'separator' },
        { role: 'front' }
    ]
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)