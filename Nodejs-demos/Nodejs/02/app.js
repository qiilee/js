
// 加载系统模块http
const http = require('http');

const url = require('url');

const querystring = require('querystring');

// 创建一个http服务实例
const server = http.createServer();

// 监听端口，只要端口未被占用
server.listen(3000);

// 监听请求，request是一个事件
// 当有请求过来时就会被触发
// server.on('request', (req, res) => {
// 	// 请求和响应

// 	// 响应 状态、响应头、响应主体
// 	res.writeHeader(200, {
// 		'Content-Type': 'text/html',
// 		// 'Content-Length': 12
// 	});
// 	// 响应主体
// 	res.write('<h1>hello world!</h1>'); // 相当于php的echo
// 	res.write('<h2>hello world!</h2>'); // 相当于php的echo
// 	res.write('<h3>hello world!</h3>'); // 相当于php的echo
// 	res.write('<h4>hello world!</h4>'); // 相当于php的echo
// 	res.end();
// });

// server.on('request', (req, res) => {
// 	// res 处理响应
// 	// req 如何处理请求
// 	// 请求头 请求地址 请求主体
// 	// 请求方式

// 	res.writeHeader(200, {
// 		'Content-Type': 'text/html'
// 	});

// 	res.write('请求方式为: ' + req.method);
// 	res.write('<br>请求地址为: ' + req.url);
// 	res.write('<br>请求头为: ' + JSON.stringify(req.headers));

// 	res.end();
// });

// server.on('request', (req, res) => {
// 	// req 处理 请求
// 	// res 处理 响应

// 	// 根据请求方式不一样，处理请求参数也会有差差异
// 	// 例如php 当get方式请求，使用$_GET接收，当请求
// 	// 方式为 post，使用$_POST接收

// 	// get方式的参数是存在于请求地址上的
// 	// 所要获取get的参数与处理请求地址(req.url)
// 	// 通过一个专门的系统模块 url的parse方法可以处理

// 	// 请求地址
// 	// console.log(req.url);

// 	// 使用parse方法解析
// 	// console.log(url.parse(req.url, true));

// 	// query即解析后的结果为一个对象
// 	let query = url.parse(req.url, true).query;
// 	// 通过解析方式赋值
// 	let {username, pass} = query;

// 	res.writeHeader(200, {
// 		'Content-Type': 'text/html'
// 	});

// 	res.write('请求方式为: ' + req.method);
// 	res.write('<br>姓名为: ' + username);
// 	res.write('<br>密码为:' + pass);

// 	res.end();
// });

server.on('request', (req, res) => {
	// req 处理 请求
	// res 处理 响应

	// 根据请求方式不一样，处理请求参数也会有差差异
	// 例如php 当get方式请求，使用$_GET接收，当请求
	// 方式为 post，使用$_POST接收

	// 当以post方式传递数据时，是以请求主体的形式存在
	// post 数据可以传输大文件，所以post数据是一点一点一点的
	// 上传的

	let formData = '';
	// post数据上传过程会持续触此事件
	req.on('data', (chunk) => {
		// 拼接数据
		formData += chunk;
	});

	// 当post数据传输完毕后会触发些事件
	req.on('end', () => {
		// formData 就是完整的post数据了
		// formData 是一个字符串，可以使用
		// 系统模块 querystring的parse方法进行解析

		res.writeHeader(200, {
			'Content-Type': 'text/html'
		});

		// 解构赋值变量
		let {username, pass} = querystring.parse(formData);

		res.write('请求方式为: ' + req.method);
		res.write('<br>姓名ddd为: ' + username);
		res.write('<br>密码adsfasdf为: ' + pass);
		res.end();
	});

	// nodemon
});