
// 定义默认参数
// 在定义函数时，可以为参数设置默认值格式 arg = val
// 当在调用函数时可以不传实参，这时以参数默认为准备
// 当传递了实参以实参为准
function fn(a = 10, b=1) {
	console.log(a, b);
}

fn(20);