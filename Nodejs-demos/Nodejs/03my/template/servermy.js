const http = require('http');
const url = require('url');
const path = require('path');
const template = require('art-template');
const users = require('./database/users');
const data = require('./database/data');
console.log(users);

const server = http.createServer();

server.listen(3000);

template.config('base',path.join(__dirname,'views'));

server.on('request',(req,res) => {
   let pathname = url.parse(req.url).pathname;
   //·â×°äÖÈ¾·½·¨
   res.render = function(tpl,data){
      let html =  template(tpl,data);
       res.writeHead(200,{'Content-Type':'text/html'})
       res.end(html);
   }
   switch (pathname){
       case '/':
           res.render('index',{data:data});
           break;
       case '/list':
           res.render('list',{lists:users});
           break;
   }
});
