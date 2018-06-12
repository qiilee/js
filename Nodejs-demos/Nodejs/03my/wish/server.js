
const http = require('http');//1 nodejs提供的系统模块

const fs = require('fs');//6 读取文件  系统模块

const url = require('url');//8 解析地址

const path = require('path');//10.1

const template   = require('art-template');

//12 mime 可以根据文件后缀名自动查找相对应的mime类型
//不是系统模块  要下载到当前的目录  不要是全局的 npm install mime
//
const mime = require('mime');


const server = http.createServer();//2 创建服务器实例


server.listen(8080);//3 监听端口   可以是3000

//4 等待请求  监听事件 接收请求作出响应  
server.on('request', (req, res) => {
   
	//9 请求地址
	// console.log(req.url);
	// 根据请求地址，去读取内容，然后再响应
	//9
	// console.log(url.parse(req.url));
	let pathname = url.parse(req.url).pathname;
	//10.2 获取真实地址  把地址拼接好 建议static前加上./永远表示当前的意思
	let realPath = path.join('./static', pathname);
	//15 直接访问没有具体文件名时，默认打开index.html  处理默认的值
	//地址与路由有一个映射关系 pathname 是地址  后面是路由
	if (pathname == '/') {
		realPath = path.join('static', 'index.html');
	}

	//7 读取文件内容 可能成功失败 （看视频按步骤来）  nodemon server.js
    // 11  改为realpath
	fs.readFile(realPath, (err, file) => {
		//14 当发生错误时
		if(err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.write('<h1>404 Not Found!</h1>');
			return res.end();
		}
		 // 5请求什么内容，响应什么结果，静态页面放在static中
		// 将读取的内容响应给浏览器
		//13 mime....自己找对应的类型  
		console.log(mime.lookup(realPath)); 
		res.writeHead(200, {'Content-Type': mime.lookup(realPath)});
		// 读取文件内的html，然后再返回
		res.write(file);
		res.end();
	});
});