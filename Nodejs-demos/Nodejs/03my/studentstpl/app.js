
const http = require('http');

const url = require('url');

const path = require('path');

const fs = require('fs');

const students = require('./database/students');

const querystring = require('querystring');

const mime = require('mime');

const template = require('art-template');

template.config('base', path.join(__dirname, 'views'));

const server = http.createServer();

server.listen(3000);

server.on('request', (req, res)=> {//4
    //封装的渲染方法
    res.render = function(tpl,data){
       let html = template(tpl,data);
       res.writeHeader(200,{'Content-Type':'text/html'})
       res.end(html);
    }

    let {pathname,query} = url.parse(req.url,true);//6
    //console.log(pathname);
    switch(pathname){
        case '/':
        case 'add':
            res.render('add',{action:'/save'});
            break;
        case '/list':
            res.render('list',{lists:students});
            break;
        case '/save':
            req.body='';
            /*
              这好像是一个监听事件，监听到名为data的事件，触发后面的函数。
              意思应该就是，当接收到数据时，将该数据块加入post。
              chunk这里就是个形参，你换成其他也ok，另外数据在传输过程中，
              是按块传输的，chunk就是块的意思*/
            req.on('data',(chunk)=>{
                req.body += chunk;
            }) 
            req.on('end',()=>{
                let formData = querystring.parse(req.body);
                students.push(formData);
            })
            fs.open('./database/students.json')   
        default :
    }
});