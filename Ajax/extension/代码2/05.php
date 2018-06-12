<?php

//echo "post:";
//print_r($_POST);

//echo "file:";
//print_r($_FILES);

//$_FILES['user_pic']['error']
//0->ok    1->大小超过php.ini限制    2->大小超过MAX_FILE_SIZE限制    
//3->附件只上传了一部分(不完整)    4->没有上传附件
if($_FILES['user_pic']['error']>0){
    exit('上传附件有问题，有可能没有附件');
}

//服务器保存附件名字为本身名字
//本地文件------>上传(php程序处理)------>服务器
//本地文件名字的 字符集 gb2312
//php程序的 字符集 utf-8--->gb2312
//  (在程序里边把utf-8编码的附件名字 转码为 gb2312)
//服务器的 字符集 gb2312
$name = $_FILES['user_pic']['name'];
$name = iconv('UTF-8','GB2312',$name);  //$name的编码由utf-8---变为--->gb2312

$path = "./upload/";

//附件上传逻辑
//move_uploaded_file(临时路径名，真实路径名);
if(move_uploaded_file($_FILES['user_pic']['tmp_name'],$path.$name))
    echo "success";
else
    echo "fail";
