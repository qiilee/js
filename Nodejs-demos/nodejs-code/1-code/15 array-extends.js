

// Array.from();
function foo() {
	// arguments 伪数组

	console.log(Array.from(arguments));
}

// foo(1, 2, 3);

// 可转换拥有length属性对象

let str = 'hello world';

// console.log(Array.from(str));

let obj = {
	'0': 'itcast',
	'1': 11,
	length: 2
}

// console.log(Array.from(obj));

// Array.of 定义一个数组的

// let arr = new Array(1, 2, 3);

// let arr = new Array(3); // ES5 小问题

// 使用of()方法定义数组

let arr = Array.of(3);

console.log(arr);

// find() findIndex()
// find 从数组找到某个单元
// findIndex 从数组中找到某个单元的索引

let newarr = Array.of('d', 'a', 'b', 'c', 'a', 'd');

newarr.find(function (val, key, arr) {
	// 
	// console.log(val, key, arr);
	// 找到第1个符合条件，立即停止
	return val == 'a';
});

let nums = Array.of(1, 2, 4, 16);

var res = nums.find(function (val, key, nums) {
	// console.log(val, key, arr);
	return val > 2;
});

// console.log(res);

var res = newarr.findIndex(function (val, key, arr) {
	// 根据数组单元值进行判断
	// 找到符合条件的第一个的索引值并返回
	return val == 'a';
});

console.log(res);

var res = nums.findIndex(function (val, key, arr) {
	return val > 4;
});

console.log(res);





