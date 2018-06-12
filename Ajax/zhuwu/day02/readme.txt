01php  html与php结合 （难点）

02XMLHttpRequest
  01GET:::::::::::
  创建XMLHttpRequest对象
  xhr.open(get，目标文件及传递的数据)
  xhr.send(null);
  xhr.onreadystatechange = function(){}
  xhr.readyState==4 && xhr.status==200
  xhr.responseText获得返回的数据

  02POST::::::::::::
  创建XMLHttpRequest对象
  xhr.open(POST，目标文件)
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");          注意点！！
  xhr.send(传递的数据);
  xhr.onreadystatechange = function(){}
  xhr.readyState==4 && xhr.status==200
  xhr.responseText获得返回的数

  03/04 两种方法用post方式检测用户名是否存在

  05 自己在my2中写了一遍，注意php文件转成utf-8格式


03XML
   获取数据使用的是xhr.responseXML


