
const http = require('http');

const url = require('url');

const path = require('path');

const fs = require('fs');

const wishes = require('./database/wishes');

const template = require('art-template');

template.config('base', path.join(__dirname, 'views'));

const mime = require('mime');

const server =  http.createServer();

server.listen(3000);

server.on('request', (req, res) => {

	res.render = function (tpl, data) {
		let html = template(tpl, data);

		res.writeHeader(200, {
			'Content-Type': 'text/html'
		});

		res.end(html);
	}
	// / => index.html

	let {pathname, query} = url.parse(req.url, true);

	// console.log(pathname, query);

	switch(pathname) {
		case '/':
		// 响应index.html
		res.render('index', {lists: wishes});
		break;

		case '/create':

		// query 就是前端传过来数据
		// nickname 用户填写 你好
		// content 用户填写的 你好你好
		// no 自增 wishes.length + 1
		// time  (new Date()).getTime()
		// style 'a' + Math.floor(Math.random() * 4 + 1)

		query.no = wishes.length; // 5
		query.time = (new Date()).getTime(); // 414234321
		query.style = 'a' + Math.ceil(Math.random() * 5); // a2

		wishes.push(query);

		fs.open('./database/wishes.json', 'w', (err, fd) => {
			if(err) {
				return res.end('内部错误');
			}

			fs.write(fd, JSON.stringify(wishes));
			
			res.writeHeader(200, {'Content-Type': 'application/json'})
			res.end(JSON.stringify(query));
		});
		
		break;

		default:
		// 响应静态资源
		fs.readFile(path.join('public', pathname), (err, file) => {
			if(err) {
				return res.end('not found');
			}

			res.writeHeader(200, {'Content-Type': mime.lookup(pathname)});
			res.end(file);
		})
	}
});

