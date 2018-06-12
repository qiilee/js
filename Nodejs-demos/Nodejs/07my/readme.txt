1 遇到错误可能就是xtpl文件中的href的路径有.造成的

2 使用Nodejs接收客户端的cookie

3 home一般指前台界面  admin 后台

4 let pathname = url.parse(req.url).pathname;
node.js中的url.parse方法使用说明

一个URL字符串转换成对象并返回。

语法：

复制代码 代码如下:
url.parse(urlStr, [parseQueryString], [slashesDenoteHost])

接收参数：

urlStr url字符串

parseQueryString 为true时将使用查询模块分析查询字符串，默认为false

slashesDenoteHost

默认为false，//foo/bar 形式的字符串将被解释成 { pathname: ‘//foo/bar' }

如果设置成true，//foo/bar 形式的字符串将被解释成 { host: ‘foo', pathname: ‘/bar' }

