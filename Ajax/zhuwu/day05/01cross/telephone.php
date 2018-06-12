<?php

            /*在这里使用php 的代码去访问聚合的接口，接收数据
            然后再这里吧接收到的数据想客户端输出.
            */
        header('Content-type:text/html;charset=utf-8');

        $tel=$_GET["telephone"];

        $apiurl = 'http://apis.juhe.cn/mobile/get';
        $params = array(
          'key' => 'd3fa372c20bc853e882a58e8c75ef3be', //您申请的手机号码归属地查询接口的appkey
          'phone' => $tel //要查询的手机号码
        );
        $paramsString = http_build_query($params);
        $content = @file_get_contents($apiurl.'?'.$paramsString);
        $result = json_decode($content,true);
        if($result['error_code'] == '0'){
            echo "省份：".$result['result']['province']."\r\n";
            echo "城市：".$result['result']['city']."\r\n";
            echo "区号：".$result['result']['areacode']."\r\n";
            echo "邮编：".$result['result']['zip']."\r\n";
            echo "运营商：".$result['result']['company']."\r\n";
            echo "类型：".$result['result']['card']."\r\n";
        }else{
            echo $result['reason']."(".$result['error_code'].")";
        }


?>