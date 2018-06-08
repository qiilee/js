
// 加载系统模块http
const http = require('http');

const url = require('url');//get需要

// 创建一个http服务实例
const server = http.createServer();

// 监听端口，只要端口未被占用
server.listen(3000);

// 监听请求，request是一个事件
// 当有请求过来时就会被触发
server.on('request', (req, res) => {
	// req 处理 请求
	// res 处理 响应

	// 根据请求方式不一样，处理请求参数也会有差差异
	// 例如php 当get方式请求，使用$_GET接收，当请求
	// 方式为 post，使用$_POST接收

	// get方式的参数是存在于请求地址上的
	// 所要获取get的参数与处理请求地址(req.url)
	// 通过一个专门的系统模块 url的parse方法可以处理

	// 请求地址
	 // console.log(req.url);

	// 使用parse方法解析
	 console.log(url.parse(req.url, true));

	// query即解析后的结果为一个对象
	let query = url.parse(req.url, true).query;
	// 通过解析方式赋值
	let {username, pass} = query;

	res.writeHeader(200, {
		'Content-Type': 'text/html'
	});

	res.write('请求方式为: ' + req.method);
	res.write('<br>姓名为: ' + username);
	res.write('<br>密码为:' + pass);

	res.end();
});