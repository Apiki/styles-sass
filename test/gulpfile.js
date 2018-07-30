var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp
    .src('../index.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
});

gulp.task('dev', ['sass'], function(){
  browserSync.init({
    server: './'
  })

  gulp.watch('../**/**/*.scss', ['sass']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['dev']);
