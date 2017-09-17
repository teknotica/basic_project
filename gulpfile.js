const config     = require('./gulpconfig.js');

const gulp       = require('gulp');
const less       = require('gulp-less');
const babel      = require('gulp-babel');
const clean      = require('gulp-clean');
const connect    = require('gulp-connect');
const concat     = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const ngAnnotate = require('gulp-ng-annotate');

// LESS
gulp.task('less', function() {
    return gulp.src(config.less.src)
        .pipe(less())
        .pipe(gulp.dest(config.less.dest))
        .pipe(connect.reload());
});

// SCRIPTS
gulp.task('scripts', function() {
    return gulp.src(config.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(babel({
            presets: ['es2015']
        }))        
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('.', { sourceRoot: '.' }))
        .pipe(gulp.dest(config.scripts.dest))
        .pipe(connect.reload());
});

// TEMPLATES
gulp.task('templates', function () {
    const ngTemplates = require('gulp-ng-templates');

    return gulp.src(config.templates.src, { base: __dirname + '/src/' })
        .pipe(ngTemplates({
            filename: 'templates.js',
            module: 'templates',
            standalone: true,
            path: function (path, base) {
                return path.replace(base, '');
            }
        }))
        .pipe(gulp.dest('./js'));
});

// VENDOR
gulp.task('vendor', function() {
    
    return gulp.src(config.scripts.vendor)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(sourcemaps.write('.', { sourceRoot: '.' }))
        .pipe(gulp.dest('./js'));
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
gulp.task('default', ['less', 'templates', 'scripts', 'vendor']);