<?php

	header('Content-Type:text/html; charset=utf-8');
	/*
		1.请求方式  get
		2.请求url  data.php
		3.请求传递的参数   page  当前页数  pageSize  每一页多少条数据
		4.是后台在处理
		5.返回数据 {page:'下一页的页码',items:[{path:'图片路径',text:'文字'},{},{}...]}
	*/

	/*获取数据  字符串*/
	$data = file_get_contents('data.json');
	/*转化php对象？ 需要对其操作*/
	$data = json_decode($data);
	/*页码*/
	$page = $_GET['page'];
	/*条数*/
	$pageSize = $_GET['pageSize'];
	/*获取数据的起始索引*/
	$offset = ($page - 1) * $pageSize;
	/*slice 从什么位子开始切割 切割多少条*/
	$result = array_slice($data, $offset, $pageSize);
	/*下一也的页码*/
	$page++;
	echo json_encode(array('page'=>$page, 'items'=>$result));/*｛items:[]｝*/
	sleep(1);
?>