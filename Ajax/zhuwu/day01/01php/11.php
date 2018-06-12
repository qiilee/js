<?php

//        header("Content-Type:text/html;charset=utf-8");


            /*php 给我们提供一个新的函数
            file_get_contents 获取文件里面的内容.
         获取到的内容一定是字符串 .

            */


            $data=file_get_contents("file.txt");

            echo $data;





?>