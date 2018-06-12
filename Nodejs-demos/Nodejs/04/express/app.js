
// 
const express = require('express');

// 相当于
// http.createServe();
const server = express();

server.listen(3000);

// 如果用户使用get方请求时
server.get('/', (req, res) => {
	res.send('hell world');
});

server.get('/list', (req, res) => {
	res.send('list content');
});

// 相当于
// server.on('request', (req, res) => {

// 	if(req.method == 'GET') {
// 		switch(pathname) {
// 			case '/':

// 			// 
			// break;

			// case '/list':
// 		}		
// 	}
// })



//总结：阿里的xtpl xtemplate
