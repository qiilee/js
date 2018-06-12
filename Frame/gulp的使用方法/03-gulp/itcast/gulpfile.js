// 1, 引入需要的包
var gulp = require( 'gulp' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );

// 2, 创建任务
gulp.task( 'concat', function () {
    return gulp.src( [ './src/Itcast.core.js'
                , './src/Itcast.dom.js'
                , './src/Itcast.event.js'
                , './src/Itcast.style.js'
                , './src/Itcast.attr.js' ] 
        ).pipe( concat( 'itcast.js' ) )
        .pipe( gulp.dest( 'dist' ) );
});

// uglify是命令名，此语法跟原来的相比多了第二个参数
// 是数组，数组里面是字符串，意思是，要执行uglify命令前要先执行完
// 数组里的命令
gulp.task( 'uglify', [ 'concat' ], function () {
    return gulp.src( './dist/*' )
        .pipe( uglify( ) )
        .pipe( gulp.dest( './mini' ) )
});


gulp.task( 'default', [ 'uglify' ], function () {} );

