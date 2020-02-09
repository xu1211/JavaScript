/* 导出 
  exports
*/

var foo = 'bar'

function add(x, y) {
  return x + y
}

/*方式1: 
  给exports对象挂载属性与方法
*/
exports.num = 1
exports.str = 'hello'
exports.add = add
exports.obj = {foo}