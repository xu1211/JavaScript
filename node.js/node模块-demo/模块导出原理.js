/*  
  在 Node 中，每个模块内部都有一个自己的 module 对象,  module 对象中，有一个成员叫：exports 也是一个对象
  也就是说如果你需要对外导出成员，只需要把导出的成员挂载到 module.exports 中
*/
var module = {
  exports: {
  }
}
//每次导出接口成员的时候都通过 module.exports.xxx = xxx 的方式很麻烦，所以Node为了简化操作专门提供了一个变量：exports = module.exports
var exports = module.exports

/* 注意:
当一个模块需要导出单个成员的时候, 直接给 exports 赋值是不管用的, 因为给 exports 赋值会断开和 module.exports 之间的引用
同理，给 module.exports 重新赋值也会断开
会导致  exports !== module.exports
*/

// 模块代码最后返回 module.exports 对象
return module.exports
