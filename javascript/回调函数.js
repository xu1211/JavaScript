// 1. 使用 require 方法加载 fs 核心模块
var fs = require('fs')

/* 
  fs.readFile
    第一个参数就是要读取的文件路径
    第二个参数是一个回调函数          
        读取成功
          data 数据
          error null
        读取失败
          data undefined没有数据
          error 错误对象
*/
fs.readFile('./data/a.txt', function (error, data) {
  // 在这里就可以通过判断 error 来确认是否有错误发生
  if (error) {
    console.log('读取文件失败:' + error)
  } else {
    console.log('读取文件成功:' + data.toString())
  }
})
