<?php
     /*访问这个php   www.xxf.com/xxf.php */
     header("Content-Type:text/html;charset=utf-8");
     //这个属性解决问题
     header("Access-Control-Allow-Origin:*");

     echo $_POST["username"];


?>