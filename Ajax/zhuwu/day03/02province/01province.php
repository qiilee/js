<?php


         header("Content-Type:text/json;charset=utf-8");

         $data=file_get_contents("01province.txt");

         echo $data;


?>