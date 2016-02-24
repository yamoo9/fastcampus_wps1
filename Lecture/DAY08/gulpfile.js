'use strict';
// 모듈 로드
var gulp = require('gulp'),
	sass = require('gulp-sass');

// 기본 업무
gulp.task('default', function() {
	console.log( 'Gulp Task is Start...' );
});

// 사용자 정의 업무
// 디렉토리에 파일을 다른 디렉토리로 이동
gulp.task('move', function() {
	gulp.src('components/jquery/dist/jquery.min.js')
		.pipe( gulp.dest('js/lib') );
});

// Sass 업무
gulp.task('sass', function() {
	gulp.src('./sass/*.{sass,scss}')
		.pipe( sass({
			'outputStyle': 'expanded'
			}).on('error', sass.logError) )
		.pipe( gulp.dest('./css') );
});

// Sass 감시(관찰) 업무
gulp.task('sass:watch', function() {
	gulp.watch('sass/**/*.{sass,scss}', ['sass']);
});