var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('concat',function(){
	gulp.src('./src/*')
	    .pipe(concat('itcast.js'))
	    .pipe(gulp.dest('dist'));
	    
});
gulp.task('uglify',function(){
	gulp.src('./dist/*')
	    .pipe(uglify())
	    .pipe(gulp.dest('./mini'));
	    
});
