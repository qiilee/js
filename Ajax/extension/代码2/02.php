<?php

//反编码json信息
//json_decode(json字符串,true-arr/[false--obj])
$animal = array('east'=>'tiger','north'=>'wolf','south'=>'monkey'); //【关联数组】

$jn_animal =  json_encode($animal);

$aml = json_decode($jn_animal,true);
var_dump($aml);//array(3) { ["east"]=> string(5) "tiger" ["north"]=> string(4) "wolf" ["south"]=> string(6) "monkey" } 
echo "<br />";

//$jn_str = "{'first':'xiaoming','second':'wangwu','three':'linken'}";//反编码失败，双引号缘故
$jn_str = '{"first":"xiaoming","second":"wangwu","three":"linken"}';//反编码ok
var_dump(json_decode($jn_str,true));
//array(3) { ["first"]=> string(8) "xiaoming" ["second"]=> string(6) "wangwu" ["three"]=> string(6) "linken" } 


