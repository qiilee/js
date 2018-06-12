<?php 
    header('Content-Type:application/json;charset=utf-8');
    /*
     create table teacher(id int auto_increment primary  key,username varchar(500),password varchar(500),name varchar(500),school varchar(50),age int);
    */

   $con = mysql_connect("127.0.0.1","root","");

    //$con = mysql_connect("localhost","root","");

    if (!$con){
        die('Could not connect: ' . mysql_error());
    }


    mysql_select_db("study", $con);

    $pageNum = $_GET['pageNum'];
    $pageSize = $_GET['pageSize'];

    $start=($pageNum-1)*$pageSize;

    $sql="select *,(select count(*) from teacher) as total from teacher order by id desc limit $start , $pageSize ";

    $result = mysql_query($sql);

    $list = array();
    $total = 0;

    while($row = mysql_fetch_array($result)){
        $item = array(
            'id' => $row['id'],
            'username' => $row['username'],
            'password' => $row['password'],
            'name' => $row['name'],
            'school' => $row['school'],
            'age' => intval($row['age']),
        );
        array_push($list,$item);
        $total = $row['total'];
    }

    echo json_encode(
        array(
            'rows'=>$list,
            'pageSize'=>intval($pageSize),
            'pageNum'=>intval($pageNum),
            'total'=> intval($total)
        )
    );
    mysql_close($con);
    usleep(300000);
?>