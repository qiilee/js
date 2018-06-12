
// includes 检测字符串中是否包含某一特定字符
let str = 'my name is itcast';

console.log(str.includes('a')); // 检测是否存在 a 字符 true
console.log(str.includes('p')); // 检测是否存在 p 字符 false

// startsWith
let info = '我是一个兵';

console.log(info.startsWith('我')); // 是否是以 "我" 开头 true
console.log(info.startsWith('是')); // 是否是以 "是" 开头 false

// endsWith
// info = '我是一个兵';

console.log(info.endsWith('兵')); // 是否是以 "我" 开头 true
console.log(info.endsWith('是')); // 是否是以 "是" 开头 false

// repeat
console.log('哈'.repeat(6));