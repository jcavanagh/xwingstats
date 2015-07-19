var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src(__dirname)
	.pipe(webserver({
		livereload: true,
		directoryListing: true,
		open: true
	}));
});

gulp.task('less', function () {
	return gulp.src('./app/**/*.less')
		.pipe(less())
		.pipe(concat('app.css'))
		.pipe(gulp.dest('./css'));
});