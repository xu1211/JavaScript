var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器处理函数 #1
var listener1 = function listener1() {
   console.log('监听器 listener1 执行。');
}

// 监听器处理函数 #2
var listener2 = function listener2() {
  console.log('监听器 listener2 执行。');
}


// 监听 connection 事件，处理函数为 listener1 
eventEmitter.addListener('connection', listener1);

// 监听 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

//查看connection事件有几个监听器
var eventListeners = eventEmitter.listenerCount('connection');
console.log("connection事件现在有" + eventListeners + " 个监听器监听连接事件。");

// 触发 connection 事件 
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

// 再次触发连接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log("connection事件现在有" + eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");