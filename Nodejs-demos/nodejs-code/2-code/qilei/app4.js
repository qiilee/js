
// 加载系统模块http
const http = require('http');

const querystring = require('querystring');//post需要

// 创建一个http服务实例
const server = http.createServer();

// 监听端口，只要端口未被占用
server.listen(3000);

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

		console.log(formData);	

		// 解构赋值变量
		let {username, pass} = querystring.parse(formData);

		res.write('请求方式为: ' + req.method);
		res.write('<br>姓名ddd为: ' + username);
		res.write('<br>密码adsfasdf为: ' + pass);
		res.end();
	});

	// nodemon
});