nodejs如何操作cookie和session，就是两个中间件


1、npm install express xtpl xtemplate 并不是必须每次都写,可以使用如下
   
   npm init ->  npm install express --save ->npm install xtpl --save 这时在package.json中dependencies会有依赖项
  
   当没有node_mondules时，使用npm install就可以来到当前文件找package.json中的dependencies中的依赖项，安装node_mondules

   上线项目的时候，不要node_mondules，只要package.json就行

   
2、先写的server.js中的内容，引入模板后，将html文件改为xtpl文件，并且执行nodemon server.js启动

3、输入localhost:3000访问nodejs服务器，补全路由，若出现问题，修改xtpl文件中的路径！！

4、这时基本的运行已经没问题，然后在index.xtpl中添加cookie，然后刷新页面，在network中随便的一条请求的headers中可以找到cookie

   注意问题，这时不仅仅是index页面中有cookie，其他页面也有，因为是在同一个域中，cookie传递给服务器端，即server.js

5、在server.js写一个中间件，用来接收客户端的cookie

   中间件就是用来拦截请求和响应，并能做一些处理

   req.headers是请求头

6、中间件已经有上万个了，在www.npmjs.com中搜索cookie-parser,有使用介绍

    使用npm install cookie-parser --save安装上，再进行引入，再调用（use）

7、这是的原本的name=itcast字符串被如上的中间件转为{name:'itcast'}对象

8、服务器也可以设置cookie，res.cookie('age', 18);在network中的response中查看cookie
   已经设置好的cookie是浏览器请求过来的，所以使用req.cookies接收              


9、接下来就是解析处理session，express-session
   安装 npm install express-session --save,通过查看文档使用
     
10、app.use(session({
    secret: 'itcast'
}));
    这是新增的中间件，删除后  console.log(req.session);为undefined

11、NodeJS的session是存在内存里的，所以一旦服务器重启 session 就会丢失了
    
    在/blog路由中设置session，在/首页获取session，重启服务器后，点击首页按钮
    不会有sex = '男'，但是点击blog后，就都有了

12、路由中 res.render('index', {name: 'it'});设置的值，在对应的xtpl文件中
   使用{{}}可以接收

13、// 可以设置全局的数据
// 在模板引擎中可以被全局使用
app.locals = {age: 12};
在xtpl文件中{{age}}即可

locals是express框架提供好的，直接使用即可
 