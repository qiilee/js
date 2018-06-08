
const express = require('express');

// 解析cookie
const cookieParser = require('cookie-parser');

// 解析session
const session = require('express-session');

// 解析post数据
const bodyParser = require('body-parser');

// 路由中间件
const admin = require('./routes/admin');
const home = require('./routes/home');

// http 实例
const app = express();

// 监听端口
app.listen(3000);

// 设置静态资源
app.use(express.static('public'));

// 设置模板目录
app.set('views', 'views');

// 设置模板引擎
app.set('view engine', 'xtpl');

// 解析post数据
app.use(bodyParser());

// 调用session中间件
app.use(session({
    secret: 'blog'
}));

app.use('/admin', function (req, res, next) {
    // console.log(req.session.loginfo);
    app.locals.loginfo = req.session.loginfo;
    // 没有登录时req.session.loginfo 为 undefined
    if(!req.session.loginfo) {
        return res.redirect('/login');
    }

    next();
});

// 路由

// http://localhost:3000/admin/ 后台网站
// http://localhost:3000/ 前台网站

// 如果将所有的路由都集中在某一文件
// 会导致维护成本增加，可以使用 路由中间件 
// 将路由写在不同文件，进行分组管理

// app.get('/admin/index', (req, res) => {
//     res.render('admin/index', {});
// });

// 将后台网站路由分组
// 当访问的路由以 '/admin' 开头
// 都会使用admin这个路由中间件
app.use('/admin', admin);

// 将前台网站路由分组
// 当访问的路由以 '/' 开头
// 都会使用home这个路由中间件
app.use('/', home);


