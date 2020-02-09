/* 加载 require
    加载模块会执行模块里的代码, 并拿到模块导出的对象
    优先从缓存加载: 如果在 a模块中已经加载过 b模块 ,那么加载模块a可以拿到b的接口对象，再次加载模块b不会重复加载,不会重复执行里面的代码
*/
// 1. 通过exports直接挂载,加载模块就会得到exports对象, 使用对象中的成员必须 . 点儿某个成员来访问
var foo1Exports = require('./foo1')
// 2. 通过module.exports直接得到某个成员, 可以直接使用
var foo2Exports = require('./foo2')

console.log('foo1Exports:')
console.log(foo1Exports)
console.log(foo1Exports.num)
console.log(foo1Exports.str)
console.log(foo1Exports.obj)
console.log(foo1Exports.add(1, 2))

console.log('\n foo2Exports:')
console.log(foo2Exports(1, 2))
