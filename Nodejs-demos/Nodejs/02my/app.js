/*�ܽ᣺
*  request就是一个事件，有请求时触发
*   案例1  node app.js 执行后的现象说明程序一直等着
*  案例2 200是状态码
*   'Content-Type':'text/html' 是响应头
*   res.write  响应主体 浏览器返回的内容
*
*   案例3 可以利用index.html测试get  post方式
*
*
*
*
*
*
* */

  //案例1
//const http = require('http');
//const server = http.createServer();
//server.listen(3000);
//server.on('request', () => {
//console.log('你好');
//})


//案例2  响应
const http = require('http');
const server = http.createServer();
server.listen(3000);
//server.on('request', (req,res) => {
//    res.writeHeader(200,{
//        'Content-Type':'text/html'
//    })
//    //
//    // end 就是控制结束的
//   res.write('hello world');
//    res.end();
//    console.log('你好');
//})


//案例3 请求
server.on('request', (req,res) => {
    res.writeHeader(200,{
        'Content-Type':'text/html'
    })
    //
    // end 就是控制结束的
    res.write('请求方式为'+req.method);
    res.write('<br/>请求地址为'+req.url);
    res.write('<br>请求头为: ' + JSON.stringify(req.headers));
    res.end();
})