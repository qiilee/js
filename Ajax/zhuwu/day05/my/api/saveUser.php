<?php 
    header('Content-Type:text/html;charset=utf-8');

    $con = mysql_connect("127.0.0.1","root","");

    if (!$con){
        die('Could not connect: ' . mysql_error());
    }
    mysql_select_db("study", $con);

    $sql="INSERT INTO teacher (username, password, name,school,age)
    VALUES
    ('$_POST[username]','$_POST[password]','$_POST[name]','$_POST[school]','$_POST[age]')";

    if (!mysql_query($sql,$con)){
      die('Error: ' . mysql_error());
    }

    echo '{"status":"ok"}';

    mysql_close($con)

?>