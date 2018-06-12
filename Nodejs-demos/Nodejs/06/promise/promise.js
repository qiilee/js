
let promise = new Promise(function (resolve, reject) {
	// 执行一个异步操作
	// 异步操作可以执行成功也可能执行失败

	if(true) { // 执行成功时
		resolve();
	} else { // 执行失败时
		reject();
	}
});

// 将成成或失败时的逻辑写到外面
// 而不是嵌套在异步操作内部
promise.then(function () {
	// 成功时我会被调用
}).catch(function () {
	// 失败时我会被调用
});