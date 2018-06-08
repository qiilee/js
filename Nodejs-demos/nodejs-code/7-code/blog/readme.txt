1、开始的时候就只有admin和home两个文件夹，自己新建server.js并且使用npm init 生成package.json(相当于一个说明文件)

2、可以使用npm install express xtpl xtemplate cookie-parser express-session --save 下载安装并引入

3、新建views，在views里面再新建admin和home，然后把admin和home中的html文件放到views中的对应文件中

4、新建public，在public里面再新建admin和home，然后把admin和home中静态资源放到public中的对应文件中

5、删除原始的admin和home

6、引入express框架，cookie-parser和express-session两个中间件，设置静态资源，模板目录以及模板引擎，路由
   
7、新建routes文件夹，在里面新建admin.js和home.js，专门的来定义路由

8、app.get('/admin',(req,res)=>{
       res.render('admin/index',{});
   })
   这是views下的admin下的index

9、在routes下的admin.js使用 “路由中间件” 专门的管理 各种路由   路由中间件是由 Express 提供

10、在server.js引入路由中间件
    // 路由中间件
    const admin = require('./routes/admin');
     const home = require('./routes/home');

11、




   看到了03 30分钟处