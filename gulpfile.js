const gulp = require('gulp');
const minifyjs = require('gulp-js-minify');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const browserSync = require('browser-sync');

gulp.task('minify-js', () => {
	return gulp.src('daciolo.js')
	.pipe(uglify())
	.on('error', function (err) {
		console.log(err.toString());
		this.emit('end');
	})
	.pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest(''))
  .pipe(gulp.dest('docs'));
});

gulp.task('dev-server', function() {
	const server = browserSync.create();
	server.init({
        server: {
            baseDir: "./docs"
        }
    });
    gulp.watch('./docs/*.html', server.reload);
    gulp.watch('./docs/*.css', server.reload);
    gulp.watch('./docs/*.js', server.reload);
});

gulp.task('build', ['minify-js']);

gulp.task('default', ['minify-js', 'dev-server'], function() {
	return gulp.watch('daciolo.js', ['minify-js']);
});