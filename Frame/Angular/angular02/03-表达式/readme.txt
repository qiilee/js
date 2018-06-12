6. 表达式( expression )
    javascript 表达式
        在 js 中 所谓的表达式就是 由有运算符连接数据而得到的有值的字符序列.
            常量表达式: 123, {}, function () {}, ...
                    字面量( 直接量, literal )
            算术表达式: 123+456, 123/456, ...
            字符连接表达式: '123'+456
            函数调用表达式: func()
            ... ...

    angularjs 表达式
        在 值绑定中 或 指令中用于计算和替换的 类似与 js 的代码片段
        比如: ng-model="txt", {{ txt }}, ng-click="func()", ...

        主要是要大家知道表达式长什么样子( 抽象 )

    ng 表达式与 js 表达式的异同( 重点 )
        1) 上下文( this )
            js: this 是 window
                ng 只有在 scope 的方法中讨论( 界面中所有的数据都是 scope 的属性 )
            ng: this 是指当前的 scope
        2) 容错性
            js: console.log( num ) 报错, num 未定义
            ng: {{ txt }} 在 scope 中即使没有该属性也不会报错, 只会忽略不显示
        3) 过滤器( filter )
            js 中不含有 过滤器
            ng 中含有过滤器
        4) ...


    凡是表达式中的名字( 标识符 )都是 scope 的属性
        {{ message }}
        {{ num1 + num2 + num3 }}
        ng-style="obj"

    ng-click 这一类 dom 事件中, 不一定要放置 函数调用, 也可以直接放置语句.
        其含义与 在标签中写的 onclick="语句" 效果一样.
        例如:
            <a href="..." onclick="console.log( '哈哈哈哈' ); return false;"></a>
            本质上这个字符串就是一个 匿名函数, 即上面的代码逻辑上等价于
            a.onclick = function () {
                console.log( '哈哈哈哈' );
                return false;
            };
        同理:
            ng-click="func()"
            逻辑上等价于
            $scope.??? = function () {
                $scope.func();
            }