
// global

// console.log(global);

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