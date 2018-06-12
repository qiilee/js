
// 引入系统模块
const path = require('path');
// 此模块专门用处理路径的

// 模拟一个路径
let src = './public/images/logo.png';

// 获取所在路径
// let pathname = path.dirname(src);

// console.log(pathname);

// console.log(__dirname);

// 获取文件名
// let filename = path.basename(src);

// console.log(filename);

// 获取后扩展名
// let extname = path.extname(src);

// console.log(extname);

// 解析路径
let parsepath = path.parse(src);

let {dir, base, ext, name} = parsepath;

console.log(dir, base, ext, name);

// 路径组合
// 不同的操作系统 路径的分隔符不一样 / \
// let joinpath = path.join('./a', './b', './c'); // a\b\c
// let joinpath = path.join('./a', '../b', './c'); // \b\c
let joinpath = path.join('./a', './b', '../../c'); // \c

console.log(joinpath);


