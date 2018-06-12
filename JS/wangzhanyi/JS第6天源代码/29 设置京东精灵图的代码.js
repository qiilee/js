/**
 * Created by Administrator on 2016/11/21.
 */
var live = document.getElementById("mrt-live");
var  $is = live.getElementsByTagName("i");
// 循环遍历每一个i标签 ，设置对应的背景图片的位置
var num = 0;
for(var i=0;i<$is.length;i++){
    $is[i].style.backgroundPositionX = 0;
    $is[i].style.backgroundPositionY = num+"px";
    num-=25;
}