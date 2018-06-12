
// const http = require('http');

const express = require('express');

const app = express();

// 加载路由中间件
const home = require('./routes/home');

app.listen(3000);

app.set('view engine', 'xtpl');

app.set('views', 'views');

app.use(express.static('public'));

app.use(home);


