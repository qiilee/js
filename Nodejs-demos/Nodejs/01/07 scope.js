

// 作用域分3种，分别是 全局作用域、函数作用域、块级作用域

// ES5版本不存在块级作用域
if(true) {
	var num = 10;
}

console.log(num);

// ES5前只有全局作用域和函数作用域

// 全局作用域

var b = 15;

// 函数作用域

function fn() {
	var a = 10;
}

fn()

console.log(a);

// ES5前使用var定义变量，没有块级作用域

