
const http = require('http');

const url = require('url');

const path = require('path');

const template = require('art-template');

const users = require('./database/users');

const data = require('./database/data');

// console.log(users);

const server = http.createServer();

server.listen(3000);

// 配置模板目录
template.config('base', path.join(__dirname, 'views'));

server.on('request', (req, res) => {
	// 1) 设计路由

	// /   	  =>  index.html
	// /list  => list.html

	// 2) 地址与路由映射关系 
	let pathname = url.parse(req.url).pathname;

	// 封装渲染方法
	res.render = function (tpl, data) {
		// 
		let html = template(tpl, data);

		res.writeHead(200, {'Content-Type': 'text/html'});

		res.end(html);
	}

	switch(pathname) {
		case '/':
			res.render('index', {data: data});
			break;
		case '/list':
			res.render('list', {lists: users});
			break;
	}

});