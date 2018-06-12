<?php
        /*在php 里面怎么去接收文件上传的数据.*/

        /*如果客户端是get 方式提交的数据，我就$_GET 接收*/
         /*如果客户端是post 方式提交的数据，我就$_POST 接收*/
        /* 假设要接收文件上传的收据  $_FILES

        $_FILES 得到的也是一个数组，我就看里面的详细信息

        接收到客户端的数据是一个数组

        array
          'lifephoto' =>
            array
              'name' => string '1.jpg' (length=5)
              'type' => string 'image/jpeg' (length=10)
                  客户端往服务器传递文件的临时的存储位置.
              'tmp_name' => string 'C:\wamp\tmp\php16D3.tmp' (length=23)
              'error' => int 0
              文件大小
              'size' => int 13467
        */

        /*
        php 给我提供的方法.
        移动上传的文件.
        */
        $data=$_FILES["lifephoto"];
       // var_dump($data);
       //获取到apache 临时存储的文件.
       $file=$data["tmp_name"];
       //获取到文件名
       $fileName=$data["name"];

       move_uploaded_file($file,"images/".$fileName);

?>