<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
         div{
              width: 200px;
              height: 200px;
              background-color: pink;
         }
    </style>
    <?php
            /*在这里从数据库里面获取数据 ，在一个数组里面*/
            /*把这些数据获取到之后动态输出到一个table 标签里面.*/

            $array1=array(
                array("username"=>"王老师","age"=>21,"desc"=>"太漂亮，没心思上课"),
                array("username"=>"李楠","age"=>22,"desc"=>"太美丽，心情不美丽"),
                array("username"=>"段老板","age"=>22,"desc"=>"pink,ok ，这很pink"),
            );


    ?>
</head>
<body>
          <table>
                <tr>
                        <td>姓名</td>
                        <td>年龄</td>
                        <td>描述</td>
                </tr>

            <?php for($i=0;$i<count($array1);$i++){?>
                  <tr>
                        <td>
                            <?php echo $array1[$i]["username"]; ?>
                        </td>
                        <td>
                             <?php echo $array1[$i]["age"]; ?>
                        </td>
                        <td>
                             <?php echo $array1[$i]["desc"]; ?>
                        </td>
                  </tr>
            <?php } ?>
          </table>
</body>
</html>