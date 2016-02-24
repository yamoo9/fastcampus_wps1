## Javascript

### 모듈 패턴

- Javascript 모듈 패턴
- 모듈 패턴 1 - 객체(싱글톤) 반환
- 모듈 패턴 2 - 함수(생성자, 프로토타입) 반환
- Javascript 의존 모듈 관리 (Front-End)

---

##### `index.html`

```html
<!-- Javascript 모듈 로드: Javascript 자체적으로 별도의 모듈 로드를 제공하지 않는다. -->
<script src="js/modules/module-Counter.js"></script>
<script src="js/modules/module-DataManager.js"></script>
<script src="js/modules/module-Type.js"></script>
<script src="js/modules/module-Events.js"></script>
<script src="js/modules/module-DOM.js"></script>
<script src="js/modules/module-DOM.css.js"></script>

<script>
	// [의존 모듈 호출]
	// 프론트-엔드 환경에서는 HTML 문서에서 Javascript 모듈을 먼저 불러와야 사용이 가능
	(function(Type, Counter, DataManager, Events, DOM){
		'use strict';

		// 싱글톤 객체 유형
		console.log( 'Counter', Counter );
		console.log( 'DataManager', DataManager );
		console.log( 'Type', Type );
		console.log( 'Events', Events );

		// 생성자/프로토타입 객체 생성 유형
		console.log( 'DOM 데이터 유형', typeof DOM );
		console.log( 'DOM.prototype', DOM.prototype );
		console.log( 'DOM.prototype.css 존재하는가?', !!DOM.prototype.css );

	})(this.Type, this.Counter, this.DataManager, this.Events, this.DOM);
</script>
```

-

##### `module-pattern.js`

```js
/**
 * --------------------------------
 * Javascript 모듈 패턴
 * RequireJS
 * IIFE (즉시 실행 함수)
 * --------------------------------
 */

var Module_name = (function(global, doc){

	// 의존성 관리

	// 전역과 구분되는 독립된 공간(Scope)
	// 공개/비공개 멤버(변수, 함수) 구성
	// 필요에 따라서 비공개 멤버를 공개할 수도 있다.

	// 생성자 함수
	var _DOM = function() {};
	// 프로토타입 객체
	_DOM.prototype = {};
	// 함수를 반환하는 경우
	// 일반 또는 new 생성자(Constructor) 함수
	return _DOM;


	// 객체를 반환하는 경우
	// 싱글톤 객체
	return {};

})(window, window.document);
```

-

##### `module-Counter.js`

```js
var Counter = (function(){
	'use strict';

	var _count = 0,
		_getCount = function() {
			return _count;
		},
		_setCount = function(value) {
			_count = value;
		},
		_resetCount = function() {
			_setCount(0);
		},
		_incrementCount = function() {
			return ++_count;
		},
		_decrementCount = function() {
			return --_count;
		};

	// 반환되는 객체 : Singleton
	return  {
		'get'       : _getCount,
		'set'       : _setCount,
		'reset'     : _resetCount,
		'increment' : _incrementCount,
		'decrement' : _decrementCount
	};

})();
```

-

##### `module-Type.js`

```js
var Type = (function(global){
	'use strict';

	var _toString = Object.prototype.toString;

	function _isType(data, type) {
		return _toString.call(data).slice(8, -1).toLowerCase() === type;
	}

	function _isNumber(num) {
		return _isType(num, 'number');
	}

	function _isString(str) {
		return _isType(str, 'string');
	}

	function _isBoolean(boo) {
		return _isType(boo, 'boolean');
	}

	function _isObject(data) {
		return _isType(data, 'object');
	}

	function _isArray(data) {
		return _isType(data, 'array');
	}

	function _isFunction(data) {
		return _isType(data, 'function');
	}

	function _isNull(nu) {
		return _isType(nu, 'null');
	}

	function _isUndefined(un) {
		return _isType(un, 'undefined');
	}

	function _isDate(date) {
		return _isType(date, 'date');
	}

	function _isRegExp(reg) {
		return _isType(reg, 'regexp');
	}

	return  {
		isNumber    : _isNumber,
		isString    : _isString,
		isBoolean   : _isBoolean,
		isObject    : _isObject,
		isFunction  : _isFunction,
		isArray     : _isArray,
		isNull      : _isNull,
		isUndefined : _isUndefined,
		isDate      : _isDate,
		isRegExp    : _isRegExp
	};

})(this);
```

-

##### `module-DataManager.js`

