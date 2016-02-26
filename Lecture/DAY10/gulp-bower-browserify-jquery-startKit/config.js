'use strict';

/**
 * 파일 경로
 * --------------------------------
 */
var root = './src/';

var paths = {
	'html': root + '**/*.html',
	'sass': {
		'src':  root + 'sass/**/*.{sass,scss}',
		'dest': root + 'css'
	},
	'browserify': {
		'src':             root + 'js/app.js',
		'watch_files':     [root + 'js/*.js'],
		'dest':            root + 'js/bundle/',
		'output_filename': 'app.js',
		'debugging':       true,
		'map_location':    './'
	}
};

/**
 * 옵션
 * --------------------------------
 */
var options = {
	'sass': {
		'outputStyle': 'compressed'
	},
	'browserify': {
		'entries': paths.browserify.src,
		'debug':   paths.browserify.debugging
	},
	'browserSync': {
		'server': './src'
	}
};

/**
 * Config Module 공개
 * --------------------------------
 */
module.exports = {
	'paths':   paths,
	'options': options
};