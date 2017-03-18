var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');
var rename = require('gulp-rename');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var webserver = require('gulp-webserver');

gulp.task('default', ['less', 'minify']);

gulp.task('less', function () {
    return gulp.src('less/bootstrap-fullcalendar.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(gulp.dest('docs/css/'))
        ;
});

gulp.task('watch', function () {
    gulp.watch('less/*.less', ['less'])
});

// minifies the core modules's css
gulp.task('minify', [ 'less' ], function() {
    return gulp.src([
        'dist/*.css',
        '!dist/*.min.css' // avoid double minify
    ])
        .pipe(minify())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('dist/'))
        ;
});

gulp.task('webserver', function() {
    gulp.src('docs')
        .pipe(webserver({
            livereload: true,
            open: true,
            fallback: 'index.html',
            port:8080,
            host:"0.0.0.0"
        }));
});

gulp.task('copy', function () {
     gulp.src(['node_modules/moment/min/moment.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/fullcalendar/dist/fullcalendar.js', 'node_modules/bootstrap/dist/js/bootstrap.js']).pipe(gulp.dest('docs/js'));
     gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css']).pipe(gulp.dest('docs/css'));
     gulp.src(['node_modules/bootstrap/less/variables.less']).pipe(gulp.dest('less/'));
})