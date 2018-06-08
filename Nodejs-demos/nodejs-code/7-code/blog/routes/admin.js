
// 使用 “路由中间件” 专门的管理 各种路由

// 路由中间是由 Express 提供

const express = require('express');

// 实例化Express的路由中间件
const router = express.Router();

const db = require('../config/db');

// 设计路由

// /admin
router.get('/', (req, res) => {
    // 
    res.render('admin/index', {});
});

// /admin/settings
router.get('/settings', (req, res) => {
    // 根据登录信息取用户的原始信息
    // 再进行修改

    // select 字段名1, 字段名2... from 表名 where 条件

    let query = 'select * from users where id=?';
    // 查询用户原始信息
    db.query(query, req.session.loginfo.id, (err, result) => {
        if(err) {
            return res.send('内部错误');
        }

        // 查询成功后将数据传给模板
        res.render('admin/settings', result[0]);
    });
});

// /admin/repass
router.get('/repass', (req, res) => {
    // 
    res.render('admin/repass', {});
});

// /admin/add
router.get('/add', (req, res) => {
    res.render('admin/add', {});
});

// admin/edit
router.get('/edit', (req, res) => {
    res.render('admin/edit', {});
});

// /admin/list
router.get('/list', (req, res) => {
    res.render('admin/list', {});
});

// 更新资料
router.post('/update', (req, res) => {

    // 接收 客户端提交过来数据
    // 根据ID来更新用户信息

    let id = req.body.id;
    let query = 'update users set ? where id=' + id;
    // update users set id=1, name='itcast',...

    // id 是主键不能被更新

    delete req.body.id;
    // 数据操作
    db.query(query, req.body, (err, result) => {
        if(err) {
            return res.json({
                code: 10002,
                msg: '内部错误!'
            });
        }
        // 成功的响应
        res.json({
            code: 10000,
            msg: '更新成功!'
        });
    });

    // res.send('过来');
});

// 接收数据，添加文章
router.post('/addpost', (req, res) => {

    // 接收客户端传过来的数据
    // 并添加数据库

    let query = 'insert into posts set ?';
    // 插入数据库
    db.query(query, req.body, (err, result) => {
        if(err) {
            return res.json({
                code: 10002,
                msg: '内部错误!'
            })
        }
        // 响应结果
        res.json({
            code: 10000,
            msg: '添加成功!'
        });
    })

});

// 将设计好的路由中间件，公开出去
module.exports = router;

