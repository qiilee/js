
const http = require('http');

const url = require('url');

const path = require('path');

const fs = require('fs');

const students = require('./database/students');

// 用来解析post参数的
const querystring = require('querystring');

const mime = require('mime');

const template = require('art-template');
// 配置模板引擎，默认模板路径
template.config('base', path.join(__dirname, 'views'));

const server = http.createServer();

server.listen(3000);

server.on('request', (req, res) => {
	// 封装渲染方法
	res.render = function (tpl, data) {
		let html = template(tpl, data);

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(html);
	}

	// 路由
	// / 或者 /add     =>    add.html
	// /list           =>    list.hmtl

	// 地址与路由有映射关系
	let pathname = url.parse(req.url).pathname;

	switch(pathname) {
		case '/':
		case '/add':
		// 加载add.html
		res.render('add', {});
		break;

		case '/list':
		// 加载list.html
		res.render('list', {lists: students});
		break;

		case '/save':
		// 接收表单提交数据
		res.body = '';
		// 
		req.on('data', (chunk) => {
			res.body += chunk;
		});
		// 
		req.on('end', () => {
			let formData = querystring.parse(res.body);
			// 将提交的数据存起来
			let database = path.join(__dirname, 'database/students.json');
			fs.open(database, 'w', (err, fd) => {
				if(err) {
					return res.end('internal error');
				}

				// let tmp = [];

				// tmp.push(formData);
				// 将数据追加到原来数据里
				students.push(formData);
				// 文件已存在，所以只需打开，然后再写入
				fs.write(fd, JSON.stringify(students), (err) => {
					// 320 指示浏览器重定向操作
					// 通过Location设定跳转地址
					res.writeHead(302, {
						'Location': '/list'
					});
					// 千万要结束响应
					res.end();
				});
			});
		});
		break;

		default:
		// 取出静态资源，图片、CSS、JS 等
		fs.readFile(path.join('public', pathname), (err, file) => {
			if(err) {
				return res.end('not found!');
			}

			res.writeHead(200, {'Content-Type': mime.lookup(pathname)});
			res.end(file);
		});
	}
});