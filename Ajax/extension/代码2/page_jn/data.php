<?php
//传统分页效果实现
//连接数据库，获得数据，做分页显示

header("content-type:text/html;charset=utf-8");
$link = mysql_connect('localhost','root','123456');
mysql_select_db('shop', $link);
mysql_query('set names utf8');

//① 引入分页类
include "./page.class.php";

//② 获得总条数、每页显示条数
$sql = "select * from sw_goods";
$qry = mysql_query($sql);
$total = mysql_num_rows($qry); //总条数
$per = 7;//每页条数

//③ 实例化分页类对象
$page = new Page($total, $per);

//④ 设置sql语句获得每页信息
//$page->limit:分页类会根据当前页码参数自动把 "limit 偏移量,长度" 信息给拼装好
$sql3 = "select goods_number,goods_name,goods_price,goods_weight from sw_goods order by goods_id ".$page->limit;
$qry3 = mysql_query($sql3);

//⑤ 获得页码列表信息
$page_list = $page -> fpage(array(3,4,5,6,7,8));

$page_num = isset($_GET['page'])?$_GET['page']:1;
$num = ($page_num-1)*$per+1;

$info = array(); //声明一个数组
while($rst3 = mysql_fetch_assoc($qry3)){
    $rst3['number'] = $num++;
    $info[] = $rst3;
}

$info[] = $page_list;
//$info此时是二维数组(一维索引、二维关联)
//把数据信息组织为json格式
echo json_encode($info);
