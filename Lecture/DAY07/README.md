## Javascript

### Javascript 함수는 일급객체

Javascript 함수는 **일반 함수**로서 때론 **생성자 함수**, **함수의 인자**, **객체의 멤버**로서 다양하게 사용된다.

#### 일급객체(First-Class Object)의 특징

- 변수, 데이터 구조 안에 담을 수 있다.
- 인자(Parameter, Argument)로 전달할 수 있다.
- 반환 값(Return Value)으로 사용할 수 있다.
- 런타임(실행) 중에 생성할 수 있다.
- 할당에 사용된 이름과 관계 없이 고유하게 식별할 수 있다.

-

### 패턴(Patterns)

넓은 의미의 패턴은 "반복되는 사건이나 객체의 주제로 물건을 만드는 데 사용할 수 있는 틀이나 모형이 될 수 있는 것"을 말한다.
소프트웨어 개발에서는 **일반적인 문제를 해결하는 해결책**을 가리킨다. 바로 복사해서 붙여넣을 수 있는 코드를 말하는 것이 아니라,
*모범적인 관행*, *쓰임새에 맞게 추상화된 원리*, *어떤 범주의 문제 해결을 위한 템플릿* 에 가깝다.

#### 패턴을 사용하는 이유

- 패턴은 검증된 실행 방법으로 쓸데 없이 시간을 낭비하지 않고, 보다 나은 코드를 작성할 수 있도록 도와준다.
- 패턴은 일정 정도의 추상화 단계를 제공한다.
- 패턴은 팀 커뮤니케이션에 도움이 된다. (유지보수, 재사용)

#### 패턴의 종류

- 디자인 패턴 `객체지향 언어(C++, Java 등)에서 사용되는 설계 패턴`
- 코딩 패턴 `자바스크립트 특유의 독특한 패턴`
- 안티 패턴 `문제 해결보다는 오류를 더 많이 읽으킬 소지가 있는 잘못된 접근 방법`

-

### Javascript는 객체 지향 언어

Javascript는 잘 알려진 객체 지향 언어의 Class와는 다른 방법(Prototype)으로 객체 지향을 구현할 수 있다.
(ECMAScript 2015(ES6)에서는 Class를 사용할 수 있다) Javascript가 지원하는 프로토타입(Prototype)은
코드를 재사용하는 방법 중 하나로 객체의 능력을 상속(Inheritance) 할 수 있도록 구현한다.

사용자가 생성한 모든 함수는 prototype 속성(프로퍼티)을 가지는데 이는 프로토타입은 객체(빈 객체)를 참조한다.
프로토타입 객체에 멤버를 추가하면 상속을 통해 생성자를 통해 생성된 객체(인스턴스)는 이를 물려받아 사용가능하다.

#### Javascript 객체의 종류

- 네이티브 객체
- 호스트(브라우저) 객체
- 사용자 정의 객체

-

### ECMAScript

문서객체모델(DOM, Document Object Model), 브라우저객체모델(BOM, Browser Object Model),
규정 외 호스트(브라우저) 객체를 제외한 코어 자바스크립트 프로그래밍 언어는 ECMAScript(ES) 표준에 기반을 두고 있다.

- ECMAScript 3 - 1999년 승인
- ECMAScript 4 - 개발 중단
- ECMAScript 5 - 2009년 12월 승인
- ECMAScript 6 - 2015년 승인

#### 엄격 모드

ES5에서 추가된 엄격 모드(Strict Mode)는 기능 추가가 아닌, 오류 발생 가능성이 있는 코드를 제거하는 역할을 한다.
엄격 모드를 지원하는 브라우저에서는 오류 발생 가능성이 있는 코드 작성 시 오류를 발생하지만, 지원하지 않는
구형 브라우저는 이를 단순하게 무시한다. 즉, 호환성에 문제는 없다. (하위 호환성 유지) 엄격 모드는 개별적인
유효범위(함수, 전역 유효범위 등) 내부 첫 라인에 아래와 같은 문자열을 선언하면 된다.

```js
// --------------------------------
// ES5에 추가된 엄격 모드(strict mode)
// --------------------------------
// 전역 (Global Scope)
'use strict';

// 함수 영역(Local Scope)
function fnScope() {
	'use strict';
}
```

