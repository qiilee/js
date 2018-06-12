
const http = require('http');

const url = require('url');

const fs = require('fs');

const path = require('path');

const mime = require('mime');

// 引入模板引擎
const template = require('art-template');
// ./views
template.config('base', path.join(__dirname, 'views'))

const server = http.createServer();

server.listen(3000);

server.on('request', (req, res) => {
	// 
	let pathname = url.parse(req.url).pathname;

	let realpath;

	// 抽空公共函数，负责调用模板引擎
	// 并响应页面
	res.render = function (tpl, data) {
		let html = template(tpl, data);

		res.writeHead(200, {'Content-Type': 'text/html'});

		res.end(html);
	}

	// 准备数据供模板引擎使用
	let data = {
		title: '学习Nodejs啦！！',
		navs: [
			{text: '首页', link: '/'},
			{text: '文档', link: '/201703/doc'},
			{text: '博客', link: '/201703/blog'},
		]
	}

	if(pathname == '/') {
		/*****模板引擎方式*****/
		res.render('index', data);

		// 拼接文件路径
		// realpath = path.join('views', 'index');

		/*****普通方式*****/
		// 将index.html响应给浏览器
		// fs.readFile(realpath, (err, file) => {
		// 	if(err) {
		// 		return res.end('错误');
		// 	}

		// 	res.writeHead(200, {'Content-Type': 'text/html'});
		// 	res.end(file);
		// });
	} else if(pathname == '/201703/doc') {
		/*****模板引擎方式*****/
		res.render('doc', data);
		
		// 将doc.html响应给浏览器
		// 拼接文件路径
		// realpath = path.join('views', 'doc.html');

		// 将index.html响应给浏览器
		// fs.readFile(realpath, (err, file) => {
		// 	if(err) {
		// 		return res.end('错误');
		// 	}

		// 	res.writeHead(200, {'Content-Type': 'text/html'});
		// 	res.end(file);
		// });
	} else if(pathname == '/201703/blog') {
		/*****模板引擎方式*****/
		res.render('blog', data);

		// 将blog.html响应给浏览器
		// 拼接文件路径
		// realpath = path.join('views', 'blog.html');

		// 将index.html响应给浏览器
		// fs.readFile(realpath, (err, file) => {
		// 	if(err) {
		// 		return res.end('错误');
		// 	}

		// 	res.writeHead(200, {'Content-Type': 'text/html'});
		// 	res.end(file);
		// });
	} else {
		// 静态资源
		// 拼接文件路径
		let staticurl = path.join('public', pathname);

		fs.readFile(staticurl, (err, file) => {
			if(err) {
				return res.end('not found!');
			}

			res.writeHead(200, {'Content-Type': mime.lookup(staticurl)});
			res.end(file);
		});
	}
})