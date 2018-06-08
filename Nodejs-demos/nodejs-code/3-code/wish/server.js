
const http = require('http');

const fs = require('fs');

const url = require('url');

const path = require('path');

// 
const mime = require('mime');

const server = http.createServer();

server.listen(3000);

server.on('request', (req, res) => {

	// console.log(url.parse(req.url));
	let pathname = url.parse(req.url).pathname;
	// 
	if(pathname == '/') {
		pathname = 'index.html';
	}

	let realpath = path.join('./static', pathname);
	// console.log(mime.lookup(realpath));
	// 请求什么内容，响应什么结果
	fs.readFile(realpath, (err, file) => {
		
		if(err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.write('404 Not Found!');
			return res.end();
		}

		res.writeHead(200, {'Content-Type': mime.lookup(realpath)});

		res.write(file);

		res.end();		
	});
});