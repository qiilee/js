<?php

         header("Content-Type:text/html;charset=utf-8");

         //数组
         /*
                1：普通数组
                2：关联数组
         怎么去定义数组，怎么去遍历数组
         */
         /*
            1:定义普通数组
         */
        // $array1=array("范冰冰","李楠","赵永吉","段老板");

         /*php 里面数组没有length 属性.
         它提供了一个方法，来统计数组的长度.
         */
         //echo count($array1);

         /*变量数组  for*/
        /* for($i=0;$i<count($array1);$i++){
               echo $array1[$i];
         }*/

         /*怎么去定义关联数组，为什么需要关联数组
         关联数组里面的数组是有关联关系的
         key:value
         */

        /* $array2=array(
                "username"=>"wangshanshan",
                "age"=>18
         );*/

         //echo $array2["username"];

         /*二维数组里面，是数组里面套着一个数组*/
         $array3=array(
                array("username"=>"wangshanshan","age"=>"19"),
                array("username"=>"李楠","age"=>"17"),
                array("username"=>"小旋风","age"=>21)
         );

         //二维数组的遍历
         for($i=0;$i<count($array3);$i++){
               echo $array3[$i]["username"];
               echo "<br/>";
         }



?>