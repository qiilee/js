01  伪数组的满足条件---》为元素添加边框样式---》引出将for循环封装为each或map方法

02  将querySelectorAll() 封装成函数，并放入命名空间

03.1  function each(arr,statement){
        for(var i = 0;i<arr.length;i++){
           【new Function 与 eval的使用】
        }
    }


03.2  function each(arr,callback){
        for(var i = 0;i<arr.length;i++){
            【callback(arr[i],i);】
        }
    }

05 对以上封装的函数的应用

06  引入链式编程
    function select(selector){
         var obj = document.querySelectorAll(selector);
         obj.each = function(callback){
           each(this,callback)
         };
         return obj;
     }


