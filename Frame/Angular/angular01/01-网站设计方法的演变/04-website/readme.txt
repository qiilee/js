1.主要就是模板引擎的使用，方式十分巧妙

2.通过ajax，把datas.json，json格式的字符串改成对象

3.先要调用一次模板，之后再渲染

4.v.isShow = v.name == text;这句话十分关键，用来判断输入值是否与datas中遍历出来的值相同
相同isShow为true，模板中的if判断为假的输出，为真的跳过

5.开启服务器，打开浏览器，勾选network下的preserve log
  127.0.0.1 浏览器把这个html代码以二进制的形式，网络得到形式传过来
  这是第一次请求，

6、当执行到<script src="./template-native.js"></script>的时候，进行的是第二次请求

7、执行里面的ajax中send后，会发送第三次请求，获得datas.json

8、在输入框输入jim1不会在请求了，应为都已经请求到本地了
