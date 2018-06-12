<?php

$fp = fopen('./02.txt','a'); //打开文件
fwrite($fp,'lenovo');  //给文件写内容
fclose($fp);//关闭文件