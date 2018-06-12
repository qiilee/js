<?php

header("Cache-Control:no-cache");
header("Pragma:no-cache");
header("Expires:-1");

$fp = fopen('./09.txt','a'); //打开文件
fwrite($fp,'computer\n');  //给文件写内容
fclose($fp);//关闭文件

echo "haha";