ES는 추후 엄격 모드만 지원할 계획이다. ES5 엄격모드는 이 과정을 위한 과도기 버전인 것이다.

-

### Javascript 코딩 패턴

- [유지보수 가능한 코드 작성](#%EC%9C%A0%EC%A7%80%EB%B3%B4%EC%88%98-%EA%B0%80%EB%8A%A5%ED%95%9C-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1)
- [전역 변수 (Global Variables) 사용 최소화](#%EC%A0%84%EC%97%AD-%EB%B3%80%EC%88%98-%EC%82%AC%EC%9A%A9-%EC%B5%9C%EC%86%8C%ED%99%94)
- [`var` 선언은 필수!](#var-%EC%84%A0%EC%96%B8%EC%9D%80-%ED%95%84%EC%88%98)
- [단일 `var` 패턴 (Single Var Pattern)](#%EB%8B%A8%EC%9D%BC-var-%ED%8C%A8%ED%84%B4-single-var-pattern)
- [암묵적 타입캐스팅 피하기](#%EC%95%94%EB%AC%B5%EC%A0%81-%ED%83%80%EC%9E%85%EC%BA%90%EC%8A%A4%ED%8C%85-%ED%94%BC%ED%95%98%EA%B8%B0)
- [반복 구문에서 `length` 값은 캐시 (Cache)](#%EB%B0%98%EB%B3%B5-%EA%B5%AC%EB%AC%B8%EC%97%90%EC%84%9C-length-%EA%B0%92%EC%9D%80-%EC%BA%90%EC%8B%9C-cache)
- [`for ~ in` 반복문에서 `hasOwnProperty()` 사용](#for--in-%EB%B0%98%EB%B3%B5%EB%AC%B8%EC%97%90%EC%84%9C-hasownproperty-%EC%82%AC%EC%9A%A9)
- [`eval()` 함수 사용 금지!](#eval-%ED%95%A8%EC%88%98-%EC%82%AC%EC%9A%A9-%EA%B8%88%EC%A7%80)
- [`parseInt()` 숫자 변환 시, 기수 설정](#parseint-%EC%88%AB%EC%9E%90-%EB%B3%80%ED%99%98-%EC%8B%9C-%EA%B8%B0%EC%88%98-%EC%84%A4%EC%A0%95)

---

#### 유지보수 가능한 코드 작성

일관된 코딩 규칙 준수를 통해 유지보수 가능한 코드를 작성해야 한다.

- 읽기 쉽다.
- 일관적이다.
- 예측 가능하다.
- 한 사람이 작성한 것처럼 보인다.
- 문서화되어 있다.



-

#### 전역 변수 사용 최소화

전역 변수 사용을 최소화한다는 것은 **전역을 오염시키지 않는 것**을 말한다.
최대한 전역과 구분되는 영역(Scope)에서 코드를 작성하는 습관을 들일 필요가 있다.

- 네임스페이스(Namespace) 패턴
- IIFE(Immediately-Invoced Function Expression) 활용

##### 전역 변수의 문제점

Javascript 애플리케이션, 웹 사이트 내 모든 코드 사이에서 공유되는 문제.
애플리케이션 내 다른 영역에서 목적이 다른 동일한 이름의 전역 변수가 존재할 경우 코드 충돌.
외부 코드를 가져와 삽입할 경우에도 문제 발생 가능. 고로 스크립트 간 충돌을 방지하기 위함으로
전역 변수 사용을 최소한 줄여야 함.

- 서드파티 Javascript 라이브러리
- 광고 제휴 업체 스크립트


[`상위로 이동 ↑`](#javascript-%EC%BD%94%EB%94%A9-%ED%8C%A8%ED%84%B4)

-

#### `var` 선언은 필수!

Javascript에서는 전역 변수 생성이 너무나 쉽다. 암묵적 전역(Implied Globals) 개념 때문.
선언하지 않고 사용되는 변수의 경우 오류가 발생하는 것이 아니라, 자동으로 전역 객체의 속성이 됨을 말함.

```js
function send(product, destination) {
	// complete_message는 선언하지 않고 사용됨으로 인해
	// 암묵적 전역에 따라 send 함수 내 지역 변수가 아닌, 전역 변수화된다.
	complete_message = product + '를 ' + destination + ' 보냈습니다.';
	return complete_message;
}

send('편지', '어머님께');

console.log( complete_message ); // 메시지 출력
```

고로 변수를 선언할 때는 명시적으로 `var`를 붙여주는 것이 요구된다.

```js
function send(product, destination) {
	// 함수 영역(Scope) 내에서 선언된 변수 complete_message는 지역변수.
	var complete_message = product + '를 ' + destination + ' 보냈습니다.';
	return complete_message;
}

send('편지', '어머님께');

console.log( complete_message ); // RefrenceError
```

암묵적 전역의 또 다른 안 좋은 패턴은 `var` 선언에 연쇄적 할당을 적용하는 경우.

```js
function increase(value) {
	// count는 암묵적 전역에 따라 전역 객체의 속성이 된다.
	// var num = ( count = 1 );
	var num = count = 1;
	return ++num - count++ + value;
}

increase(10);

console.log( count ); // 2
```

Javascript 코드는 오른쪽에서 왼쪽 방향으로 진행되며 해석되기 때문.
변수를 사전에 선언해두면 이와 같은 의도치 않은 문제를 예방할 수 있다. (연쇄 할당문 사용 가능)

```js
function increase(value) {
	var num, count;
	num = count = 1;
	return ++num - count++ + value;
}

increase(10);

console.log( count ); // RefrenceError
```

> 암묵적 전역 변수를 피해야 하는 또 다른 이유는 이식성(Portability) 때문.
코드를 실행할 경우, 실행 환경에는 존재하지 않던 암묵적 전역 변수가 실행 환경의
네이티브 객체를 의도치 않게 덮어 쓸 수 있는 가능성이 있기 때문. 그리고 ECMA
Script v5(이하 ES5) 엄격 문법 모드(Strict)에서는 var를 선언하지 않을 경우 오류 발생.

##### `var` 선언을 빼먹었을 때의 부작용

- 명시적으로 선언된 전역 변수는 `delete`로 삭제할 수 없다.
- 암묵적으로 생성된 전역 변수는 `delete`로 삭제할 수 있다.

암묵적 전역 변수는 엄밀히 말해 변수라기 보다는 전역 객체의 속성(Property)이기 때문.
속성은 `delete`로 삭제 가능하지만, 변수는 삭제할 수 없다.

```js
// 전역 변수 선언 (암묵적 전역 변수 포함)
var global_var = 9;
global_no_var = 'Asrada';
function scopeFn() {
	local_no_var = true;
}
scopeFn();

// 삭제
delete global_var;
delete global_no_var;
delete local_no_var;

// 삭제 결과 확인
typeof global_var;    // 'number'
typeof global_no_var; // 'undefined'
typeof local_no_var;  // 'undefined'
```

[`상위로 이동 ↑`](#javascript-%EC%BD%94%EB%94%A9-%ED%8C%A8%ED%84%B4)

-

#### 단일 `var` 패턴 (Single Var Pattern)

영역(Scope) 내 상단에 `var` 선언을 한 번만 쓰는 패턴은 매우 유용.

- 영역에서 필요로 하는 모든 지역 변수를 한 눈에 찾을 수 있다.
- 변수 선언 시, 발생하는 의도치 않은 오류(Hoisting 현상)를 예방할 수 있다.
- 변수 우선 선언이 습관화되기 때문에 전역 변수 최소화에 도움이 됨.
- 코드량이 줄어 들어 작성량, 전송량 모두 줄어든다.

```js
function inMyScope() {
	// 단일 var 패턴을 사용하여 영역 내 상단에 선언된 변수들.
	var num = 9,
		str = '단일 var 패턴',
		boo = false,
		fnc = function() {};
}

function updateWidget() {
	// DOM 객체를 참조할 때 단일 var 패턴을 사용하는 예
	var widget        = document.querySelector('.widget'),
		widget_button = widget.querySelector('.widget-button'),
		widget_style  = widget.style;
}
```

##### 호이스팅 (Hoisting)

호이스팅이란? 영역 내 선언된 `var` 그리고 `function` 구문이 최상위로 끌어올려지는 현상을 말한다.
이로 이해 의도치 않은 오류가 발생할 가능성이 있다.

```js
// 전역 변수 declaration
var declaration = 'global declaration';

function hoistingEx() {
	// declaration 변수 값이 'undefined'라면 참(true), 조건문 실행
	if ( typeof declaration === 'undefined' ) {
		// 지역 변수 declaration
		var declaration = 'local declaration';
	}

	return declaration;
}

hoistingEx(); // ???
```

위 코드는 호이스팅 현상으로 인해 아래 코드처럼 해석되어 동작된다. 그렇기 때문에
`var` 선언문을 영역의 최상단에 묶어 작성하는 패턴은 오류를 미연에 방지하는 좋은 습관이다.

```js
var declaration = 'global declaration';

function hoistingEx() {
	// 호이스팅 현상 발생
	var declaration;
	if ( typeof declaration === 'undefined' ) {
		// 지역 변수 declaration
		var declaration = 'local declaration';
	}

	return declaration;
}

hoistingEx(); // local declaration
```

> 사실 Javascript 코드 해석 과정에서 실제 구현 단계는 좀 더 복잡한다. 실제 구현 단계는
크게 두 단계로 처리되는데 첫 번째 단계는 변수, 함수 선언, 형식 매개변수 들이 생성되며 코드를
해석하고 실행 문맥(Context)에 진입한다. 두 번째 단계는 런타임(Runtim) 코드 실행 단계로
함수 표현식과 선언되지 않은 변수들이 생성된다.


[`상위로 이동 ↑`](#javascript-%EC%BD%94%EB%94%A9-%ED%8C%A8%ED%84%B4)

-

#### 암묵적 타입캐스팅 피하기

Javascript는 데이터를 비교할 때 암묵적으로 타입캐스팅 시도한다. 이처럼 자동으로 타입캐스팅을 시도하는 점은 Javascript의 안 좋은 점중 하나이다. 고로 엄격한 비교를 수행해야 한다. 암묵적 타입캐스팅으로 인한 오류를 사전에 방지하기 위해서는 `===`, `!==` 연산자를 사용하는 습관을 들여야 한다.

```js
// 암묵적 타입캐스팅 시도 결과로 의도치 않은 오류가 발생
""           ==   "0"           // false
0            ==   ""            // true
0            ==   "0"           // true
false        ==   "false"       // false
false        ==   "0"           // true
false        ==   undefined     // false
false        ==   null          // false
null         ==   undefined     // true
" \t\r\n"    ==   0             // true


// 엄격한 비교 연산자 활용으로 오류 발생 사전에 방지
""           ===   "0"           // false
0            ===   ""            // false
0            ===   "0"           // false
false        ===   "false"       // false
false        ===   "0"           // false
false        ===   undefined     // false
false        ===   null          // false
null         ===   undefined     // false
" \t\r\n"    ===   0             // false
```



[`상위로 이동 ↑`](#javascript-%EC%BD%94%EB%94%A9-%ED%8C%A8%ED%84%B4)

-

#### 반복 구문에서 `length` 값은 캐시 (Cache)

##### `for` 반복문

일반적으로 배열 또는 arguments, HTMLCollection 등 유사 배열 객체를 반복 순환할 때 사용되는 `for` 반복문 사용 시, 아래와 같은 코드 형태로 사용해서는 코드 처리 속도가 느려지는 문제가 있다.

```js
var tab_menus = document.querySelectorAll('.tab-widget .tab-menu');
for ( var i=0; i<tab_menus.length; i++ ) {
	// tab_menus[i] HTMLCollection을 반복 순환
}
```

반복할 때 마다 배열의 `length`에 접근해야 하기 때문. HTMLCollection의 경우 더더욱 코드가 느려지는 문제가 발생한다. HTMLCollection은 HTML 문서에서 실시간으로 대상을 찾아 수집(Collection)하기 때문에 반복될 때마다 DOM에 요구하는 것과 같기 때문에 DOM 접근에 드는 비용이 큰 걸 감안하면 간과할 수 없는 문제이다. 고로 `for` 반복문을 최적화하기 위해서는 HTMLCollection의 `length` 값을 캐시(Cache)해야 한다. HTMLCollection을 순환할 때 `length` 값을 캐시하면 무려 190배(IE 7 기준) 속도가 향상된다.

```js
var tab_menus = document.querySelectorAll('.tab-widget .tab-menu');
// for 문의 선언 구간에 단일 var 패턴을 사용하여 캐시(Cache)
for ( var i=0, l=tab_menus.length; i<l; i++ ) {
	// ...
}
```

뿐만 아니라 `for` 문 내부의 단일 `var` 패턴을 영역 내 상위 `var` 구문으로 묶어 줄 수도 있다.
이 패턴의 장점은 단일 `var` 패턴을 일관되게 고수할 수 있다는 점이다. 다만 코드 리팩토링 시에
전체 반복문을 복사/붙여넣기하는 일이 쉽지 않은 단점이 있다.

```js
// for 문의 선언 구간을 빼내어 단일 var 패턴으로 묶어주는 패턴
var tab_menus = document.querySelectorAll('.tab-widget .tab-menu'),
    i         = 0,
    l         = tab_menus.length;

for ( ; i<l; i+=1 ) {
	// ...
}
```

이 외에도 미세하지만 코드를 최적화는 방법이 있다.

첫 번째 방법은 다음과 같다.

- 변수를 하나만 사용한다.
- 역순으로 순환시킨다. (0이 아닌 값과 비교하는 것보다 빠르기 때문)

```js
var tab_menus = document.querySelectorAll('.tab-widget .tab-menu');
// 변수 i 하나만을 사용하면서, 역순으로 for 반복 구문 처리
for ( var i=tab_menus.length; i-=1; ) {
	// ...
}
```

두 번째 방법은 `while` 반복문을 활용하는 것이다.

```js
var tab_menus = document.querySelectorAll('.tab-widget .tab-menu'),
    i         = tab_menus.length;
// while 구문을 사용하여 i 값을 0과 비교(속도 향상)
while ( i-- ) {
	// ...
}
```


[`상위로 이동 ↑`](#javascript-%EC%BD%94%EB%94%A9-%ED%8C%A8%ED%84%B4)

-

#### `for ~ in` 반복문에서 `hasOwnProperty()` 사용

`for ~ in` 문은 배열/유사 배열이 아닌, 객체를 순환할 때 사용해야 한다. `for ~ in`문으로 객체의 속성을 탐색하는 것을 열거(Enumeration)라고 한다. `for ~ in`문은 `for`문보다 속도가 느리기 때문에 객체가 아닌 배열/유사 배열 탐색시 사용하는 것은 좋은 선택이 아니다. 뿐만 아니라 `for ~ in`문은 속성을 열거하는 순서가 정해져 있지 않아 순서대로 탐색해야 하는 상황에는 적절치 않은 선택이다.

그리고 객체의 속성을 탐색할 경우 반드시 hasOwnProperty() 메소드를 사용해야 한다. 그래야 프로토타입 체인을 따라 상속되는 상위 객체의 속성들을 필터링할 수 있다.

```js
var my_cat = {
	'name'   : 'Schiele',
	'age'    : 4,
	'gender' : 'female',
	'crying' : function() {}
};

// 내장 객체 Object 인스턴스 메소드 evolve 확장
if ( typeof Object.prototype.evolve === 'undefined' ) {
	Object.prototype.evolve = function() {};
}

// 안좋은 패턴: 상위 객체인 Object의 evolve 메소드가 출력된다.
for(var prop in my_cat) {
	var value = my_cat[prop];
	console.log(prop, value);
}

// name: Schiele
// age: 4
// gender: female
// crying: function() {}
// evolve: function() {}


// 좋은 패턴: 상위 객체인 Object의 evolve 메소드가 출력되지 않는다.
for(var prop in my_cat) {
	var value = my_cat[prop];
	if ( my_cat.hasOwnProperty(prop) ) {
	    console.log(prop, value);
	}
}

// name: Schiele
// age: 4
// gender: female
// crying: function() {}
```

`Object.prototype`에서 `hasOwnProperty()` 메소드를 빌려쓰는 것 또한 또 하나의 패턴이다. 이 패턴을 사용하면 `my_cat` 객체가 `hasOwnProperty` 속성을 재정의하여 덮어씌우더라도 문제가 발생하지 않는 장점이 있다.

```js
var my_cat = {
    	'name'   : 'Schiele',
    	'age'    : 4,
    	'gender' : 'female',
    	'crying' : function() {}
    },
    // Object.prototype.hasOwnProperty()를 hasOwn 변수에 참조
    hasOwn = Object.prototype.hasOwnProperty;

// 내장 객체 Object 인스턴스 메소드 evolve 확장
if ( typeof Object.prototype.evolve === 'undefined' ) {
	Object.prototype.evolve = function() {};
}

for(var prop in my_cat) {
	var value = my_cat[prop];
	// hasOwn 변수에 참조된 Object.prototype.hasOwnProperty() 메소드 빌려쓰기
	// 속성 탐색 과정에서 Object.prototype 체인까지 거슬러 올라가지 않음.
	if ( hasOwn.call(my_cat, prop) ) {
	    console.log(prop, value);
	}
}
```


[`상위로 이동 ↑`](#javascript-%EC%BD%94%EB%94%A9-%ED%8C%A8%ED%84%B4)

-

#### `eval()` 함수 사용 금지!

`eval()` 함수는 일련의 문자열을 받아 코드를 실행시킨다.
이는 보안 상에 문제를 야기하므로 사용하지 않는 것이 좋다.
누군가 악의적으로 전달한 문자열을 실행시킬 수도 있기 때문이다.

```js
var book = {
	'reading' : function() { console.log('reading'); },
	'buying'  : function() { console.log('buying'); },
	'selling' : function() { console.log('selling'); }
};


// 안 좋은 패턴: eval() 함수 사용
function assignBook(method) {
	if ( eval('book.' + method) ) {
		eval('book.' + method + '()');
	}
}
assignBook('selling');


// 좋은 패턴: 객체 대괄호 표기법
function assignBook(method) {
	if ( book[method] ) {
		book[method]();
	}
}

assignBook('selling');
```

뿐만 아니라 `setInterval()`, `setTimeout()` 역시
`eval()`과 마찬가지로 전달 받은 문자열을 코드로 실행시킬 수 있기에
사용에 주의가 요구된다.

```js
// 안 좋은 패턴: 첫번째 인자로 문자열(코드)을 전달한 경우
setInterval('book.selling()', 2200);

// 좋은 패턴: 객체의 속성(참조)을 전달한 경우
setInterval(book.selling, 2200);
```

[`상위로 이동 ↑`](#javascript-%EC%BD%94%EB%94%A9-%ED%8C%A8%ED%84%B4)

-

#### `parseInt()` 숫자 변환 시, 기수 설정

`parseInt()`를 사용하면 문자열(숫자 포함)에서 숫자만 얻을 수 있다. 이 함수의 두 번째 전달인자 기수를 생략하는 경우가 있는데 반드시 설정해줘야 한다.
해석할 문자열이 0으로 시작할 경우 문제가 발생할 소지가 있기 때문이다. (**IE 8- 에서는 0으로 시작하는 문자열을 8진수로 해석한다**)
그런 이유로 의도치 않은 오류에서 벗어나려면 기수를 생략해서는 안된다. (**ES v5를 지원하는 최신 버전의 웹 브라우저에서는 문제가 발생되지 않는다**)

```js
var birth = {
	month : '04',
	date  : '21'
};

var month = parseInt(birth.month),
	date  = parseInt(birth.date);

console.log('month: ' + month, 'date: ' + date);
```


[`상위로 이동 ↑`](#javascript-%EC%BD%94%EB%94%A9-%ED%8C%A8%ED%84%B4)

---

###### Front-End
## DOM + Javascript

### 진행

1. Javascript 문법 정리
1. Client 환경의 Javascript와 문서객체모델(DOM)
1. DOM + Javascript 실습
1. jQuery 문법 정리
1. jQuery를 활용한 UI 구현 실습

-

### 레퍼런스
- [[번역] 탁월한 프론트엔드 엔지니어가 되는 법](http://hyunseob.github.io/2016/02/21/how-to-become-a-great-frontend-engineer/)
- [Javascript: 세상에서 제일 잘못 이해되고 있는 언어 by Douglas Crokford](http://vandbt.tistory.com/36)
- [MDN 개발자를 위한 웹 기술: Javascript](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- [Eloquent Javascript](http://eloquentjavascript.net/)
- [JavaScript Garden](http://bonsaiden.github.io/JavaScript-Garden/ko/)