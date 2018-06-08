<?php


	// session 是存在服务器的一个数据

	// 不同服务端语言处理session的方式不同
	// 以PHP 为例

	// 开启 session
	session_start();

	// 使用一个全局数组 $_SESSION 进行操作

	// 以前所学的 $_GET、$_POST

	// 设置
	$_SESSION['name'] = 'itcast';

	// 读取
	// echo $_SESSION['name'];


	// cookie 和 session 有何联系？

	// a) 服务器也可以设置cookie
	//    当浏览器访问服务器时，服务会响应一个结果
	//    通知浏览器要设置一个cookie

	// 以PHP为例，使用setcookie()进行设置

	setcookie('mame', 'zhangshuai');

	// b) 当服务器设置session时会默认响应浏览器一个结果
	//    通知浏览器要设置一cookie，并且PHP默认cookie名称叫
	//    PHPSESSID



?>