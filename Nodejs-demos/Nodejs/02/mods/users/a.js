
const b = require('./b');

// b 的结果为 {name: '小明', sayHello: function () {}}

let {sayHello, name} = b;

module.exports = {
	name: name,
	sayHello: sayHello
}