
const express = require('express');

const app = express();

app.listen(3000);
//设置模板目录
app.set('views', 'views');
//设置模板引擎
app.set('view engine', 'xtpl');
//设置静态资源目录
app.use(express.static('public'));

// 响应index.html
app.get('/', (req, res) => {
	// 调用模板引擎，响应html内容
	res.render('index', {
		title: '首页',
		content: {
			title: '<a href="#">这张图美不美，美</a>',
			link: '/images/aa.jpg',
		},
		headers: {
			title: '学习Nodejs啦!',
			navs: [
				{text: '首页', link: '/'},
				{text: '文档', link: '/doc'},
				{text: '博客', link: '/blog'}
			]
		}
	});
});

// 响应doc.html
app.get('/doc', (req, res) => {
	// 调用模板引擎，响应html内容
	res.render('doc', {
		title: '文档',
		headers: {
			title: '学习Nodejs啦!',
			navs: [
				{text: '首页', link: '/'},
				{text: '文档', link: '/doc'},
				{text: '博客', link: '/blog'}
			]
		}
	});
});

// 响应blog.html
app.get('/blog', (req, res) => {
	// 调用模板引擎，响应html内容
	res.render('blog', {
		title: '博客',
		students: [
			{name: '张三', age: 16, score: 80},
			{name: '李四', age: 18, score: 85},
			{name: '王五', age: 18, score: 86},
			{name: '赵六', age: 19, score: 92},
			{name: '周七', age: 17, score: 89},
			{name: '周日', age: 16, score: 94}
		],
		headers: {
			title: '学习Nodejs啦!',
			navs: [
				{text: '首页', link: '/'},
				{text: '文档', link: '/doc'},
				{text: '博客', link: '/blog'}
			]
		}
	});
});

//1 my
const express = require('express');
const app = express();
app.listen(3000);
//设置模板目录
app.set('views','views');
//设置模板引擎
app.set('view engine','xtpl');
//设置静态资源目录
app.use(express.static('public'));
app.get('/',(req,res)=>{
	res.render('index',{
		title:'首页',
		content:{
           title:'<a href="#">这张图美不美</a>',
			link:'/images/aa.jpg'
		},
		headers:{
			title:'开始学习了',
			navs:[
				{text:'首页',link:'/'},
				{text:'文档',link:'/doc'},
				{text:'博客',link:'/blog'}
			]
		}

	});
});
