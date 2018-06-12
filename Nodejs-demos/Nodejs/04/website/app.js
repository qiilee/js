
const express = require('express');

const app = express();

app.listen(3000);

// 设置 模板目录
app.set('views', 'static');

// express并没有内置模板引擎，允许开发者自定义
// 设置 模板引擎
app.set('view engine', 'xtpl');

// 设置静态资源目录，函数调用public，就是将静态资源放在public中（最后一步）
app.use(express.static('public'));

app.get('/', (req, res) => {
	// 将index.html响应
	// res.send() 返回给浏览器纯字符串
	// 使用res.render() 响应模板内容
	// 修改static文件夹中的后缀
	//res.render('index', {title: '学习Nodejs啦！！'});
	res.render('index',content= {
		title:'你好',
		link:'恩'
	})
});

app.get('/doc', (req, res) => {
	// 将doc.html响应
	res.render('doc', {});
});

app.get('/blog', (req, res) => {
	// 将blog.html响应
	res.render('blog', {});
});
//总结：xtemplate不支持==，但是支持===
//1 my
const express = require('express');
const app = express();
app.listen(3000);
app.ste

