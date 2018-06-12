// 1, 引入需要的包
var gulp = require( 'gulp' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );

// 2, 创建任务   先是合并js文件再是压缩js文件
gulp.task( 'concat', function () {
    gulp.src( './src/*' )
        .pipe( concat( 'itcast.js' ) )
        .pipe( gulp.dest( 'dist' ) );
});


gulp.task( 'uglify', function () {
    gulp.src( './dist/*' )
        .pipe( uglify( ) )
        .pipe( gulp.dest( './mini' ) )
});

