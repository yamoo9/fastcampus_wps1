'use strict';

var gulp        = require('gulp'),
	// Gulp 유틸리티
	gutil       = require('gulp-util'),
	gulp_if     = require('gulp-if'),
	// 서버 환경 구성
	browserSync = require('browser-sync').create(),
	// Sourcemap 생성
	sourcemaps  = require('gulp-sourcemaps'),
	// Sass 프리프로세싱
	sass        = require('gulp-sass'),
	// Javascript 압축
	uglify      = require('gulp-uglify'),
	// Browserify 번들링
	browserify  = require('browserify'),
	source      = require('vinyl-source-stream'),
	buffer      = require('vinyl-buffer'),
	// 환경 설정
	config      = require('./config');

// 빌드 설정 (초기 값: false)
global.process.build = false;

// 기본 업무 (Default Task) 등록
gulp.task('default', ['server', 'watch']);

// 관찰(Watch) 업무
gulp.task('watch', function() {
	gulp.watch( config.paths.sass.src, ['sass'] );
	gulp.watch( config.paths.browserify.watch_files, ['browserify'] );
	gulp.watch( config.paths.html ).on( 'change', browserSync.reload );
});

// 서버(Server) 업무
gulp.task('server', ['sass'], function() {
	browserSync.init( config.options.browserSync );
});

// Sass → CSS 업무
gulp.task('sass', function() {
	gulp
		.src( config.paths.sass.src )
		.pipe( sourcemaps.init() )
		.pipe( sass( config.options.sass ).on('error', sass.logError) )
		.pipe( sourcemaps.write('./') )
		.pipe( gulp.dest( config.paths.sass.dest ) )
		.pipe( browserSync.stream() );
});

// Browserify 업무(빌드 실행 시)
gulp.task('build:browserify', function() {
	// 시스템 프로세스 변수 값을 변경해서 처리를 할겁니다.
	global.process.build = true;
	// console.log( global.process.build );
	gulp.start( 'browserify' );
});

// Browserify 업무
gulp.task('browserify', function() {
	var bsr = browserify( config.options.browserify );
	bsr
		.bundle()
		.pipe( source( config.paths.browserify.output_filename ) )
		.pipe( buffer() )
		.pipe( sourcemaps.init({ loadMaps: config.paths.browserify.debugging }) )
		.pipe( gulp_if( global.process.build , uglify()) )
		.on( 'error', gutil.log )
		.pipe( sourcemaps.write( config.paths.browserify.map_location ) )
		.pipe( gulp.dest( config.paths.browserify.dest ) );
});