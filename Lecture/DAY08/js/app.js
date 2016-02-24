/*! app.js © yamoo9.net, 2016 */
// 전역 Global Scope (Context)

// P양
// var selector = null;

// A군
// IIFE 즉시 실행하는 함수
// (function(){})();
// (function(){}());
// !function(){}();
// +function(){}();
(function(exports, $){
	'use strict';

	// var panel_content = $('.panel-content');

	// console.log( panel_content );

	// $.attr(panel_content, {
	// 	'id': 'dynamic_set_id',
	// 	'title': '패널 콘텐츠'
	// });

	// [안티 패턴] 암묵적으로 전역 변수 설정
	// panel_content = panel_content;

	// 외부 공개 (명시적)
	// exports.panel_content = panel_content;

})(this, DOM);