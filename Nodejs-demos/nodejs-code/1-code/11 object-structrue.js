

// 先查找同名属性然后再赋值

var {arg1: name, arg2: age} = {arg1: 'itcast', arg2: 11};

// console.log(name, age);

// 不受顺限制

var {arg1: name, arg2: age} = {arg2: 11, arg1: 'itcast'};

// console.log(name, age);

// 可简写成如下

// var {name: name, age: age} = {name: 'itcast', age: 11}
var {name, age} = {name: 'itcast', age: 11};

// console.log(name, age);

// 嵌套

// var {name: name, son: {sonname: sonname}} = {name: '顺治', son: {sonname: '康熙'}};
var {name, son: {sonname}} = {name: '顺治', son: {sonname: '康熙'}}

// console.log(name, sonname);

// 解析不成功则为 undefined

// name age 
// var {name, age, sex} = {name: '顺治', age: 1200, sex: null};
var {name, age, sex} = {name: '顺治', age: 1200, sex: undefined};

// name 顺治
// age 1200
// sex undefined
// console.log(name, age, sex);

// 默认值
// var {name, age, sex = '男'} = {name: '顺治', age: 12000}
var {name, age, sex: sex = '男'} = {name: '顺治', age: 12000}

// name 顺治
// age 1200
// sex undefined

// console.log(name, age, sex);

// 严格等于 undefined

var {name, age, sex: sex = '男'} = {name: '顺治', age: 12000, sex: null};

// name 顺治
// age 1200
// sex null

var {name, age, sex: sex = '男'} = {name: '顺治', age: 12000, sex: undefined};

// name 顺治
// age 1200
// sex 男

// console.log(name, age, sex);

// 
var {name, age, sex, score} = {name: '小明', age: 18, sex: '男', score: 99};