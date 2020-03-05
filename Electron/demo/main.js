//主进程

//引入electron模块
var electron = require('electron');
//创建electron引用
var app = electron.app;
//创建electron BrowserWindow的引用
var BrowserWindow = electron.BrowserWindow;

//nodejs中的path模块
var path = require('path');

//变量 保存对应用窗口的引用
var mainWindow = null;


/**
 * 创建应用主窗口
 * @returns {void}
 */
function createWindow() {
    //创建BrowserWindow的实例 赋值给mainWindow打开窗口   
    //软件默认打开的宽度高度 {width:400,height:400}
    mainWindow = new BrowserWindow({ width: 800, height: 600 });

    //__dirname指向被执行 js 文件的绝对路径
    console.log('拼接路径' + path.join('file:', __dirname, 'index.html'));

    mainWindow.loadURL(path.join('file:', __dirname, 'index.html'));

    mainWindow.on('closed', () => {
        mainWindow = null;
    })
}


// Electron 会在初始化后, 准备创建浏览器窗口时调用这个函数。
app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})