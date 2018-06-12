
// 连接数据库

 const mysql = require('mysql');

 const md5 = require('md5');

 let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'blog'
 });

 db.md5 = md5;

 module.exports = db;