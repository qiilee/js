
// 字母、数字、下划线可以定义为变量名
// 不能以数字开头

var str = '我是一个字符串类型的变量';

var _str = '以下划线开头';

console.log(str);
console.log(_str);

// 数据类型
console.log(typeof str);

var obj = {name: 'itcast', age: 11};

console.log(typeof obj);

var num = 12.345;

console.log(typeof num);

var un;

console.log(typeof un);

// 定义函数
function fn() {
	console.log('使用关键字function 定义函数');
}

fn();

var bar = function () {
	console.log(arguments);
	console.log('以表达式的形式定义函数');
}

bar('a', 'b');

// 流程控制
if(true) {
	console.log('判断语句')
}

for(var i=0; i<100; i++) {
	if(i == 10) {
		// break;
		continue;
	}
	console.log(i);
}

// 内置对象
var now = new Date();

console.log(now)

// location对象是浏览器提供的
// 不是ECMAScript规范
// 只在浏览器中生效，类似的还有 window document navigator ...
console.log(location);



/*  以下是运行的结果
我是一个字符串类型的变量
以下划线开头
string
object
number
undefined
使用关键字function 定义函数
{ '0': 'a', '1': 'b' }
以表达式的形式定义函数
判断语句
0
1
2
3
4
5
6
7
8
9
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
2017-03-05T13:50:32.877Z
D:\19-Web\A Code\Nodejs\01\02 syntax.js:62*/