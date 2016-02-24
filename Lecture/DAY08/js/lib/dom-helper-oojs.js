/*! dom-helper.js © yamoo9.net, 2016 */
var DOM = (function(){
	// 'use strict';

	// 생성자 함수
	var Dom = function(selector) {
		// new를 강제화 하는 패턴
		if ( this === window ) {
		// if ( this.constructor !== Dom ) {
			return new Dom(selector);
		}
		this.el = this.collection(selector);
	};

	// Static Methods
	Dom.type = function (data) {
		return Object.prototype.toString.call( data ).slice(8, -1).toLowerCase();
	};

	Dom.isType = function (data, confirm_type) {
		if ( typeof confirm_type !== 'string') {
			throw new Error('전달된 두번째 인자의 유형은 반드시 문자 데이터 유형이어야 합니다.');
		}
		return type(data) === confirm_type;
	};

	Dom.isArray = function (data) {
		return type(data) === 'array';
	};

	Dom.each = function(data, callback) {
		var _type = Dom.type(data);
		if ( _type === 'object' ) {
			for (var key in data) {
				callback.apply(null, [key, data[key]]);
			}
		}
		if ( _type === 'array') {
			data.forEach(callback);
		}
	};

	// Instance Methods
	// 인스턴스 속성 설정 (라이브러리 객체 속성/메소드)
	Dom.fn = Dom.prototype = {
		'constructor': Dom,
		'collection': function(selector) {
			return document.querySelectorAll(selector);
		},
		'css': function(prop, value) {
			var self = this;
			if (value) {
				self.el.style[prop] = value;
			} else {
				return self.style[prop];
			}
		}
	};

	// 생성자 함수 반환
	return Dom;

})();