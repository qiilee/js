
const http = require('http');

const url = require('url');

const fs = require('fs');

const path = require('path');

const mime = require('mime');

const server = http.createServer();

server.listen(3000);

server.on('request', (req, res) => {

	let pathname = url.parse(req.url).pathname;
	console.log(pathname);

	if(pathname == '/') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.readFile('./index.html', (err, file) => {
			if(err) return;
			res.end(file);
		});
		
	} else if(pathname == '/abc/cdf/doc') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.readFile('./doc.html', (err, file) => {
			if(err) return;
			res.end(file);
		});
	} else if(pathname == '/blog') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.readFile('./blog.html', (err, file) => {
			if(err) return;
			res.end(file);
		});
	} else {
		let realpath = path.join('./', pathname);
		fs.readFile(realpath, (err, file) => {
			if(err) return err;
			res.writeHead(200, {'Content-Type': mime.lookup(realpath)});
			res.end(file);
		})
	}

});