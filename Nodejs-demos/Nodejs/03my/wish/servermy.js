const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer();

server.listen(8080);

server.on('request',(req,res)=>{
   console.log(req.url);
})