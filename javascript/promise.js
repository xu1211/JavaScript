var promise = new Promise(function (resolve, reject) {
    //异步代码块
    if (异步操作成功) {
        resolve(value);
    }
    if (异步操作失败) {
        reject(error);
    }
})

promise.then(function (value) {
    //成功时resolve执行的代码
}, function (error) {
    //失败时reject执行的代码
})