'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass'); 
var css = require('gulp-clean-css');
var watch = require('gulp-watch');

gulp.task('default', function() {
  // place code for your default task here
    
});

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});
gulp.task('css', () => {
    return gulp.src('./css/*.css')
        .pipe(css({ compatibility: 'ie8' }))
        .pipe(gulp.dest('css'));
});
gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});