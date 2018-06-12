
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
		//使用模板引擎将html输出
		let html = template(tpl, data);
 	    //writeHeader也可以
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(html);
	}

	// 路由
	// / 或者 /add     =>    add.html
	// /list           =>    list.hmtl
	// 模板文件放在views中  静态资源放在public中
	// 地址与路由有映射关系
	// true 把参数转成对象
	//let pathname = url.parse(req.url,true).pathname;
	let {pathname,query}=url.parse(req.url,true);
    console.log(req.url);
    console.log(pathname);
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
		//post是伴随着请求主题发送的
		//而且是一块一块发送

		req.body = '';
		//获得接收的数据
		req.on('data', (chunk) => {
			res.body += chunk;
		});
		// 判断停止
		req.on('end', () => {
			//querystring 是系统模块，parse方法负责将获得的数据转为对象
			let formData = querystring.parse(res.body);
			// 将提交的数据存起来  w是写模式
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