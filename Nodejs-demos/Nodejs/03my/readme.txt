目录不等于路径

关于路径  跟+分隔符+层级+分隔符+。。。+某文件

分为两种场合

a 文件系统
  E:\www\nodejs\01day\index.html
  在文件系统目录都是真实存在的！！
  所以 目录结构与路径是一一对应的
  这种情况把目录与路径混在一起理解不会有任何错误
  文件夹也是一个特殊的文件

b 网络

  路径与目录不一定是一一对应的


  /表示根路径

  /css/main.css
  相当于 http://localhost:3000/css/mian.css

path.join('a','b','c');    a\b\c
path.join('a','./b','./c') a\b\c
path.join('a','b','../c')  a\c
path.join('a','../b','c')  b\c

JSON.parse