<?php
        /*接收客户端是数据.*/
        /*这个变量是php 给我们提供的
        我们通过这个变量可以获取到客户端以get 方式提交的数据。
        这个变量对应的值是一个数组，是一个关联数组
        //username=zhangsan&age=11
        $_GET=array(
               "username"=>"zhangsan",
                "age"=>11
        )
        */
        $username=$_GET['username'];
        $age=$_GET['age'];
        echo $username;
        echo $age;

?>