var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var eslint = require('gulp-eslint');
var testee = require('testee');

gulp.task('test', function () {
	return testee.test(['test/test.html'], 'chrome', {
		reporter: 'Spec'
	});
});

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

gulp.task('lint', function() {
	return gulp.src('./app/**/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});