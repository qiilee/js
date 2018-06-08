
// let man = '小明';

// let sayHello = (name) => {
// 	// console.log('你好' + name + '，我叫小明');
// 	console.log(`你好${name}，我叫小明`);
// }

// console.log(man);

// 通过exports将数据公开出去
// 此方式较为简单
// exports.man = man;

// exports.sayHello = sayHello;

// 也可使用module.exports将数据公开出去

// module.exports.man = man;
// module.exports.sayHello = sayHello;

let person = {
	name: '小明',
	sayHello: function () {
		console.log(`你好${name}，我叫小明`);
	}
}

// 当所要公开的数据为一个对象时不能使用exports
// 因为exports 会被得新赋值会与module.exports断开联系
// 这时只能使用module.exports
// 类似 var a = {name: '小明'}; b = a;
// 当 b = {} 新对象时，则与 a 断开了联系
// exports = person;

// 是标准的公开数据的方式
// 所以任何情况都可以使用module.exports
// module.exports = person;

// 标准的公开数据的方法就该是 module.exports

// 由 module_exports 相对较长，所使用 exports 做为 module_exports
// 的别名也就是说  exports = module.exports

// exports.name 等同于 module.exports.name

// 如果 exports = {} 则与 module.exports 断开了联系

// var a = {name: '小明'}

// var b = a;

// b.name = '小红';

// a.name;

// b = {
// 	name: '小红'
// };

// a.name

