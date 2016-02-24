/*! dom-helper.js © yamoo9.net, 2016 */
var DOM = (function(){
	'use strict';

	function type(data) {
		return Object.prototype.toString.call( data ).slice(8, -1).toLowerCase();
	}

	function isType(data, confirm_type) {
		if ( typeof confirm_type !== 'string') {
			throw new Error('전달된 두번째 인자의 유형은 반드시 문자 데이터 유형이어야 합니다.');
		}
		return type(data) === confirm_type;
	}

	function isArray(data) {
		return type(data) === 'array';
	}

	function each(data, callback) {
		if ( isType(data, 'object') ) {
			for (var key in data) {
				callback.apply(null, [key, data[key]]);
			}
		}
		if ( isType(data, 'array') ) {
			data.forEach(callback);
		}
	}

	function selector(selector, parent) {
		var els = (parent || document).querySelectorAll(selector);
		return !els ? null : els.length > 1 ? els : els[0];
	}

	// function addAttribute(element, property, value) {
	// 	var old_prop = element.getAttribute(property);
	// 	if ( old_prop ) {
	// 		element.setAttribute(property, old_prop + ' ' + value);
	// 	} else {
	// 		element.setAttribute(property, value);
	// 	}
	// }

	function attr(el, prop, value) {
		if (!el || el.nodeType !== 1) {
			throw new Error('첫번째 전달인자는 요소노드여야 합니다.');
		}
		if ( !isType(prop, 'string') && !isType(prop, 'object') ) {
			throw new Error('두번째 전달인자는 문자 데이터 유형 또는 객체 데이터 유형이어야만 합니다.');
		}
		if ( isType(prop, 'string') ){
			if ( value ) {
				el.setAttribute(prop, value);
			} else {
				return el.getAttribute(prop);
			}
		}
		if ( isType(prop, 'object') ) {
			each(prop, function(key, value) {
				el.setAttribute(key, value);
			});
		}
	}



	// 외부에 공개할 객체를 생성
	return {
		'type': type,
		'isType': isType,
		'isArray': isArray,
		'selector': selector,
		'each': each,
		'attr': attr
	};

})();