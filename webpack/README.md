# 前端打包工具webpack
webpack 的运行，是需要依赖 node.js 的运行环境的，所以请安装 node.js。

>webpack版本之间差异比较大 ,坑特别多!!! 参考官方文档

## 功能
资源合并,打包,压缩,混淆

## 安装webpack
```shell
#全局安装
npm i webpack -g

#项目根目录安装
npm i webpack --save-dev
```

## 使用案例demo

- 问题1: 首页index.html页面会用\<script>、\<link>等标签引入大量的js代码、css格式文件,导致加载缓慢\
解决办法1: 首页index.html只引用 入口main.js文件, 然后用main.js引用其他文件

- 问题2: 浏览器可能不支持main.js中ES6的语法,会报错不能运行\
解决办法2: 用webpack处理main.js,会生成一个处理后的 出口js文件,解决语法问题

- 运行`webpack 处理前文件 输出文件`对`main.js`进行处理：
```
webpack src/js/main.js dist/bundle.js
```

- 首页(./webpack-demo/src/index.html)
- 处理前文件(./webpack-demo/src/main.js)
- 处理后文件(./webpack-demo/dist/bundle.js)

## 用配置文件方式使用
把入口,出口文件配置在工程目录下webpack.config.js文件中, 只需要在 控制台输webpack就能运行
>当直接输入 webpack 命令执行的时候，首先webpack 发现没有通过命令的形式给它指定入口和出口参数\
就会去 项目的 根目录中，查找一个叫做 `webpack.config.js` 的配置文件\
当找到配置文件后，webpack 会去解析执行这个 配置文件，，就得到了配置文件中导出的配置对象\
当 webpack 拿到 配置对象后，就拿到了 配置对象中，指定的 入口  和 出口，然后进行打包构建；



# webpack-dev-server
自动打包编译的功能

由于每次重新修改代码之后，都需要手动运行webpack打包的命令比较麻烦，使用`webpack-dev-server`来实现代码实时打包编译，当修改代码之后，会自动进行打包构建。

`webpack-dev-server`依赖 `webpack`

## 安装
```
cnpm i webpack-dev-server -g
cnpm i webpack-dev-server --save-dev
```

## 使用
用法和 webpack 命令的用法完全一样 用`webpack-dev-server`启动
可以进行实时打包，生成的出口文件`bundle.js`不在电脑磁盘上，直接托管到了电脑的内存中，所以在项目根目录中找不到 这个打包好的 bundle.js;
 + 把`bundle.js`放在内存中的好处是：由于需要实时打包编译，所以放在内存中速度会非常快

