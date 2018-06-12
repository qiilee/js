在什么情况下一个数据是null？
可以把null理解成一个空值
一般只有两种情况 ：
1. 获取一个不存在的DOM节点
var fanyifan = document.getElementById('fanyifan');
console.log(fanyifan)//null
2 Object.prototype.__proto__//null

在什么情况下一个数据是undefined？
如果一个变量声明了但是没赋值，这个变量就是undefined// 未定义

类数组的概念，常见的类数组：
1.函数内部的arguments属性，
2.获取到的DOM集合
3、手动创建的类数组  手动添加length属性。


构造函数与实例的概念

构造函数创建了实例，构造函数可以通过prototype属性找到,实例可以通过__proto__找到该实例的原型对象
原型属性。

原型属性：从构造函数出发，通过prototype属性去找原型，我们就把原型叫做原型属性。
原型对象：从实例出发，通过__proto__去找原型，我们就把原型叫做原型对象。



```





## 1. 面向对象的三大特性之继承
### 1.0 面向对象的三大特性
```
封装、继承、多态
```

### 1.1 继承的概念
```
继承：自己本身没有一个东西，从别人身上借用过来自己使用，这种拿来主义就是一种继承。
```
### 1.2 js中的几种继承方式
```
原型继承、混入式继承、经典继承
```

#### 1.2.1 混入式继承
```
//让一个对象拥有其他对象的属性或方法，那这就叫做混入式继承。
var obj1 = {}
var obj2 = {
    name:'jack',
    age:18
    }
//想要让obj1身上拥有obj2的属性，可以通过遍历的方式，把obj2的属性和属性值添加到obj1上

for(var key in obj2){
    obj1[key]=obj2[key];
}

// 也可以封装为一个方法,让ele1拥有ele2的方法和属性。
function extend(ele1,ele2){
    for(var key in ele2){
        ele1[key]=ele2[key];
    }
}
```
#### 1.2.2 原型继承
```
如果想让一个对象具有某些属性或方法, 只需要给对象的原型对象来
添加相关的属性和方法,这样,对象就能够访问到给原型添加的属性或者是方法,
这样就实现了 原型式继承
```

#### 1.2.2.1 利用对象的动态特性
```
//对象创建好之后，可以动态地给对象添加一些属性和方法
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.sayHello=function(){
    console.log('我是'+this.name)
}
Person.prototype.eating=function(){
    console.log('我要吃饭了')
}
var person1 = new Person();
person1.sayHello();

```

#### 1.2.2.2 覆盖原型对象
```
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype={
    constructor:Person,
    sayHello:function(){
        console.log（'我是覆盖原型对象之后的sayHello方法')
    }，
    eating:function(){
        console.log('我是覆盖原型对象上的eating方法')
    }
}
var person1 = new Person();
person1.sayHello();
```

#### 1.2.2.3 利用混入式继承

#### 1.2.3 经典继承 js原生提供的一种继承方式，存在着兼容性地问题
Object.create()会返回一个新的对象，这个对象的原型被设置为传入的那个对象。
```
var obj2= {
    name:'jack',
    age:18
}
var obj1 =Object.create(obj2)
```



### 1.3 原型链的介绍以及原型继承的说明



