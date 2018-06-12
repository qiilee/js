<?php

//php中生成json信息
//json_encode(数组/对象)

$color = array('red','blue','green'); //【索引数组】
echo json_encode($color),"<br />"; //["red","blue","green"]

$animal = array('east'=>'tiger','north'=>'wolf','south'=>'monkey'); //【关联数组】
echo json_encode($animal),"<br />";//{"east":"tiger","north":"wolf","south":"monkey"}

//【索引关联数组】
$animal2 = array('east'=>'tiger','north'=>'wolf','duck','south'=>'monkey');
echo json_encode($animal2),"<br />";//{"east":"tiger","north":"wolf","0":"duck","south":"monkey"}

//[{},{},{}]
//{"weatherinfo":{"city":"北京","cityid":"101010100","temp":"9","WD":"南风","WS":"2级","SD":"26%","WSE":"2","time":"10:20","isRadar":"1","Radar":"JC_RADAR_AZ9010_JB","njd":"暂无实况","qy":"1014"}}
//{名称:[],名称:[],名称:[]}


//【对象生成json信息】
class Person{
    public $addr = "beijing";
    public $height = 170;
    public function study(){
        echo "study php";
    }
}
$tom = new Person();
//只是对象的属性给生成json信息
echo json_encode($tom);//{"addr":"beijing","height":170}