<?php
//传统分页效果实现
//连接数据库，获得数据，做分页显示

header("content-type:text/html;charset=utf-8");
$link = mysql_connect('localhost','root','123456');
mysql_select_db('shop', $link);
mysql_query('set names utf8');

echo <<<eof
    <style type="text/css">
        table {width:700px; border:1px solid black; margin:auto; border-collapse:collapse;}
        td {border:1px solid black; }
    </style>
    <table>
        <tr style='font-weight:bold'><td>序号</td><td>名称</td><td>价格</td><td>数量</td><td>重量</td></tr>
eof;

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
$sql3 = "select * from sw_goods order by goods_id ".$page->limit;
$qry3 = mysql_query($sql3);

//⑤ 获得页码列表信息
$page_list = $page -> fpage(array(3,4,5,6,7,8));

$page_num = isset($_GET['page'])?$_GET['page']:1;
$num = ($page_num-1)*$per+1;

while($rst3 = mysql_fetch_assoc($qry3)){
    printf("<tr>");
    printf("<td>%d</td>",$num);
    printf("<td>%s</td>",$rst3['goods_name']);
    printf("<td>%s</td>",$rst3['goods_price']);
    printf("<td>%d</td>",$rst3['goods_number']);
    printf("<td>%d</td>",$rst3['goods_weight']);
    printf("</tr>");
    $num++;
}
printf("<tr><td colspan='5'>%s</td></tr>",$page_list);
echo "</table>";

