
const path = require('path');

// path.join() 它是按着一定的规则
// 生成一个路径

path.join('a', 'b', 'c'); // a\b\c

path.join('a', './b', './c'); // a\b\c

path.join('a', 'b', '../c'); // a\c

path.join('a', '../b', 'c'); // b\c

// 'name=itcast&age=11'

// {name: 'itcast', age: 11}

// JSON.parse();


// JSON 

var obj = {
	name: 'itcast'
}


// http({
// 	method: 'get',
// 	data: {}
// })

// $.ajax({
// 	url: '',
// 	data: {}
// })

// 目录与路径没有直接关系

// 河北省 保定市 曲阳县 燕赵镇 西么罗村

// 盘符 文件夹 文件夹 ... 文件

E:\www\nodejs\01day\nodedemo.html

E:\www\nodejs\01day\css\main.css

nodedemo.html 
<link src="./css/main.css">

// 网络中

http://localhost/01day/4-code/abd/adsf/cdf/abc.html

css
css/main.css

abc.html 
<link src="/css/main.css">