```js
/**
 * --------------------------------
 * 데이터 관리 객체 모듈
 * --------------------------------
 * 로드(loadData)
 * 세이브(saveData)
 * 리무브(removeData)
 * --------------------------------
 * window.localStorage 객체
 * window.JSON 객체
 * --------------------------------
 */

var DataManager = (function(storage, JSON){
	'use strict';

	// 객체 판별법
	// 존재 유무를 파악해서 처리하는 과정
	if (typeof storage === 'undefined' || typeof JSON === 'undefined') {
		throw new Error('사용 중인 웹 브라우저는 로컬스토리지 객체 또는 JSON 객체를 지원하지 않습니다.');
	}

		// 모듈 패턴 외부로 내보낼 객체 dataManager
	var dataManager = {},
		// 데이터 이름
		dataName   = '@yamoo9';

	dataManager.loadData = function() {
		// storage에게 dataName 이름의 정보를 저장하고 있는지
		var data = storage.getItem( dataName );
		// 있다면 JSON 객체의 해석(parse) 방법을 통해 데이터를 반환
		if ( data ) {
			return JSON.parse( data );
		}
		// data가 존재하지 않는다면...
		// 빈 배열 객체를 반환
		return [];
	};

	dataManager.saveData = function(data) {
		// storage 객체의 setItem() 메소드를 이용하여
		// 전달 받은 데이터(객체)를 저장합니다.
		// JSON 객체의 stringify() 메소드를 사용하여 문자 형태(직렬화) 저장
		storage.setItem( dataName, JSON.stringify( data ) );
	};

	dataManager.removeData = function() {
		// storage 객체의 removeItem() 메소드를 이용하여
		// dataName에 저장되어 있는 정보를 제거한다.
		storage.removeItem( dataName );
	};

	// 모듈 패턴 외부로 객체 반환
	return dataManager;

})(window.localStorage, window.JSON);
```

-

##### `module-Event.js`

```js
var Events = (function(global){

	var _addEvent, _removeEvent;

	_addEvent = (function(){
		var __addEvent;

		if ( global.addEventListener ) {
			__addEvent = function(el, type, handler) {
				// W3C 표준 이벤트 모델
				el.addEventListener( type, handler );
			}
		} else if ( global.attachEvent ) {
			__addEvent = function(el, type, handler) {
				// MS 비표준 이벤트 모델
				el.attachEvent('on'+type, handler );
			}
		} else {
			__addEvent = function(el, type, handler) {
				// 오래된 이벤트 모델
				el['on'+type] = handler;
			}
		}

		return __addEvent;
	})();

	_removeEvent = (function(){
		var __removeEvent;
		if ( global.removeEventListener ) {
			__removeEvent = function(el, type, handler) {
				el.removeEventListener(type, handler);
			};
		} else if ( global.detachEvent ) {
			__removeEvent = function(el, type, handler) {
				el.detachEvent('on'+type, handler);
			};
		} else {
			__removeEvent = function(el, type, handler) {
				// 구형 이벤트 모델에서 이벤트를 제거하는 방법은
				// null을 대입하는 것. (초기 값)
				el['on'+type] = null;
			};
		}

		return __removeEvent;
	})();

	return {
		on  : _addEvent,
		off : _removeEvent
	};

})(this);
```

-

##### `module-DOM.js`

