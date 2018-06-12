
// ES6新增了let关键字，用于声明变量
// 其声明的变量只在当前代码块中有效
// 相当于是新增了块级作用域

// var str = 'hello';

let str = 'hello';

console.log(str);

if(true) {
	// 使用let在代码块中
	// 声明了变量
	// 这个变量只能在当前块被访问
	let num = 10;

	var abc = 'es6';

	 console.log(num);
}

 //console.log(num)
 console.log(abc);

// 使用let声明变量可以避免全局变量污染

var temp = [];
// var i = 0;
// for(var i=0; i<6; i++) {
// 	temp[i] = function () {
// 		console.log(i);
// 	}
// }

// temp[1]();

for(let j=0; j<6; j++) {
	temp[j] = function () {
		console.log(j);
	}
}

// temp[1]();

// console.log(a);
// 使用var存在变量提升
// var a;

// 不存在变量提升
// console.log(b);
// let b; // 报错

// 使用var 可以重复声明
var a = 10;
var a = 15;

// 不允许重复声明
// let b; // 报错，上面使用let声明
// let a; // 报错，上面使用var进行的声明

// 暂时性死区
// ES6规定，在任意代码块中只要使用了let声明了变量
// 则这个变量一开始就形成了封闭的作用域

var t;
if(true) {
	//t = 10;
	let t; // 报错
}


