
// 使用第三方模块，可以使得Nodejs访问 Mysql 数据库

// 模块名称为 mysql

const mysql = require('mysql');

// 链接数据库服务器并登录
let db = mysql.createConnection({
	 host: 'localhost', // 服务器地址
	 user: 'root', // 用户名
	 password: '123456', // 用户密码
	 database: 'bxg'
});

// 具体操作需要通过 SQL 语句完成

// 使用 query 方法可以执行 SQL 语句

// 1、查询

db.query('select * from teacher', (err, data) => {
	if(err) return;

	// console.log(data);
});

// a) 排序
db.query('select cg_id, cg_name, cg_pid from category order by cg_pid desc', (err, data) => {
	if(err) return;

	// console.log(data);
});

// b) 过滤
db.query('select cg_id, cg_pid, cg_name from category where cg_pid>2', (err, data) => {
	if(err) return;

	// console.log('过滤', data);
});

// c) 分组
db.query('select cg_id, cg_pid, cg_name, count(*) from category group by cg_pid', (err, data) => {
	if(err) return;

	// console.log('分组', data);
});

// 2、插入
// db.query('insert into teacher (tc_name, tc_pass) values("张帅2", 123456)', (err, result) => {
// 	if(err) return;
// 	// 进行插入操作，一般自增ID是有意义的
// 	// console.log(result.insertId);
// });

let [name, pass] = ['长帅', 123456];

// console.log('insert into teacher (tc_name, tc_pass) values("'+name + '",' + pass +')')
// 不可取，过于繁琐
// db.query('insert into teacher (tc_name, tc_pass) values("'+name + '",' + pass +')', (err, result) => {
// 	// console.log(err);
// 	console.log(result.insertId);
// });

// 简洁写法，使用 "?"做为占位符，再通过传递一个数组参数进行赋值
// 数组中的数据与"?"的顺序保持一致
// db.query('insert into teacher (tc_name, tc_pass, tc_roster) values(?, ?, ?)', ['itcast', 123456789, 'monkey'], (err, result) => {
// 	console.log(result.insertId);
// })

// db.query('insert into teacher (tc_name, tc_pass, tc_roster) values(?, ?, ?)', ['汉子', 123456789, 'monkey'], (err, result) => {
// 	console.log(result.insertId);
// });

// 数据是一个对象
let data = {
	tc_name: '中国人',
	tc_pass: 123456789,
	tc_roster: 'dog'
}

// insert into teacher set tc_name='中国人', tc_pass=123456, tc_roster='dog'
// 上述写法等同于
// insert into teacher (tc_name, tc_pass, tc_roster) values('中国人', 123456789, 'dog')
// db.query('insert into teacher set ?', data, (err, result) => {
// 	console.log(result.insertId);
// });

// 3、修改
// db.query('update teacher set tc_name="帅长1", tc_pass=654321 where tc_id=14', (err, result) => {
// 	if(err) return;

// 	console.log(result);
// })

// db.query('update teacher set tc_name=?, tc_pass=? where tc_id=?', ['师长2', 'abcdef', 15], (err, result) => {
// 	if(err) return;

// 	console.log(result);
// })

// 4、删除
let tc_id = 6;
db.query('delete from teacher where tc_id>?', [tc_id], (err, result) => {
	if(err) return;

	console.log(result);
})