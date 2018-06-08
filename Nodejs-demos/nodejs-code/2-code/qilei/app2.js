
// 加载系统模块http
const http = require('http');

// 创建一个http服务实例
const server = http.createServer();

// 监听端口，只要端口未被占用
server.listen(3000);


server.on('request', (req, res) => {
	// res 处理响应
	// req 如何处理请求
	// 请求头 请求地址 请求主体
	// 请求方式

	res.writeHeader(200, {//响应头  
		'Content-Type': 'text/html'
	});
    //响应主体
	res.write('请求方式为: ' + req.method);//请求方式
	res.write('<br>请求地址为: ' + req.url);//请求地址
	res.write('<br>请求头为: ' + JSON.stringify(req.headers));//请求头，这里没有请求主体哦，只有post的方式才有

	res.end();
});

