
// 执行数据库的操作

// 使用第3方模块 mysql 进行

const mysql = require('mysql');

// 使用 主机地址  用户名   密码

// mysql.createConnection('mysql://root:123456@localhost/zs');

let db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'zs'
});

// 查询数据库
// show databases;

// db.query('show databases', (err, data) => {
// 	// console.log(data);
// });

// db.query('select * from users', (err, data) => {
// 	console.log(data);
// })


