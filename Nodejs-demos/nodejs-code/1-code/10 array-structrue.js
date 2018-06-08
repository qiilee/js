
var [a, b, c, d] = [1, 2, 3, 4];

// 等同于下面代码
// var a = 1, b = 2, c = 3, d = 4;

// console.log(a, b, c, d);

// 按书写顺序一一对应

var [a, b, c, [d]] = [1, 2, 3, [5]];

// console.log(a, b, c, d);

// 右侧需要是可遍历的值

var [d, e, f] = 'abc';

// console.log(d, e, f);

// 嵌套

var [f, [c, d, [a]]] = [4, [6, 8, [10]]];

// console.log(f, c, d, a);

// 解析不成功则为 undefined

var [a, b, c] = [1, 2];

// console.log(a, b, c);

// 默认值

// var [name, age] = ['itcast', 11];

// var [name, age = 11] = ['itcast'];

var [name = 'itcast', age = 11] = [];

// console.log(name, age);

// 严格等于 undefined

// var [name = 'itcast', age = 11] = [null, null];

// 只有右侧值为 undefined 时才会使用默认值
// var [name = 'itcast', age = 11] = [undefined, false];

var [name = 'itcast', age = 11] = [];

// console.log(name, age);

// ... 表示剩余的
// 只能用在结尾

// var [a, b, c, d] = [1, 2, 3, 4, 5, 6, 7, 8];
var [a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(d);

