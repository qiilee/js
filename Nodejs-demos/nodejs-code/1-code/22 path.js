
var path = require('path');

console.log(path.dirname('./fs/hello.js'));

console.log(path.extname('./fs/hello.js'));

console.log(path.parse('./fs/hello.js'));

console.log(path.isAbsolute(__dirname));