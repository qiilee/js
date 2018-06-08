
// 加载.js结尾的模块
// require('./23cart.js');

// 加载以.json结尾的模块
// let users = require('./24users.json');
// console.log(users);

// 使用require，require就是一个方法
// 所以传递的路径的其实对于require方法来说
// 只是一个字符串

// require 内部逻辑可以根据参数的格式进行处理

// a) 相对路径 ./ 或 ../

// require('./mods/a'); // 相对路径，相对于当前程序

// b) 绝对路径 E:\ 或 / (linux)

// E:\nodejs\02day\4-code
// 得到绝对路径
// let pathname = path.join(__dirname, 'mods/a');

// console.log(pathname);

// require(pathname);

// c) 除上述两种外，直接写模块名称，nodejs会优先
// 认为是系统模块，找到后即返回，如果不是系统模块
// 则会到当前程序目录下node_modules目录下查找

const path = require('path'); // 系统模块

const a = require('a'); // node_module目录下的模块

// 书写模块就是要将一些通用功能封装到一起，以重复使用
// 所以模块要有返回才更有意义
