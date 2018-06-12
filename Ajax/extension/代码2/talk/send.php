<?php

//连接数据库、获得最新的聊天内容
$link = mysql_connect('localhost','root','123456');
mysql_select_db('shop', $link);
mysql_query('set names utf8');

//发表聊天内容
$msg        = $_POST['msg'];
$color      = $_POST['color'];
$biaoqing   = $_POST['biaoqing'];
$receiver   = $_POST['receiver'];

$sql = "insert into message values (null,'$msg','admin','$receiver','$color','$biaoqing',now())";
if(mysql_query($sql)){
    echo "发表聊天成功";
}else{
    echo "发表聊天失败";
}
