1. 复习与答疑
    -> 复习
        -> MVC 和 MVVM 的基本概念
        -> ng 的基本使用
        -> 创建模块
            /* var module = */ angular.module( 'mainApp', [] )
            模块创建到哪里去了呢?
            获得模块的方法
                angular.module( 'mainApp' )
            模块在哪?

            模拟( 不一定是真实的 )
            (function () {
                var modules = {}; // 缓存
                var angular = {};

                angular.module = function ( name, requires ) {
                    var module;
                    if ( requires ) {
                        // 创建模块
                        module = { name: name };
                        modules[ name ] = module;
                    } else {
                        module = nudules[ name ]
                    }
                    return module;
                };
            })()

        -> 多模块( 多对象 )
            加载依赖模块的意思( 混入 mix )
                例如有一个模块 'moduleA'
                    angular.module( 'moduleA', [] )
                        .controller( ... )
                        .filter( ... )
                        .services( ... )
                        .directive( ... )
                        ....
                    // 类比一下好比有一个 对象 叫做 moduleA
                    // 它有很多的属性, 分别是 controller, filter, services, directive, ...
                创建一个模块 mainApp, 将 moduleA 加载进来
                    angular.module( 'mainApp', [ 'moduleA' ] )
                    // 类比一下. 此时好比有一个对象叫 mainApp.
                    // 加载依赖的意思就是 将 moduleA 中 "属性" 混入到 mainApp 中
            多模块协作
                分别控制两组 文本框的双向数据绑定


2. 文档
    1> angular 与 angularjs 的关系
    2> 官方文档
        -> 下载: https://code.angularjs.org/
        -> 在 解压后的 js 文件目录下 搭建 http 服务器
        -> 个人计算机上一般都有 服务器
            如果是 win7+ 都自带了 iis 服务器( internet information services )
            -> 控制面板
            -> 删除程序
            -> 打开或关闭win功能
            -> 选择安装
            -> 在管理工具中就可以看到 iis 管理工具
        -> 注意: 如果有访问权限的问题
            -> 右键 -> 安全 -> 编辑 -> 添加用户名 everyone -> 添加完全控制的权限 -> 保存即可
        -> 如果是电脑公司装机版的操作系统, 考虑使用 apache 或 http-server


3.angular.module( 'moduleA', [] ) 创建一个moduleA模块
    .controller( ... ) 控制器
    .filter( ... )  过滤器
    .services( ... ) 服务
    .directive( ... )  指令
    ....
    模块里创建的东西就属于这个模块

    2、加载依赖模块的意思：将另一个模块中的控制器，过滤器。。放到此模块中

    3、内部有provider对象，

    4、工厂函数：创建对象的函数