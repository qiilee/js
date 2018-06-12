
const express = require('express');

// 用来解析post数据的
const bodyParser = require('body-parser');

const url = require('url');

const app = express();

app.listen(3000);

app.set('view engine', 'xtpl');

app.set('views', 'views');

// use 在Express有专有名词
// 叫做挂载或者叫中间件
// 其作用就是调用某模块（函数）
app.use(bodyParser());

app.get('/', (req, res) => {
	res.render('index', {title: '学习Nodejs'});
});

// app.get('/login/:id/:abc', (req, res) => {
app.get('/login', (req, res) => {
	// 
	// console.log(url.parse(req.url, true));


	// 在通过地址进行传参时
	// 有两种方式
	// a) 在地址使用 ? 分隔 ? 后面就是参数
	// 使用 req.query进行接收
	// get 的参数
	console.log(req.query);

	// b) 在路由进行参数设定
	// 使用 : 表示一个参数（形参）
	// 将来在设定形参数位置，所对应的地址部分
	// 会当成一个实参传递过来
	console.log(req.params);

	res.send('111');
});

// 以post方式发过来的请求
app.post('/login', (req, res) => {

	// 接收post数据
	// console.log(req);
	// 但是需要使用一个第三方模块

	// 原来使用 req.on('data')和req.on('end');
	// 处理post 数据，现在交给 body-parser进行处理

	// 要使用body-parser 需要使用 express 的use方法
	// 调用
	console.log(req.body);

	res.send('222');
});


// function fn(id, abc) {
// 	console.log(a);
// }

// fn(1, 2);

// req.query 和  req.params 接收get参数

// req.body 接收 post 参数 （使用中间件）app.use(bodyParser());