# Electron
https://www.electronjs.org/docs

Electron = 谷歌浏览器 + node
用来构建一个桌面应用,原理就是 用浏览器展示页面, 用node操作底层api

## 使用方法

1. npm安装 electron
```cmd
npm install -g electron
```

2. 创建工程
例 (./demo)

3. 运行
在工程目录下,cmd
```cmd
electron .
```

## Electron模块详解
### electron.app模块
控制整个应用的生命周期
- 常用事件
    1. will-finish-launching
    应用程序完成基础的启动的时候被触发
    在 Windows 和 Linux 中， will-finish-launching 事件= ready 事件； 在 OS X 中不同

    2. ready
    当 Electron 完成初始化时被触发。

    3. window-all-closed
    当所有的窗口都被关闭时触发。

    4. gpu-process-crashed
    当 GPU 进程崩溃时触发。

- 常用方法
    1. app.quit()
    关掉所有的窗口
### electron.BrowserWindow 模块
创建一个浏览器窗口
- 事件
    1 ready-to-show
    在加载页面时，渲染进程第一次完成绘制时触发

    2 closed
    当窗口已经关闭的时候触发
- 方法
    1. BrowserWindow.loadURL()
    2. BrowserWindow.show()
    显示并聚焦于窗口
    3. BrowserWindow.destroy()
    强制关闭窗口