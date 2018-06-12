一、作用域的继承
    由于 html 是有包含关系的. 即树状结构.
    在数状结构中含有 controller 等属性, 即与之对应的就有树状的 scope 结构.
    例如:
        <body ng-app="mainApp">
            <div ng-controller="controller1">
                <div ng-controller="controller3"></div>
            </div>
            <div ng-controller="controller2"></div>
        </body>
    html:
        body
            div
                div
            div
    scope 也存在该结构
        $rootScope
            $scope: scope1
                $scope: scope3
            $scope: scope2
    该 scope 结构是 原型继承关系
        scope2 -> $rootScope -> Object.prototype -> null
        scope3 -> scope1 -> $rootScope -> Object.prototype -> null
    原型继承附带就是属性搜索原则




二、scope
        scope 就是作用域. 曾经在讨论的时候说的作用域是指变量的访问范围.
        在 ng 中 所有的数据 应该在 viewmodel 中, 而在 ng 中使用 "模块" 划分功能.
        因此在 ng 中 我们的 "模块" 就是一个变量的访问区域.

        在 ng 中作用域是一个 对象. 所谓的 访问作用域, 是指在对象中可否找到对应的属性.

        使用 方法: 界面中 需要什么数据. 在 scope 中就提供什么属性.

        登录验证框
            描述用户登录, 需要保证用户输入的用户, 密码等数据必须存在否则不允许等提交.
            首先界面中 有两个文本框, 一个是用户名, 一个是密码
            还有一个 按钮用于提交( submit )


        练习:
            1> 用 ng 实现 登录验证
            2> 使用 ng 实现 注册验证

        ng 的 DOM 事件, ng-click="func()" 类比一下. 你想到了什么?