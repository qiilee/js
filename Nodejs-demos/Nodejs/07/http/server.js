
const express = require('express');

// 解析cookie
const cookieParser = require('cookie-parser');

// 解析处理session
const session = require('express-session');

const app = express();

app.listen(3000);

// 静态资源
app.use(express.static('public'));

//模板引擎
app.set('view engine', 'xtpl');

app.set('views', 'views');

// 可以设置全局的数据
// 在模板引擎中可以被全局使用
app.locals = {age: 12};

// 使用Nodejs接收客户端的cookie，这时在服务器获取到cookie=itcast

// app.use(function (req, res, next) {

//     console.log(req.headers.cookie);

//     next();
// });

// 有第三方中间已经将解析cookie的功能封装成了中间件
// 这个中间件叫 cookie-parser
app.use(cookieParser());

app.use(session({
    secret: 'itcast'
}));

// 使用session中间件后，会新增一个对象属性
// req.session，直接为此对象再追加属性即设置session

app.get('/', (req, res) => {
    // 设置是服务器下达的“通知”
    // 浏览器负责设置，所以 res.cookie()
    res.cookie('age', 18);

    // NodeJS的session是存在内存里的
    // 所以一旦服务器重启 session 就会丢失了
    console.log(req.session);

    res.render('index', {name: 'it'});
})

app.get('/doc', (req, res) => {
    // 已经设置好的cookie是浏览器请求
    // 过来的，所以使用req.cookies接收
    // console.log(req.cookies);

    console.log(req.session);

    res.render('doc', {name: 'itcast'});
})

app.get('/blog', (req, res) => {

    // console.log(req.session);

    req.session.sex = '男';

    res.render('blog', {});
})