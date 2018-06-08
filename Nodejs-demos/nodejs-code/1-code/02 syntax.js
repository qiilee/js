
// 字母、数字、下划线可以定义为变量名
// 不能以数字开头

var str = '我是一个字符串类型的变量';

var _str = '以下划线开头';

console.log(str);
console.log(_str);

// 数据类型
console.log(typeof str);

var obj = {name: 'itcast', age: 11};

console.log(typeof obj);

var num = 12.345;

console.log(typeof num);

var un;

console.log(typeof un);

// 定义函数
function fn() {
	console.log('使用关键字function 定义函数');
}

fn();

var bar = function () {
	console.log(arguments);
	console.log('以表达式的形式定义函数');
}

bar('a', 'b');

// 流程控制
if(true) {
	console.log('判断语句')
}

for(var i=0; i<100; i++) {
	if(i == 10) {
		// break;
		continue;
	}
	console.log(i);
}

// 内置对象
var now = new Date();

console.log(now)

// location对象是浏览器提供的
// 不是ECMAScript规范
// 只在浏览器中生效，类似的还有 window document navigator ...
console.log(location);