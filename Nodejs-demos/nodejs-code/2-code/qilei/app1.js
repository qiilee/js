
// 加载系统模块http
const http = require('http');

// 创建一个http服务实例
const server = http.createServer();

// 监听端口，只要端口未被占用
server.listen(3000);

// 监听请求，request是一个事件
// 当有请求过来时就会被触发
server.on('request', (req, res) => {
	// 请求和响应

	// 响应 状态、响应头、响应主体
	res.writeHeader(200, {
		'Content-Type': 'text/html',
		'Content-Length': 12 //响应主体长度
	});
	// 响应主体
	res.write('<h1>hello world!</h1>'); // 相当于php的echo
	res.write('<h2>hello world!</h2>'); // 相当于php的echo
	//@1
	res.write('<h3>hello world!</h3>'); // 相当于php的echo
	res.write('<h4>hello world!</h4>'); // 相当于php的echo
	console.log("请求过来吧")
	res.end();//必须要有结束 谁知道你写完没  如果把这句写到@1的位置  就输出两个
});

