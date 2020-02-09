# JavaScript
 JavaScript学习笔记

## 分号问题
js没有强制要求代码后加分号, 造成了代码以 **( [ `** 这些符号开头可能会发生一些语法解析错误,
所以你会发现在一些第三方的代码中能看到一上来就以一个 ; 开头。

## 箭头函数
ES6标准新增了一种新的函数：Arrow Function（箭头函数）。
箭头函数内部的this是词法作用域，由上下文确定
```JavaScript
x => x * x
//相当于:
function (x) {
    return x * x;
}

// 无参数:
() => 3.14

// 两个参数:
(x, y) => x * x + y * y

// 可变参数:
(x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}
```


## 回调函数
Promise对象

Promise 对象是 JavaScript 的异步操作解决方案, 它起到代理作用（proxy），充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。解决回调地狱的问题

> Promise 是一个构造函数\
Promise 上有两个函数 resolve（成功的回调函数）和 reject（失败的回调函数）。prototype属性上有一个 .then()方法

- Promise对象有三种状态
    - pending: 初始状态，异步操作未完成
    - fulfilled: 异步操作成功
    - rejected: 异步操作失败
> resolve函数的作用是: 将Promise实例的状态从“未完成”变为“成功”（即从pending变为fulfilled）\
reject函数的作用是: 将Promise实例的状态从“未完成”变为“失败”（即从pending变为rejected）

执行原理:
 1. Promise的实例表示一个异步操作, 只要new Promise实例,就会立刻执行异步操作的代码, 此时Promise对象状态为 **pending**
 2. 异步代码执行完成会返回 状态定型的Promise对象, .then()方法通过判断Promise对象的状态是 **fulfilled**还是**rejected** 来执行对应回调函数 resolve或reject
 3. .then() 方法又会返回一个新的 promise 对象, 所以可以继续接着调用.then

