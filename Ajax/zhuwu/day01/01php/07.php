<?php
        header("Content-Type:text/html;charset=utf-8");
        /*
        内容输出：访问php，访问的是一个资源，服务端向客户端你输出内容.

        一般情况我们是输出字符串
        */

        /*echo 输出字符串.*/
        /*var_dump 这个是向客户端输出一个数组，输出数组里面的详细信息*/

        $array=array("username"=>"菜10","age"=>10);

        //echo "";
        //向客户端输出数组里面的一些详细信息.
        var_dump($array);

        //向客户端输出数组里面的一些详细信息.
//        print_r($array);



?>