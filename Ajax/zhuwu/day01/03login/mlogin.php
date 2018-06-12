<?php

         header("Content-Type:text/html;charset=utf-8");

         $username = $_POST["username"];
         $password = $_POST["password"];

         if( $username=="ql"&& $password=="123"){

            echo "成功！";
         }else {
            echo "失败！";
         }



?>