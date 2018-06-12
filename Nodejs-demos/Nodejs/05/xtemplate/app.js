
const express = require('express');

const querystring = require('querystring');

const app = express();

app.listen(3000);

app.set('views', 'views');

app.set('view engine', 'xtpl');

app.use(express.static('public'));

// function fn() {
// 	// callback
// 	return function (abc, cdf, cb) {
// 		abc.name = 'itcast';

// 		cb();
// 	}
// }

// fn();

// app.use = function(cb) {
// 	cb(req, res);
// };

// app.use(fn());

app.use(function (req, res, next) {
	req.age = 11;

	next();
});

app.use('/doc', function (req, res, next) {
	req.name = 'itcast';

	next();
});

// 中间件，解析post数据
app.use(function (req, res, next) {
	req.body = '';

	req.on('data', function (chunk) {
		req.body += chunk;
	});

	req.on('end', function () {
		req.body = querystring.parse(req.body);

		next();
	});
});

// 响应index.html
app.get('/', (req, res) => {
	console.log(req.age);
	console.log(req.name);

	// 调用模板引擎，响应html内容
	res.render('index', {
		title: '首页',
		content: {
			title: '<a href="#">这张图美不美，美</a>',
			link: '/images/aa.jpg',
		},
		headers: {
			title: '学习Nodejs啦!',
			navs: [
				{text: '首页', link: '/'},
				{text: '文档', link: '/doc'},
				{text: '博客', link: '/blog'}
			]
		}
	});
});

app.post('/', (req, res) => {

	console.log(req.body);

	res.send('接收数据');
});

// 响应doc.html
app.get('/doc', (req, res) => {

	// console.log(req.age);
	// console.log(req.name);

	// 调用模板引擎，响应html内容
	res.render('doc', {
		title: '文档',
		headers: {
			title: '学习Nodejs啦!',
			navs: [
				{text: '首页', link: '/'},
				{text: '文档', link: '/doc'},
				{text: '博客', link: '/blog'}
			]
		}
	});
});

// 响应blog.html
app.get('/blog', (req, res) => {

	// console.log(req.age);
	// console.log(req.name);

	// 调用模板引擎，响应html内容
	res.render('blog', {
		title: '博客',
		students: [
			{name: '张三', age: 16, score: 80},
			{name: '李四', age: 18, score: 85},
			{name: '王五', age: 18, score: 86},
			{name: '赵六', age: 19, score: 92},
			{name: '周七', age: 17, score: 89},
			{name: '周日', age: 16, score: 94}
		],
		headers: {
			title: '学习Nodejs啦!',
			navs: [
				{text: '首页', link: '/'},
				{text: '文档', link: '/doc'},
				{text: '博客', link: '/blog'}
			]
		}
	});
});

//总结：app.get('/',)里面的/写不写一样
//要用next()，中间件才能继续向下执行
//在CMD中，node -v ,npm -v 可查询版本
//一般建议使用 ./123.js 不用123.
//
//

// http://www.baidu.com/index.html?name='itcast'

// http

// 主机

// 端口

// 路径

// 参数

// 锚点