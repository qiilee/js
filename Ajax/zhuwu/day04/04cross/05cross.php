<?php

        //获取到的这个叫做getInfo
        $_call=$_GET["callback"];

        $data='{"username":"zhangsan"}';

        echo $_call."(".$data.")";
        //返回到客户端就是getInfo();

        //echo $data;


?>