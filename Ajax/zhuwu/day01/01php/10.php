<?php

        //array_key_exists ()检测数组中是否存在key
        //用在关联数组当中
        $array=array("username"=>"shanshanlaichi","age"=>11);

        $flag=array_key_exists("username",$array);

        echo $flag;

?>