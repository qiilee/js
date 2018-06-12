

// fs 模块可以进行文件操作

const fs = require('fs');

// 创建一个文件夹
// 第1个参数 文件夹名称
// fs.mkdir('./fs2', function (err) {
// 	// err 当创建失败时，err 就是错误信息
// 	// 当成功时 err 为 null

// 	console.log(err);
// });

// fs.mkdir('./fs3', (err) => {
// 	console.log(err)
// });

// 删除一个文件夹
// 第1个参数 文件夹名称
// fs.rmdir('./fs1', (err) => {
// 	// err 当创建失败时，err 就是错误信息
// 	// 当成功时 err 为 null
// 	console.log(err);
// });

// 创建一个文件
// 第1个参数 文件名称
// 第2个参数 文件的内容
// 第3个参数 回调函数
// fs.writeFile('./fs/demo.txt', '哈哈', (err) => {
// 	// err 当创建失败时，err 就是错误信息
// 	// 当成功时 err 为 null
// 	console.log(err);
// });

// 读取一个文件
// 第1个参数 文件路径
// 第2个参数 编码格式
// fs.readFile('./fs/demo.txt', 'utf8', (err, res) => {
// 	// 在Nodejs中回调函数中错误信息永远都是第1参数
// 	console.log(err);
// 	console.log(res);
// });

// 文件读写
// fs.writeFile('./fs/demo.txt', '一些内容', (err) => {
// 	console.log(err);
// });

// 第1个参数 文件路径
// 第2个参数 打开模式 读 r 写 w 追加 a
// 第3个参数 回调函数
// fs.open('./fs/demo.txt', 'r', (err, fd) => {
// 	// 以读模式打开
// 	// 使用 fs.write() 写入
//
// 	fs.write(fd, '另一些内容', (err) => {
// 		console.log(err);
// 	});
// });


 fs.open('./fs/demo.txt', 'w', (err, fd) => {
 	// 以写模式打开
 	// 使用 fs.write() 写入

 	fs.write(fd, '另一些内容', (err) => {
 		console.log(err);
 	});
 });


//fs.open('./fs/demo.txt', 'a', (err, fd) => {
//	// 以追加模式打开
//	// 使用 fs.write() 写入
//
//	fs.write(fd, '另一些内容哈哈哈1111', (err) => {
//		console.log(err);
//	});
//});
