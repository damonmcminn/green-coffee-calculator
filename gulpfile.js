var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var jade = require('gulp-jade');
var minifyCSS = require('gulp-minify-css');

gulp.task('webserver', function() {
  connect.server({
    root: 'dist',
    livereload: true,
  });
});

gulp.task('html', function() {
  return gulp.src('src/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

gulp.task('css', function() {
  return gulp.src('src/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

gulp.task('js', function() {
  return gulp.src('src/*.js')
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/*.jade', ['html']);
  gulp.watch('src/*.js', ['js']);
  gulp.watch('src/*.css', ['css']).on('changed', livereload.changed);
});

gulp.task('default', ['webserver', 'js', 'html', 'css', 'watch']);
