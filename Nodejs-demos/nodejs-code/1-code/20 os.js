
// 使用os系统模块可以获取当前操作
// 系统信息，内存，cpu

// 使用require加载模块

const os = require('os');

// 模块是被封装的若干逻辑，通过向外提供方法来工作

// os 是一个对象，此对象上有若干方法

console.log('hostname:' + os.hostname());
console.log('freemem:' + os.freemem());
console.log('platform:' + os.platform());