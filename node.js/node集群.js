//cluster模块每一个进程使用一个系统核心numCPUs
var cluster = require("cluster");
//逻辑cpu数量
var numCPUs = require("os").cpus().length;

var http = require('http')
var fs = require('fs')

var server = http.createServer()

//是否主进程
if (cluster.isMaster) {
  console.log(`主进程 ${process.pid} 正在运行`);

  //每个逻辑核 衍生一个新的工作进程。
  for (var i = 0; i < numCPUs; i++) {
    const work = cluster.fork();
    console.log('子进程pid:' + work.process.pid);
  }

  cluster.on("exit", function (worker, code, signal) {
    console.log(`子进程 ${worker.process.pid} 已退出`);
  });

} else {
  // 工作进程可以共享任何 TCP 连接。在这里会共享8080端口

  http.createServer(function (request, response) {
    console.log('子进程:' + cluster.worker.id + `- ${process.pid} 正在处理请求...`);
    response.writeHead(200);
    response.end("hello world\n");
    process.exitCode = 1;
  }).listen(8080);
}
