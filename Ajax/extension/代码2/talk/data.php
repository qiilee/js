<?php

//连接数据库、获得最新的聊天内容
$link = mysql_connect('localhost','root','123456');
mysql_select_db('shop', $link);
mysql_query('set names utf8');

$maxID = $_GET['maxID'];

$sql = "select * from message where id>'$maxID'";
$qry = mysql_query($sql);

$info = array();
while($rst = mysql_fetch_assoc($qry)){
    $info[] = $rst;
}

//聊天信息通过json格式传给ajax
echo json_encode($info);