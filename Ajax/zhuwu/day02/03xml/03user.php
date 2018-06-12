<?php

         header("Content-Type:text/xml;charset=utf-8");

         $data=file_get_contents("03user.xml");


         echo $data;
?>