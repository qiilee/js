
// 函数赋值

// function fn(a, b) {
// 	console.log(a + b);
// }

function fn([a, b = 10]) {
	console.log(a + b);
}

// var arr = [10, 20];

// fn(arr); // 30

fn([10]); // 20

// 交换两个变量（不借助于第三个变量实现）
let a = 'hello';
let b = 'world';

console.log(a, b);

[a, b] = [b, a];

console.log(a, b);

// 接收函数返回值
function foo() {

	// 
	return {
		name: '张三',
		age: 16,
		sex: '男'
	}
}

// var {name, age, sex} = foo();

// var f = foo();

// console.log(name, age, sex);

// 提取JSON对象值
let json = '{"name": "itcast", "age": 11}';

let {name, age} = JSON.parse(json);

console.log(name, age);





