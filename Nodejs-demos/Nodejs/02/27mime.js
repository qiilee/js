
// 使用mime可以获取文件类型

const mime = require('mime');

let css = './public/css/main.css';

let img = './public/images/logo.png';

let js = './public/js/jquery.min.js';

let json = './public/data/users.json';

console.log(mime.lookup(css));
console.log(mime.lookup(img));
console.log(mime.lookup(js));
console.log(mime.lookup(json));
