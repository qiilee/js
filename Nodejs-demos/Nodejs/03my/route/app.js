//返回的比较多  用res.write()
////总结：输入http://localhost:3001/a 与 http://localhost:3001/b
const http = require('http');

const url = require('url');

const server = http.createServer();

server.listen(3000);

server.on('request',(req,res) => {
	let pathname = url.parse(req.url).pathname;

	res.writeHead(200,{'Content-Type':'text/html'})

	if(pathname == '/a'){
       res.end('111')
	}else if('/b'){
		res.end('222')
	}
})