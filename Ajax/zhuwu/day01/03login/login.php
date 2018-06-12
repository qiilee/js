<?php

         header("Content-Type:text/html;charset=utf-8");

        /*接收客户端数据*/
        $username=$_POST["username"];
        $password=$_POST["password"];

//        如果说是做实际开发，这里是需要去数据库里面查询的.

        if($username=="wangshanshan" && $password=="wangshanshan123"){
               echo "欢迎，欢迎，热烈欢迎，".$username;
        }else{
               echo "你有病，你有药.";
        }


?>