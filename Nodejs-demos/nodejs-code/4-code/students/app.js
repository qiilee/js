
const http = require('http');

const url = require('url');

const path = require('path');

const fs = require('fs');

const students = require('./database/students');

const querystring = require('querystring');

const mime = require('mime');

const template = require('art-template');

template.config('base', path.join(__dirname, 'views'));

const server = http.createServer();

server.listen(3000);

server.on('request', (req, res) => {
	// 拼凑模板
	res.render = function (tpl, data) {
		// 使用模板引擎将html输出
		let html = template(tpl, data);

		res.writeHeader(200, {'Content-Type': 'text/html'});
		res.end(html);
	}

	// 设计路由(想像成打客服时系统的编，1号查询话费 2充值 0 人工)
	
	// / 或 /add 时  =>  add.html
	// /list 时      =>  list.html

	// 获得地址 http://localhost:3000/add?name=123
	// console.log(url.parse(req.url, true));
	// let pathname = url.parse(req.url, true).pathname;

	let {pathname, query} = url.parse(req.url, true);

	switch(pathname) {
		case '/':
		case '/add':
		// 把add.html响应
		res.render('add', {action: '/save'});
		break;

		/**** 查看所有学员信息 ****/
		case '/list':
		// 把list.html响应
		res.render('list', {lists: students});
		break;

		/**** 新增学员信息 ****/
		case '/save':

		// post 是伴随着请求主体发送的
		// 而且是一块一块发送
		req.body = '';
		req.on('data', (chunk) => {
			req.body += chunk;
		});

		req.on('end', () => {
			// 将post提交的数据解析成对象
			let formData = querystring.parse(req.body);
			// 将数据添加原数据中
			students.push(formData);

			fs.open('./database/students.json', 'w', (err, fd) => {
				if(err) {
					return res.end('服务内部错误');
				}
				// 将数据保存到文件中
				fs.write(fd, JSON.stringify(students));
				// 跳转页面
				res.writeHeader(302, {
					Location: '/list'
				});

				res.end();
			});
		});

		// res.end('aaa');
		break;

		/**** 取出编辑的数据 ****/
		case '/edit':
		// query.key是get传的参数（其含义是索引值）
		// 根据索引值取现数据
		let sts = students[query.key];
		// 取出的数据是学员信息，是一个对象
		// 在此对象上添加一个属性
		sts.action = '/update?key=' + query.key;
		// 渲染模板
		res.render('add', sts);
		break;

		/**** 更新编辑内容 ****/
		case '/update':

		req.body = '';
		req.on('data', (chunk) => {
			req.body += chunk;
		});

		req.on('end', () => {
			let formData = querystring.parse(req.body);

			// 需要去数组里找到原数据，并替换

			students.splice(query.key, 1, formData);

			fs.open('./database/students.json', 'w', (err, fd) => {
				if(err) {
					return res.end('内部错误');
				}

				fs.write(fd, JSON.stringify(students));

				res.writeHeader(302, {
					Location: '/list'
				});

				res.end();
			})
		});
		break;
		/**** 删除 ****/
		case '/del':
		// 根据索引值将数据从数组删除
		students.splice(query.key, 1);

		fs.open('./database/students.json', 'w', (err, fd) => {
			if(err) {
				return res.end('内部错误');
			}

			fs.write(fd, JSON.stringify(students));

			res.writeHeader(302, {
				Location: '/list'
			});

			res.end();
		});

		break;

		default:
		// 把静态资源（图片、CSS、JS等）响应
		fs.readFile(path.join('public', pathname), (err, file) => {
			if(err) {
				return res.end('not found');
			}

			res.writeHeader(200, {'Content-Type': mime.lookup(pathname)});
			res.end(file);
		})
	}
});