var config     = require('./gulpconfig.js');

var gulp       = require('gulp');
var less       = require('gulp-less');
var babel      = require('gulp-babel');
var clean      = require('gulp-clean');
var connect    = require('gulp-connect');

// LESS
gulp.task('less', function() {
    return gulp.src(config.less.src)
        .pipe(less())
        .pipe(gulp.dest(config.less.dest))
        .pipe(connect.reload());
});

// CLEAN SCRIPTS
gulp.task('clean-scripts', function() {
    return gulp.src(config.scripts.dest, {read: false})
        .pipe(clean());
});

// SCRIPTS
gulp.task('scripts', ['clean-scripts'], function() {
    return gulp.src(config.scripts.src)
        .pipe(babel({
            presets: ['es2015']
        }))        
        .pipe(gulp.dest(config.scripts.dest))
        .pipe(connect.reload());
});

// WATCH
gulp.task('watch', function() {
    gulp.watch(config.less.watch, ['less']);
    gulp.watch(config.scripts.watch, ['scripts']);
});

// CONNECT
gulp.task('connect', function() {
    connect.server({
      livereload: true
    });
  });

gulp.task('dev', ['connect', 'watch']);
gulp.task('default', ['less', 'scripts']);