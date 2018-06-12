
var a = 10;

let b = 15;

a = 20;

b = 30;

console.log(a, b);

// 使用 const 声明常量

const c = 12;

// c = 14; 报错 不能被修改

// 声明时必须赋值
// const d; // 报错

// 不允许重复
// const c = 14; // 报错

// const b = 10; // 前面使用 let 声明了

// const a = 10; // 前面使用 var 声明了

// 也会创建块级作用域

if(true) {
	const e = 10;
	// 产生块级作用域
	console.log(e);
}

// console.log(e);

// 避免变量被覆盖