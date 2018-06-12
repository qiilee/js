var $={
     ajax:function(obj){
         var xhr=new XMLHttpRequest();
         //get 方式提交.
         //1：请求的参数在地址后面
         //2: 发送的数据是null
         if(obj.type.toLocaleLowerCase()=="get"){
             //1：请求的参数在地址后面
             //2: 发送的数据是null
             obj.url=obj.url+"?"+obj.data;
             obj.data=null;
         }
         xhr.open(obj.type,obj.url);
         //如果是post 方式提交.
         if(obj.type.toLocaleLowerCase()=="post"){
             //请求的参数不在地址后面
             // 一个特殊的请求头 Content-Type:"xxx"
             xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
         }
         xhr.send(obj.data);
         xhr.onreadystatechange=function(){
             if(xhr.readyState==4 && xhr.status==200){
                 var data=xhr.responseText;
                 obj.success(data);
             }
         }
     }
}