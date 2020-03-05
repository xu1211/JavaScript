// 这是 main.js 是我们项目的JS入口文件

// 1. 导入 Jquery
import $ from 'jquery'
// import *** from *** 是ES6中导入模块的方式 // 由于 ES6的代码太高级了，浏览器解析不了，所以这一行执行会报错
//相当于node语法 const $ = require('jquery')

// 使用 import 语法，导入 CSS样式表
import './css/index.css'
import './css/index.less'
import './css/index.scss'
// 注意： webpack, 默认只能打包处理 JS 类型的文件，无法处理 其它的非 JS 类型的文件；
// 如果要处理 非JS类型的文件，我们需要手动安装一些 合适 第三方 loader 加载器；
// 1. 如果想要打包处理 css 文件，需要安装 cnpm i style-loader css-loader -D
// 2. 打开 webpack.config.js 这个配置文件，在 里面，新增一个 配置节点，叫做 module, 它是一个对象；在 这个 module 对象身上，有个 rules 属性，这个 rules 属性是个 数组；这个数组中，存放了，所有第三方文件的 匹配和 处理规则；


// 注意： webpack 处理第三方文件类型的过程：
// 1. 发现这个 要处理的文件不是JS文件，然后就去 配置文件中，查找有没有对应的第三方 loader 规则
// 2. 如果能找到对应的规则， 就会调用 对应的 loader 处理 这种文件类型；
// 3. 在调用loader 的时候，是从后往前调用的；
// 4. 当最后的一个 loader 调用完毕，会把 处理的结果，直接交给 webpack 进行 打包合并，最终输出到  bundle.js 中去




$(function () {
  $('li:odd').css('backgroundColor', 'yellow')
  $('li:even').css('backgroundColor', function () {
    return '#' + 'D97634'
  })
})