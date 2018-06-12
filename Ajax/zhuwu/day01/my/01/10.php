<?php
 //关联数组
  $arr = array("username"=>"qilei","age"=>22);
//判断数组中是否存在，存在1，不存在
  $flag =array_key_exists("username1",$arr);

  echo $flag;

?>