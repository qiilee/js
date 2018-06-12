
// Express通过路由中间件专门处理路由

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    // res.send('请求过来了');
    res.render('index', {});
});

module.exports = router;