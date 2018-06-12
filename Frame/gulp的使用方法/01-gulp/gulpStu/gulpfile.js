// 此时的 编码就是 node 代码

/*
// 同 html 中 的 script 标签一样, 在 node 代码中需要使用什么就要引入什么
// 但是在 node 中没有 script 标签. 使用 
//  require( '包名字' )

// <script src="....js"></script>
var gulp = require( 'gulp' );
// 在 node 中没有全局创建东西, 因此需要使用 一个变量来接收 require 返回的数据


// 创建任务
// 要使用 gulp 来实现代码的合并与压缩
// 那么就创建任务, 创建什么任务就执行什么事情
// 使用语法:
// gulp.task( '任务名', function (params) { 
// })

// 当执行该任务的时候就是在执行该回调函数
gulp.task( 'apptest', function () {
    console.log( '我是一个 appTest 的任务' );
});
*/




// 如何实现 代码的 合并
/*
// 1, 引入包
var gulp = require( 'gulp' );
var concat = require( 'gulp-concat' );


// 2, 创建任务
gulp.task( 'concat', function () {
    // 3, 确定合并的目录文件
    gulp.src( './src/*' )               // 要处理什么文件, 但是没有描述如何处理
        .pipe( concat( 'all.js' ) )     // 使用 gulp-concat 包来实现合并, 并设置保存文件为 all.js
        .pipe( gulp.dest( './dist' ) ); // 也有 build 目录, output 目录 等
        // destination
});

// 下一个阶段要想要使用好 gulp 就应该 多去看看有什么常用的包, 可以做什么事情.
*/

var gulp = require( 'gulp' );
var mini = require( 'gulp-htmlmin' );

gulp.task( 'htmlmin', function () {

    gulp.src( './html/1.html' )
        .pipe( mini( { collapseWhitespace: true,
                       maxLineLength: 500  } ) )    // maxLineLength
        .pipe( gulp.dest( './dist' ) );

});












