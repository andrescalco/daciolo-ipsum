const gulp = require('gulp');
const minifyjs = require('gulp-js-minify');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');

gulp.task('minify-js', () => {
	return gulp.src('daciolo.js')
	.pipe(uglify())
	.on('error', function (err) {
		console.log(err.toString());
		this.emit('end');
	})
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest(''));
});

gulp.task('default', ['minify-js'], function() {
	return gulp.watch('daciolo.js', ['minify-js']);
});