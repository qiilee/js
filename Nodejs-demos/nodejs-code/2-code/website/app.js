
// http是一个系统模块
const http = require('http');

const url = require('url');

const queryString = require('querystring');

const {readFile} = require('fs');

const path = require('path');

const mime = require('mime');

// 创建http服务实例
const server = http.createServer();

// 监听3000端口
server.listen(3000);

server.on('request', (req, res) => {

	if(pathname == '/') {
		readFile('./views/index.html', 'utf-8', (err, data) => {
			if(err) return err;
			// 读取html文件
			res.writeHeader(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
		});		
	}
})