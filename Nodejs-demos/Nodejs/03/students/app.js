
const http = require('http');

const url = require('url');

const path = require('path');

const fs = require('fs');

const template = require('art-template');

const mime = require('mime');

const querystring = require('querystring');

const database = require('./database/students');

const server = http.createServer();

server.listen(3000);

const static = 'public';
const views = 'views';

//指定模板目录
template.config('base', path.join(__dirname, views));
//设计路由
server.on('request', (req, res) => {
	//获得地址 http://localhost:3000/add?name=123
	let pathname = url.parse(req.url).pathname;
	//console.log(pathname);

	let html;

	if(pathname == '/' || pathname == '/add') {
		if(req.method == 'GET') {
			html = template('add', {});
			return res.end(html);
		}

		if(req.method == 'POST') {
			let formData = '';
			req.on('data', (chunk) => {
				formData += chunk;
			});

			req.on('end', () => {
				formData = querystring.parse(formData);

				database.push(formData);

				fs.open('./database/students.json', 'w', (err, fd) => {
					fs.write(fd, JSON.stringify(database));
				});

				res.writeHead(302, {
					Location: '/list'
				});

				res.end();
			});
		}

	} else if(pathname == '/list') {
		html = template('list', {students: database});
		res.end(html);
	} else {
		let realPath = path.join(static, pathname);

		fs.readFile(realPath, (err, file) => {
			if(err) {
				res.writeHead(404, {'Content-Type': 'text/html'});
				return res.end('<h1>404 Not Found!</h1>');
			}

			res.writeHead(200, {'Content-Type': mime.lookup(realPath)});
			res.end(file);
		});
	}
});