```js
// [의존 모듈]
// window.Type
// window.Events

var DOM = (function(global, doc, Type, Events){
	'use strict';

	/**
	 * dom 생성자 함수 정의
	 * ----------------------------------------------------------------
	 */
	var dom = function( selector ) {

		// new를 강제화하는 패턴
		if ( Type.isUndefined(this) || this.constructor !== dom ) {
			return new dom( selector );
		};

		// selector 데이터 유형 검증
		if ( !Type.isString( selector ) && selector.nodeType !== 1 ) {
			console.error( 'CSS 선택자 또는 DOM 요소노드를 전달해야 합니다.' );
		}

		// selector가 요소노드일 경우, 생성된 객체 인스턴스의 elements 속성에 요소노드 추가
		if ( selector.nodeType === 1 ) {
			(this.elements || (this.elements = [])).push( selector );
		} else {
			// 생성된 객체 인스턴스의 elements 속성에 selector 노드리스트(요소) 참조
			this.elements = doc.querySelectorAll( selector );
		}

	};



	/**
	 * dom 생성자 함수 메소드 정의 (정적 메소드, 유틸리티 메소드)
	 * ----------------------------------------------------------------
	 */
	// 유틸리티 메소드 확장 메소드 (정적 메소드 확장)
	dom.include = function( prop, value ) {
		if ( Type.isObject(prop) ) {
			this.override( this, prop );
			return;
		}
		if ( !Type.isString(prop) ) {
			return console.error('DOM.include() 유틸리티 메소드의 첫번째 인자 값은 문자열이어야 합니다.');
		}
		this[prop] = value;
	};
	// 인스턴스 메소드 확장 메소드 (프로트타입 확장)
	dom.extend = function( prop, value ) {
		if ( Type.isObject(prop) ) {
			this.override( this.fn, prop );
			return;
		}
		if ( !Type.isString(prop) ) {
			return console.error('DOM.extend() 유틸리티 메소드의 첫번째 인자 값은 문자열이어야 합니다.');
		}
		this.fn[prop] = value;
	};
	// 객체 복사 메소드
	dom.override = function( objA, objB ) {
		if ( ( !Type.isFunction(objA) && !Type.isObject(objA) ) || !Type.isObject(objB) ) {
			return console.error('DOM.override() 메소드 전달인자는 첫번째는 함수 또는 객체, 두번째는 객체여야만 합니다.');
		}
		for ( var prop in objB ) {
			if ( objB.hasOwnProperty( prop ) ) {
				objA[prop] = objB[prop];
			}
		}
		return objA;
	};
	// ----------------------------------------------------------------
	// DOM 생성자 함수 유틸리티 메소드 확장
	dom.include({
		// each() 유틸리티 메소드 확장
		'each' : (function(){
			var _each = [].forEach;
			if ( _each ) {
				// 네이티브 .forEach() 메소드 활용
				return function( list, callback ) {
					// callback( item, index, list )
					_each.call( list, callback );
				};
			} else {
				return function( list, callback ) {
					// for문 활용
					// callback( item, index, list )
					for ( var item, index=list.length; index--; ) {
						item = list[index];
						callback.call( null, item, index, list );
					}
				};
			}
		}()),

		'elementSets': function (element, attributes) {
			for ( var key in attributes ) {
				var value = attributes[key];
				element.setAttribute(key, value);
			}
		}
		// ※ 메소드를 추가로 확장할 경우 아래에 작성합니다.
	});




	/**
	 * dom.prototype 객체 메소드 정의 (동적 메소드, 인스턴스 메소드)
	 * dom.fn 별칭(Alias) 설정
	 * ----------------------------------------------------------------
	 */
	dom.fn = dom.prototype;

	// ----------------------------------------------------------------
	// dom.prototype 객체 메소드 확장
	dom.extend({

		'version': '0.0.1',

		'each': function(callback) {
			dom.each( this.elements, callback );
		},

		'attr': function(prop, value) {
			if ( Type.isObject(prop) ) {
				this.each( function(el, index) {
					for ( var key in prop ) {
						el.setAttribute( key, prop[key] );
					}
				} );
			} else {
				if ( !Type.isString(prop) ) {
					return console.error('.attr() 메소드의 첫번째 인자는 객체 또는 문자여야 합니다.');
				}
				if ( Type.isUndefined(value) ) {
					// GET
					return this.elements[0].getAttribute( prop );
				} else {
					// SET
					this.each( function(el, index) {
						el.setAttribute( prop, value );
					} );
				}
			}
		},

		'on': function( type, handler ) {
			this.each( function(el, index) {
				Events.on(el, type, handler);
			} );
		},

		'off': function( type, handler ) {
			this.each( function(el, index) {
				Events.off(el, type, handler);
			} );
		}

	});


	// ----------------------------------------------------------------
	// dom 생성자 반환
	return dom;

})(window, window.document, window.Type, window.Events);
```

-

##### `module-DOM.css.js`

```js
// [의존 모듈]
// window.Type
// window.DOM

(function(global, Type, DOM){
	'use strict';

	var _getStyle, _setStyle, _css;

	_getStyle = (function(){
		var __getStyle;
		if ( global.getComputedStyle ) {
			__getStyle = function (el, prop) {
				return global.getComputedStyle(el, null)[prop];
			}
		} else {
			__getStyle = function (el, prop) {
				return el.currentStyle[prop];
			}
		}
		return __getStyle;
	})();

	function _setStyle(el, prop, value) {
		el.style[prop] = value;
	}

	// 팩토리 패턴 (어떤 유형을 전달하는가에 따라서 각기 달리 처리)
	function _css(el, prop, value) {
		// CSS 선언 문자열 전달 시 처리되는 구문
		if ( Type.isString(prop) && prop.indexOf(':') > -1 ) {
			el.style.cssText = prop;
		}
		// prop 전달인자 값이 객체(CSS Map)일 때 처리되는 구문
		if ( Type.isObject(prop) ) {
			DOM.elementSets(el, prop);
		}
		// 값을 가져오거나, 설정(단일 속성)하는 코드
		if (!value) {
			return _getStyle(el, prop);
		} else {
			_setStyle(el, prop, value);
		}
	}



	// ------------------------------------------------------
	// DOM.prototype 확장
	DOM.extend('css', function(prop, value) {
		this.each(function(el, index) {
			_css(el, prop, value);
		});
	});

})(this, this.Type, this.DOM);
```