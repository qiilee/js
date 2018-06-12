<?php

//跨域请求天气信息

$url = "http://www.weather.com.cn/adat/sk/101010100.html";
//file_get_contents(file/url地址);
//url地址：请求该地址，并返回信息

$cont = file_get_contents($url);
echo $cont;
