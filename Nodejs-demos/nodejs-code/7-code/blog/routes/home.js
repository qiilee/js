
// 使用 路由中间件

const express = require('express');

// 实例路由中间件
const router = express.Router();

// 数据库
const db = require('../config/db');

// 设计路由

// /
router.get('/', (req, res) => {
    res.render('home/index', {});
});

// /about
router.get('/about', (req, res) => {
    res.render('home/about', {});
});

// /article
router.get('/article', (req, res) => {
    res.render('home/article', {});
});

// /join
router.get('/join', (req, res) => {
    res.render('home/join', {});
});

// /login
router.get('/login', (req, res) => {
    res.render('home/login', {});
});

// /register
router.get('/register', (req, res) => {
    res.render('home/register', {});
});

// 注册
router.post('/register', (req, res) => {
    // 
    // console.log(req.body);

    // insert into 表名 (字段名1, 字段2...) values(值1, 值2...);
    // insert into 表名 set 字段名1=值1, 字段名2=值2...;

    // md5加密
    req.body.pass = db.md5(req.body.pass);    
    // 数据库操作
    db.query('insert into users set ?', req.body, (err, result) => {
        if(err) {
            return res.json({
                code: 10002,
                msg: '数据库错误!'
            });
        }
        // 成功时响应
        return res.json({
            code: 10000,
            msg: '注册成功！'
        })
    });
});

// 登录
router.post('/login', (req, res) => {

    // console.log(req.body);
    // 密文密码
    req.body.pass = db.md5(req.body.pass);

    // select 字段名1, 字段名2... from 表名 where 条件

    // sql 注入风险 不去考虑
    let query = 'select * from users where email=? and pass=?';
    // 数据库处理
    db.query(query, [req.body.email, req.body.pass], (err, result) => {
        if(err) {
            return res.json({
                code: 10002,
                msg: '用户名或密码错误'
            });
        }
        // 存储登录信息
        req.session.loginfo = result[0];

        res.json({
            code: 10000,
            msg: '登录成功!'
        });
    });
});

// 
router.get('/logout', (req, res) => {
    // 清掉session
    req.session.loginfo = null;
    // 退出登录跳转到前台页
    res.redirect('/');
});

module.exports = router;