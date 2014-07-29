var gulp = require("gulp");
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var src = "src/Immutable.js";
var min = "min/"

gulp.task('dist', function() {
  gulp.src(src)
  	.pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(min));
});

gulp.task("default", function() {
	var watcher = gulp.watch(src, ['dist']);
	watcher.on('change', function(event) {
	  console.log('File '+event.path+' was '+event.type+', running tasks...');
	});
});