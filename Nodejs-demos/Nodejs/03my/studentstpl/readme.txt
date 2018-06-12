render add list并不是固定好的，由自己定
数组或对象转成字符串  JSON.stringify([].push(formData))

步骤 
1 先是在app.js 实现1-6步
2 再是安装并引入art-template（npm install art-template + const template = require（‘art-template’） ）
3 封装渲染方法 （在server.on中res.render=function(){}）
4 添加views与public文件夹  将路径放到switch中
5 template.config('base',path.join(__dirname,'views'));//这样是为了不用在switch中重复的写views
6 引入path fs  安装并引入mime
7 实现default  添加了case  '/save' 接收表单提交的数据
8 引入querystring ，再database创建了students用来存放数据    