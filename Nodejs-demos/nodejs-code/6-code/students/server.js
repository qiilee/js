
// Express + MySQL

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const mysql = require('mysql');

// 连接数据库
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'students'
});

// 模拟学院信息，方便遍历
let subjects = [
	{val: 1, text: '前端与移动开发学院'},
	{val: 2, text: 'PHP'},
	{val: 3, text: 'JAVA'},
	{val: 4, text: 'Android'},
	{val: 5, text: 'UI'},
	{val: 6, text: 'IOS'},
	{val: 7, text: 'C++'}
];

// 配置模板引擎
app.set('view engine', 'xtpl');

// 设置模板目录
app.set('views', 'views');

// 中间件，处理静态资源
app.use(express.static('public'));

// 解析post请求的参数，添加到了req.body上
app.use(bodyParser());

app.listen(3000);

app.get('/', (req, res) => {
	// res.send('首页');
	res.render('add', {
		// 添加变量，用来确定添加操作时的接口地址
		action: '/add',
		// 学院数据
		subjects: subjects
	});
});

app.get('/list', (req, res) => {
	// res.send('列表');
	// sql语句
	let query = 'select * from users';

	db.query(query, (err, result) => {
		if(err) return res.end('内部错误！');
		// 渲染模板
		res.render('list', {students: result});
	});
});

// 当以post方式请求此路由时
app.post('/add', (req, res) => {
	// console.log(req.body);
	// 将接收的数据添加到数据库中去
	// 使用 db.query 将SQL语句执行
	// sql语句
	let query = 'insert into users set ?';
	db.query(query, req.body, (err, result) => {
		if(err) {
			// 前端Ajax请求，返回JSON格式数据
			return res.json({
				code: 10001,
				msg: '添加失败'
			});
		}

		// 将一个对象格式数据返回
		// 可以得到更详细的信息
		// {
		// 	code: 10000,
		// 	msg: '添加成功'
		// }

		// res.send(JSON.stringify({
		// 	code: 10000,
		// 	msg: '添加成功'
		// }));

		// 前端AJAX请求，返回一个JSON格式数据
		res.json({
			code: 10000,
			msg: '添加成功'
		});
	});
});

// 查询即将编辑的数据
app.get('/edit', (req, res) => {
	// 根据ID查询数据
	// ID来自于请求参数，GET请求
	// req.query 接收的 ? 后面的
	// req.params 接收的路由:后面的
	// console.log(req.query)

	let query = 'select * from users where ?';
	// req.query 转成 id = 1 格式
	db.query(query, req.query, (err, result) => {
		if(err) {
			return res.send('内部错误！');
		}

		// 学院数据
		result[0].subjects = subjects;
		// 由于添加和修改用的同一个前端
		// 逻辑，接口地址要更换
		result[0].action = '/update';

		// 渲染模板
		res.render('add', result[0]);
	});
});

// 更新数据
app.post('/update', (req, res) => {
	// 接收客户端传过来的数据

	// 更新数据库

	// 获取被修改用户的id
	let id = req.body.id;
	// id是主键，不能被更新
	delete req.body.id;

	// update users set id=8, name=李清照,...
	// sql语句
	let query = 'update users set ? where id=' + id;

	db.query(query, req.body, (err, result) => {
		if(err) return res.send('内部错误！');
		// Ajax请求，返回JSON格式数据
		res.json({
			code: 10000,
			msg: '修改成功'
		});
	});
});

app.get('/delete', (req, res) => {

	// 根据ID删除数据
	// ID是前端传过来的，以GET方式

	// console.log(req.query);

	let query = 'delete from users where ?';
	// req.query 会被转成  id = 1的格式
	db.query(query, req.query, (err, result) => {
		if(err) return res.send('内部错误！');

		res.redirect('/list');
	});
});
