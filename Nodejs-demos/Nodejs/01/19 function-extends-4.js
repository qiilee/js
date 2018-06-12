
// let f = v => v

// function 关键字
// var foo = function () {}

// ES6新增了一种定义函数的方式

// a) 函数名
// b) 参数
// c) 返回值

// fn = a => a;

// function fn(a) {
// 	return a;
// }

// console.log(fn(1));

// bar = a => a + 1;

// function bar() {
// 	for(var i=0; i<10; i++) {

// 	}
// }

// 没有参数使用括号
// 多个参数，将参数放到括号中，并以逗号分隔
// 当函数体内容较多时，使用{}
bar = () => {
	for(var i=0; i<10; i++) {
		console.log(i);
	}
}

 bar();

let nums = Array.of(1, 2, 4, 16);

// nums.find(function (val, key, arr) {

// })

let res = nums.find((val, key, arr) => {
	return val == 2;
});

console.log(res);