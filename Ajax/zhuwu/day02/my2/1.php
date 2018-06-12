<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
      div{
      	width: 200px;
      	height: 200px;
      	background-color: red;
      	color:white;
      }
    </style>
</head>
<body>
 <div>
 	<?php for($i=0;$i<100;$i++){?>
           <div>
           	  我用双手。。。。
           	<?php echo $i;?>
               
           </div>	
    <?php }?>

 </div>
</body>
</html>