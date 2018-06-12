## 1. javascript基础复习
- 基本要求

### 1.1  js语法部分(var、function声明变量/条件分支/循环/break/continue /return..delete  )


### 1.2 基本数据类型与复杂数据类型
```
基本数据类型的的变量存储的是基本数据类型的实际值；
复杂数据类型的变量存储的是对实际值的引用，实际值存储在一块内存空间当中。
```
### 1.3 数据类型转换

#### 1.3.1 显式类型转换

#### 1.3.2 隐式类型转换

### 1.4 字符串常用操作
```javascript
indexOf/lastIndexOf/split/charAt/concat/replace/slice/substring/substr
```

### 1.5 数组常用操作

```javascript
pop/push/shift/unshift/splice/slice/reverse/sort/toString/forEach/map/filter/every/some/reduce/reduceRight
```

```
https://www.baidu.com/s?wd=%E5%A4%9A%E5%B2%81%E7%9A%84&rsv_spt=1&rsv_iqid=0xf4f0b63300004f62&issp=1&f=3&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=0&rsv_sug3=3&rsv_sug1=2&rsv_sug7=101&prefixsug=%E5%A4%9A%E5%B2%81%E7%9A%84&rsp=0&inputT=2354&rsv_sug4=2594
```
```
{
    wd:%E5%A4%9A%E5%B2%81%E7%9A%84,
    rsv_spt:1,
    ....
}
```

#### 数组塌陷问题
```
var arr = [1,2,3,4,4,4,4,4,5,6,7,8,9]
```
### 1.6 DOM和BOM的常用操作(增删改查)

## 常见的DOM操作
### 3.1 四字总结 增删改查

#### 3.1.1 获取元素操作

```
getElementById、getElementsByClassName、getElementsByTagName
querySelector、querySelectorAll
```

#### 3.1.2 元素节点操作

```
appendChild  insertBefore removeChild replaceChild cloneNode
createElement createTextNode
```

####3.1.3属性节点操作

```
getAttribute setAttribute removeAttribute
```
#### 3.1.4 常用的DOM属性

```
className innerHTML innerText value children
```


### 1.7 调试工具的使用


## 从今天起要养成的习惯
```
各个阶段的一个知识总结
积累一些英文单词，包括一些常用的术语，还有常见的报错信息。
```



## 2. 面向对象入门

### 2.1什么是面向过程

```
面向过程就是把自身放在一个执行者的角度去解决问题，在解决问题的过程中，所有的事情都需要我们去亲力亲为，并且
事情的执行顺序一般情况下不允许发生改变，
```

### 2.2什么是面向对象

```
面向对象就是把自身放在一个调度者的角度去解决问题，把相应的任务交给相应的人去处理，我们不需要去知道执行者具体帮我们怎么完成一件任务的
我们只需要找到相应的人就可以了。
```

#### 2.2.1 案例1：动态地创建一个div，长宽都为100，背景颜色为red，然后添加到页面当中，分别用面向过程和面向对象的方式实现。


####2.2.2 案例:2：实现面向对象编程案例中的js特效，分别用面向对象编程和面向过程编程来实现，分析面向过程编程的一些缺点


### 2.3 创建对象

#### 2.3.1 使用对象字面量来创建对象

```javascript
var person = {
    name:'jack',
    age:'rose'，
    sayHello:function(){
        console.log('我叫jack')
    }
}
//这种方式存在的缺点：每次创建都要进行复制粘贴。
```

#### 案例3 创建一个Student构造函数，Student创建出来的对象有name，age属性以及sayHello方法。
#### 2.3.2 使用构造函数创建对象

```javascript
function Person(name,age){
    this.name=name;
    this.age=age;
    this.sayHello=function(){
        console.log('我叫'+this.name)
    }
}
var person1 = new Person('jack',17);
person1.sayHello();
//存在的缺点：每次创建一个新的实例，都会创建一个新的函数，而每个函数都是需要占用内存的，所以，就需要把公有的一类方法放在一个都能
//获取到的地方
```

#### 2.3.4 把公有方法放在原型上

```javascript
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.sayHello=function(){
    console.log('我叫'+this.name)
}
var person1 = new Person('jack',17);
person1.sayHello();
//利用原型来解决数据共享的问题
```




