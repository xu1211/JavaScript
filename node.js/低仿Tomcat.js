var http = require('http')
var fs = require('fs')

var server = http.createServer()
//web应用目录
var wwwDir = 'D:/WEBROOT/www'

//读取web应用目录下文件内容并返回,默认访问index.html
server.on('request', function (req, res) {
  var url = req.url

  var filePath = '/index.html'
  if (url !== '/') {
    filePath = url
  }

  fs.readFile(wwwDir + filePath, function (err, data) {
    if (err) {
      return res.end('404 Not Found.')
    }
    res.end(data)
  })
})

// 3. 绑定端口号，启动服务
server.listen(8080, function () {
  console.log('低仿版tomcat服务running...')
})
