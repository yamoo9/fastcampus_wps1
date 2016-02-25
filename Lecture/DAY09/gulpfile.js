'use strict';

var config       = require('./config'),
    gulp         = require('gulp'),
    // CSS Preprocessing
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps'),
    // Sprite Image
    spritesmith  = require('gulp.spritesmith'),
    // Server
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload;

gulp.task('default', ['server', 'sass']);

gulp.task('build', function() {

});

gulp.task('server', function() {

});

gulp.task('watch', function() {
    gulp.watch(config.sass.path, ['sass']);
});

gulp.task('sass', function() {
    gulp.src(config.sass.path)
        .pipe( sourcemaps.init() )
        .pipe( sass( { 'outputStyle': 'expanded' } ).on('error', sass.logError) )
        .pipe( autoprefixer() )
        .pipe( sourcemaps.write('./maps') )
        .pipe( gulp.dest('dist/css') );
});