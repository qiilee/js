function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var it = foo(5);

// 第一点：foo需要是*型的，新增的*带来的是这个函数指针，这个函数必须是*型的，否则的话var it=foo(5)，就表示得到函数执行的结果，而指针型的，表示it取得该函数。

// 第二点：第一个it.next()表示开始执行函数，直到第一个yield停止。返回值是yield(表达式的值)，这个时候的返回时是x+1,x是5，结果就是6. 这里的it.next如果带参数，则参数会被忽略，因为首次执行没有参数可再传递.

console.log(it.next()); // {value: 6, done: false}

// 第三点：第二个it.next(12)表示上一个yield的返回结果是12,带进去也就是var y=2*12; 这个地方必须带值，因为yield内是表达式(x+1)，不是常量，无法自己计算，这里为什么不把之前的x缺省带进去计算，只能说目前的机制不是这样，

// 应该是考虑到实现的复杂程序，因为这里的x是一个变量，实际运行中，这个还可能是表达式，甚至还有作用域的问题考虑，这里计算出的y=2*12=24,一直计算到下一个yield(24/3)，结果是8。

console.log(it.next(12)); // {value: 8, done: false}

// 第四点：第三个it.next(13)同样表示上一个yield的返回结果是13,带进去也就是var z=13;后面已经没有yield了，就去函数的返回值return 5+24+13，结果等于42，这个时候done的值是true，表示函数结束。

// 重要的总结下：function需要是指针，记住yield（表达式）执行的结果是上一个执行的值。

console.log(it.next(13)); // {value: 42, done: true}


// 参考自链接 http://www.fly63.com/article/detial/1782