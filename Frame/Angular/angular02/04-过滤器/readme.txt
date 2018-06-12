7. 过滤器( filter )
    过滤器是一个函数, 该函数用于格式化需要显示的 字符串.

    <span>{{ price }}</span>
    ...
    $scope.price = 13.00; // 123, 123.456, 1.234E56, ...
8. 如何使用过滤器
    过滤器有两种用法
    1) 在插值表达式中直接使用
        {{ expr | filterName:arg1:arg2:arg3 | filterName:args }}
    2) 在代码中如何使用
        1> 在 控制器中使用过滤器
        2> 在 控制器的 函数中参数写上 $filter
            .controller( 'controllerName', function ( $scope, $filter ) {
                // ...
            })
        3> 使用 $filter( '过滤器的名字' ) -> 返回过滤器函数
        4> 使用该函数处理数据 返回想要的格式化的结果

9. 有哪些内置的过滤器
    -> currency
    -> date, 就是用于格式化显示时间的过滤器
    -> filter, 在数组或字符串中匹配后筛选出一个子数组或子字符
        ng-repeat="item in list"
        如果希望某一个标签重复出现, 就将该属性放到标签中.
        注意这个 ng-repeat 中写的表达式. item 不在当前 scope 中. 可以简单的认为不创建 item
        此指令, 模拟 forin 循环, 使用 item in list 来遍历 list. 这个 list 是 scope 中的属性.
        item 遍历的是项, 而不是索引( 有别与 forin 循环 )

        案例: 生成 列表的案例

        ng-hide="boolean值", ng-show

        filter 将数组进行过滤, 留下一个子数组
        提供参数过滤:
            1> 字符串: 数组项中只要包含该字符串, 则会被留下来
            2> 对象: 匹配数组中含有对应属性的对象
            3> 函数: 给每一个数组都调用 该函数, 处理
                    如果在 filter 后面是一个函数, 那么在 遍历之前会对 数组做一次筛选
                    删选的条件是 给每一个数组元素都调用一次 函数, 并且函数返回值如果为 true 表示留下该数据
                    如果函数的 返回值为false 就不适用该数据.

                    类似于数组给出的 filter 方法

                    var  newArr = [...].filter(function ( v, i) {
                        return true/false
                    });
    -> json
        {{ obj | json }}
    -> limitTo
        在数组中过滤器出子数组( filter )
        参数是数字索引
    -> lowercase, uppercase
    -> orderBy
        将数据按照 XX 规则排序
        {{ 数组 | orderBy: 属性名 }}