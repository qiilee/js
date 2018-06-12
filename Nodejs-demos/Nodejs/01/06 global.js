
// global

console.log(global);  //会出现很多函数等。。

var timer;

setTimeout(function () {
	// console.log('等一会执行 setTimeout');
	clearInterval(timer);
	console.log('清除了定时器');
}, 3000);

var i = 0;
timer = setInterval(function () {
	// i++;
	console.log(i++);
}, 600);


/*
 0
 1
 2
 3
 清除了定时器*/