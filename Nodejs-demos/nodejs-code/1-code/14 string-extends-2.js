
// var html = '<div><p></p></div>';

// 使用``定义模板字符串

// let html = `<div><p></p></div>`;

let html = `<table>
	<tr>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	<tr>
</table>`;

// console.log(html);

// 可以运算

var data = {
	name: 'itcast',
	age: 11,
	sex: '男'
}

// let htmlstr = '<p>我叫<%= name %>，我今年<%= age %>岁了，性别<%= sex %>';
let htmlstr = `<p>我叫${data.name}，我今年${data.age}岁了，性别${data.sex}</p>`;

// console.log(htmlstr);

// 可调用函数

function foo() {
	// return '哈哈'.repeat(2);

	console.log('哈哈'.repeat(2));
}

let fnstr = `${foo()}`;