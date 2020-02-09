/* 导出 
    module.exports
*/

/* 方式2:
  如果一个模块需要直接导出某个成员，而非挂载的方式, 就要使用module.exports
*/
// 只能导出一个对象,后面会覆盖前面
module.exports = 1
module.exports = 'hello'
module.exports = function (x, y) {
  return x + y
}

/*
// 也可以用这种方式导出多个成员
module.exports = {
  num: 1,
  str: 'hello',
  add: function (x, y) {
    return x + y
  }
}
*/