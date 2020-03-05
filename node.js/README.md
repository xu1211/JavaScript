# node.js
 node.js
 node.js是一个js的运行环境

之前js只能用在浏览器上, 操作BOM/DOM
现在可以运行在node.js上,脱离了浏览器不在操作BOM/DOM,而是调用服务器级别的API:文件读写,网络通信等
[案例:仿Tomcat](./低仿Tomcat.js)

配套**npm**包管理工具,可以用npm下载使用别人的模块,发布自己的模块


---

## 使用方法
1. 安装node.js https://nodejs.org/en/

检查版本
```Shell
npm -v
```

2. 执行js文件
```Shell
node  js文件名
```


---
## [事件EventEmitter](./事件.js)

---
## 路由
后端路由: 根据不同的URL调用不同的服务

---
## 回调

---

## node模块化 [案例](./node模块-demo/模块导出原理.js)
模块化概念: 文件/模块有作用域限制,而且可导出,可加载

在node中的js有模块系统的概念:

Node.js 提供了 exports 和 require 两个对象，exports 是模块公开的接口，require 是从外部获取一个模块的接口，

    1. 如果要对外暴露属性或方法，导出多个成员,成员必须 . 点儿某个成员来访问, 用 exports 就行，
    2. 要导出单个成员(类似class，包含了很多属性和方法)，成员可以直接访问, 就用 module.exports。
  
- 模块系统
  + 核心模块
  + 第三方模块
  + 自己写的模块
  + 加载规则以及加载机制
  + 循环加载

> 题外话: \
js语言设计的时候不支持模块化,民间官方尝试了很多解决方案(amd, cmd, commonjs, ES6)\
浏览器之前都用\<script>标签加载模块,还需要考虑记载顺序问题,\
浏览器现在也可以通过导入require.js(AMD), sea.js(CMD)等三方库实现模块化\
官方规范ES6虽然已经2015发布但是很多运行环境现在还不支持,比如node环境在8.5之后才支持ES6

---

## 包管理工具npm
- npm
常用命令
```shell
# 安装模块
npm install <Module Name>     # 本地安装
npm install <Module Name> -g  # 全局安装 

#卸载模块
npm uninstall <Module Name>

#查看模块
npm ls

#清空NPM本地缓存
npm cache clear
```
安装好之后， 本地安装文件在运行 npm 命令时所在的目录,全局安装在node 的安装目录, 模块包就放在了目录下`node_modules` 文件夹中
>只有那些 安装到 全局 -g 的工具，才能在 终端中正常执行

- package.json 
  - 包描述文件,记录了项目的依赖包,入口文件等等信息, 可以通过 `npm init` 命令自动初始化
  - 如果依赖包文件丢失了,通过`nmp install` 命令自动安装dependencies属性中的包
  - 通过`npm run <脚本名>` 执行scripts属性中定义的脚本

- package-lock.json
  - npm5版本以后会生成这个文件,记录的信息更详细,会记录所有包的下载地址,版本等,还会锁定包版本号防止自动升级
  
[案例](./npmModules-demo)


- 使用模块

代码中只需要通过 require('\<Module Name>') 的方式就好，无需指定第三方包路径。

---
## Express框架
  + 第三方 Web 开发框架
  + 高度封装了 http 模块
  + 更加专注于业务，而非底层细节

---
## 集群 [案例](./node集群.js)


node是单线程的，这一点与JavaScript在浏览器中的特性相同，并且在node中JavaScript主线程与其他线程（例如I/O线程）是无法共享状态的。

- 单线程的好处：
  - 无需像多线程那样去关注线程之间的状态同步问题
  - 没有线程切换所带来的开销
  - 没有死锁存在
- 当然单线程也有许多坏处：
  1. 无法充分利用多核CPU, 很难使用现代机器的多核特性
  2. 大量计算占用CPU会导致应用阻塞(即不适用CPU密集型)
  3. 错误会引起整个应用的退出

nodejs提供了cluster集群（支持端口共享的多进程），cluster基于process,child_process二次封装，方便我们使用该功能实现单机nodejs的web集群。
主进程master将请求分发到子进程worker
