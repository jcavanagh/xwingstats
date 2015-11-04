var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var eslint = require('gulp-eslint');

gulp.task('webserver', function() {
  gulp.src(__dirname)
	.pipe(webserver({
		livereload: true,
		directoryListing: true,
		open: true
	}));
});

gulp.task('webserver-prod', function() {
  gulp.src(__dirname)
	.pipe(webserver({
		host: 'jlcavanagh.com',
		fallback: 'index.html',
		livereload: false,
		directoryListing: false
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