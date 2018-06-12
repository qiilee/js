<?php

        /*读取文件，读取出来的一定是一个字符串
        把字符串输出到客户端
        */

        /*
            php 给我们提供的一个方法，这个方法有什么作用
         它的作用：
                向客户端输出一个响应头.
                Content-Type:text/xml,charset=utf-8

        */
        //header("Content-Type:text/html;charset=utf-8");

        header("Content-Type:text/xml;charset=utf-8");

        $data=file_get_contents("02books.xml");
        echo $data;

?>