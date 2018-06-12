<?php
 header("Content-Type:text/html;charset=utf-8");
        /*php 里面的函数
        定义函数，调用函数
        参数加了等号，这个参数就是一个默认值.
        */

        function doubleKill($username="王珊珊"){
               //echo "双杀";
               echo $username;
        }
//        doubleKill("你的益达");
          doubleKill();
?>