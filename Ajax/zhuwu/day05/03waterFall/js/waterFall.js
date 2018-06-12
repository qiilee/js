$.fn.waterFall=function(){
   // alert("a");
   //编写逻辑，调用这个方法，完成瀑布流的布局.

   //我要做的是什么：我要计算出来每个item 的位置
   //item 的父元素是items，items 是 posisiton:relative
   //item position:absolute
   //实际上我要计算出来的是每个item 的left，以及top 值.

   //我假设我要计算间距，以及每个item宽度，我要得到
   //获取到外面的大盒子
   var $items=$(this);
   //获取到父盒子的宽度.
   var parentWidth=$items.width();
   //获取到子盒子的宽度.
   var $children=$items.children();
    //子盒子的高度
   var width=$children.width();
   //定义多少列
   var column=5;
   //计算出间距
   var space=(parentWidth-column*width)/(column-1);
   //console.log(space);
   //我现在来开始进行布局了.

   //首先我把这个布局分为第一行，然后其它的行
   //第一行，所有的top 等于 0
   //其它的行，我要计算出来top,以及left


    var colArray=[];
     //计算出这个里面的所有的盒子的top,left 值
    $children.each(function(index,dom){
            //把对象包装成jQuery 对象
            var $dom=$(dom);
            //计算第一行 每一行放几列固定的
            if(index<column){
                 //0,1,2,3,4
                 $dom.css({
                      left:index*(width+space),
                      top:0
                 });
                //每一列的高度
                colArray[index]=$dom.height();
            }else{
                    //其它的行
                    //接下来在出现一个item ，应该排列在
                    //最矮的那一列的下面.
                    //我需要找到最矮的哪一列 的高度
                    //目的:计算出来 top,left
                    //我要知道最矮的那一列的高度，以及最矮的那一列的索引值.
                   //假设最矮的这一列是索引值是0
                    var minIndex=0;
                    var minHeight=colArray[0];
                    //console.log(colArray);
                    //从数组里面找到最小的那个的元素的值.
                    //还需找到这个值对应的索引.
                    //这个基础里面.
                    for(var i=0;i<colArray.length;i++){
                            if(minHeight>colArray[i]){
                                minIndex=i;
                                minHeight=colArray[i];
                            }
                    }
                    $dom.css({
                         top:minHeight+space,
                         left:minIndex*(width+space)
                    })
                   //console.log(minIndex);
                   //console.log(minHeight);
                   //改变最矮的那一列的高度.
                  colArray[minIndex]=minHeight+space+$dom.height();
            }
    });
    //在这个位置计算出高度.
    var maxHeight=colArray[0];
    //这个基础里面. 找到高度.
    for(var j=0;j<colArray.length;j++){
        if(maxHeight<colArray[j]){
            maxHeight=colArray[j];
        }
    }
    console.log(maxHeight);
    //设置btn 按钮的高度.
    $(".btn").css("margin-Top",maxHeight+100+"px");


}