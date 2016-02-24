## Javascript

- [Javascript 생성자(Constructor)와 리터럴(Literal)](#javascript-%EC%83%9D%EC%84%B1%EC%9E%90constructor%EC%99%80-%EB%A6%AC%ED%84%B0%EB%9F%B4literal)
- [Javascript 함수](#javascript-%ED%95%A8%EC%88%98function)
- [Javascript 모듈 패턴(예제)](Module-Pattern.md)
- [Javascript 클래스 에뮬레이션 라이브러리](Class-library.md)
- [Node.js 서버 사이드 환경의 자동화 도구: GulpJS](gulpjs.md)
- [AMD 진영의 모듈 로더 RequireJS](requirejs.md)

-

### Javascript를 바로 알고 사용하기

JavaScript 언어의 핵심에 대한 내용을 모아 JavaScript Garden을 만들었다. 이 글이 초보자가 JavaScript 익히면서 자주 겪는 `실수`, `미묘한 버그`, `성능 이슈`, `나쁜 습관들`을 줄일 수 있도록 도와줄 것이다.

> JavaScript Garden은 단순히 JavaScript 언어 자체를 설명하려 만들지 않았다. 그래서 이 글에서 설명하는 주제들을 이해하려면 반드시 언어에 대한 기본 지식이 필요하다. 먼저 [Mozilla Developer Network에 있는 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript)로 JavaScript 언어를 공부하기 바란다.

[Javascript Garden](http://bonsaiden.github.io/JavaScript-Garden/)

---

### Javascript 생성자(Constructor)와 리터럴(Literal)

Javascript 리터럴을 사용하면 간단하게 객체를 생성할 수 있을 뿐만 아니라, 의도치 않는 오류 또한 줄여주는 효과를 볼 수 있다.
결과적으로 내장 생성자(Native Constructor Function)보다는 리터럴(Literal)을 사용하자.

- [객체 리터럴(Object Literal)](#%EA%B0%9D%EC%B2%B4-%EB%A6%AC%ED%84%B0%EB%9F%B4object-literal)
	- [객체 리터럴 문법](#%EA%B0%9D%EC%B2%B4-%EB%A6%AC%ED%84%B0%EB%9F%B4-%EB%AC%B8%EB%B2%95)
	- [내장 생성자 함수(Native Constructor Function)](#%EB%82%B4%EC%9E%A5-%EC%83%9D%EC%84%B1%EC%9E%90-%ED%95%A8%EC%88%98native-constructor-function)
	- [객체 생성자를 사용하면 안되는 이유](#%EA%B0%9D%EC%B2%B4-%EC%83%9D%EC%84%B1%EC%9E%90%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%A9%B4-%EC%95%88%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0)
	- [사용자 정의 생성자 함수(User Define Constructor Function)](#%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A0%95%EC%9D%98-%EC%83%9D%EC%84%B1%EC%9E%90-%ED%95%A8%EC%88%98user-define-constructor-function)
	- [`new`를 강제하는 패턴](#new%EB%A5%BC-%EA%B0%95%EC%A0%9C%ED%95%98%EB%8A%94-%ED%8C%A8%ED%84%B4)
	- [생성자 함수 이름 규칙](#%EC%83%9D%EC%84%B1%EC%9E%90-%ED%95%A8%EC%88%98-%EC%9D%B4%EB%A6%84-%EA%B7%9C%EC%B9%99)
	- [`that` 사용](#that-%EC%82%AC%EC%9A%A9)
	- [스스로 호출하는 생성자](#%EC%8A%A4%EC%8A%A4%EB%A1%9C-%ED%98%B8%EC%B6%9C%ED%95%98%EB%8A%94-%EC%83%9D%EC%84%B1%EC%9E%90)
- [배열 리터럴](#%EB%B0%B0%EC%97%B4-%EB%A6%AC%ED%84%B0%EB%9F%B4)
	- [배열 생성자의 문제점](#%EB%B0%B0%EC%97%B4-%EC%83%9D%EC%84%B1%EC%9E%90%EC%9D%98-%EB%AC%B8%EC%A0%9C%EC%A0%90)
	- [배열 데이터 유형을 정확히 판별하기 위한 방법](#%EB%B0%B0%EC%97%B4-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%9C%A0%ED%98%95%EC%9D%84-%EC%A0%95%ED%99%95%ED%9E%88-%ED%8C%90%EB%B3%84%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-%EB%B0%A9%EB%B2%95)
- [JSON (Javascript Object Notation)](#json-javascript-object-notation)
	- [JSON 메서드](#json-%EB%A9%94%EC%84%9C%EB%93%9C)
- [정규표현식(RegExp)](#%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9Dregexp)
- [오류(Error) 객체](#%EC%98%A4%EB%A5%98error-%EA%B0%9D%EC%B2%B4)
- [생성자 함수에 대응하는 리터럴 표현식 정리](#%EC%83%9D%EC%84%B1%EC%9E%90-%ED%95%A8%EC%88%98%EC%97%90-%EB%8C%80%EC%9D%91%ED%95%98%EB%8A%94-%EB%A6%AC%ED%84%B0%EB%9F%B4-%ED%91%9C%ED%98%84%EC%8B%9D-%EC%A0%95%EB%A6%AC)


---

#### 객체 리터럴(Object Literal)

Javascript에서 객체는 `이름: 값` 쌍으로 묶여진 해시 테이블과 유사하다. 다른 언어의 '연관 배열'가 비슷. 함수, 배열 뿐만 아니라 원시 데이터 유형(Number, String, Boolean) 또한 모두 객체이며 값(Literal)이 될 수 있다. 즉, 모든 객체는 값이 될 수 있다. (함수의 경우, 값이 되면 메서드(Method)라고 불린다)

아래 코드를 통해 Javascript에서 객체를 생성하는 것이 얼마나 쉬운지 확인할 수 있다. `mug_cup` 이름을 가진 빈 객체를 생성한 후, 속성을 정의(추가)한다.

```js
// 객체 리터럴 표현식을 사용하여 객체 생성
var mug_cup = {};

// 생성된 객체의 속성 정의
mug_cup.content = '커피';

// 속성 메서드(함수 값) 추가
mug_cup.drink = function() {
	return this.content + '를 마시다.';
};
```

프로그램이 실행 중인 런타임(run-time) 중에 객체에 새로운 속성을 추가하거나, 제거 또한 가능하다.

```js
// 속성 재정의
mug_cup.drink = function(amount) {
	return this.content + '를 ' + amount + '만큼 마시다.';
};

// 속성 추가
mug_cup.count = 1;
mug_cup.broken = false;

// 속성 제거
delete mug_cup.broken;
```

위에서 다룬 `mug_cup` 객체 생성에서 처럼 빈 객체에서 시작한 후 속성을 추가하는 방법 말고, 객체 리터럴 표현식을 활용하여 생성과 동시에 속성을 정의할 수도 있다.

```js
// 객체 생성, 속성 정의(추가)
var mug_cup = {
	'count'   : 1,
	'broken'  : false,
	'content' : '커피',
	'drink'   : function(amount) {
		return this.content + '를 ' + amount + '만큼 마시다.';
	}
};

// 객체 속성 제거
delete mug_cup.broken;
```

[`'생성자와 리터럴' 목차로 이동 ↑`](#javascript-%EC%83%9D%EC%84%B1%EC%9E%90constructor%EC%99%80-%EB%A6%AC%ED%84%B0%EB%9F%B4literal)

-

###### 객체 리터럴 문법

- 중괄호(`{}`)를 사용하여 객체를 생성한다.
- 속성과 값은 콜론(`:`)으로 구분하고, 각 속성은 콤마(`,`)로 구분한다.
- 객체 리터럴을 변수에 할당할 때는 닫는 중괄호(`}`) 뒤에 반드시 세미콜론(`;`)을 붙인다.

> 대부분의 웹 브라우저에서 아래와 같이 마지막 이름-값 쌍 뒤에 쉼표가 들어가도 오류가 발생하지 않지만, IE 웹 브라우저는 오류가 발생할 수 있음으로 주의해야 한다.

```js
var mug_cup = {
	'count'   : 1,
	'broken'  : false,
	'content' : '커피',
	'drink'   : function(amount) {
		return this.content + '를 ' + amount + '만큼 마시다.';
	}, // 마지막 속성 구문에 콤마가 있으면 IE는 오류를 발생한다.
};
```

[`'생성자와 리터럴' 목차로 이동 ↑`](#javascript-%EC%83%9D%EC%84%B1%EC%9E%90constructor%EC%99%80-%EB%A6%AC%ED%84%B0%EB%9F%B4literal)

-

##### 내장 생성자 함수(Native Constructor Function)

Javascript는 클래스(Class)가 없는 언어로 알려져 있지만, ECMAScript v6(ES 6)부터 클래스(Class)를 사용할 수 있게 된다. 아무튼 ES 6에서는 정식으로 클래스를 사용할 수 있겠지만, ES 5 이하 버전에서는 생성자 함수를 사용하여 JAVA의 Class 객체 생성 방법과 유사한 문법을 사용하여 객체를 생성할 수 있다.

생성자 함수는 Javascript에 내장(Built-In)된 것과 사용자가 직접 정의(User-Define)하는 것으로 구분된다. 앞서 우리가 만든 `mug_cup` 객체는 리터럴 표현식을 사용하여 사용자가 정의한 객체이다. 이를 내장 생성자 함수를 사용하여 정의하면 다음과 같다. (이 방법은 사용하지 않는 것이 좋다)

```js
var mug_cup = new Object();

mug_cup.content = '커피';
mug_cup.drink = function(amount) {
	return this.content + '를 ' + amount + '만큼 마시다.';
};
mug_cup.broken = false;
mug_cup['count'] = 1; // 대괄호([]) 표기법으로도 가능.
```

[`'생성자와 리터럴' 목차로 이동 ↑`](#javascript-%EC%83%9D%EC%84%B1%EC%9E%90constructor%EC%99%80-%EB%A6%AC%ED%84%B0%EB%9F%B4literal)

-

##### 객체 생성자를 사용하면 안되는 이유

`Object()` 생성자 함수는 인자(argument)를 받을 수 있는데 이를 해석하여 임의로 다른 내장 생성자에게 객체 생성을 위임할 수 있다. 즉, 의도치 않은 객체 생성이 될 수 있어 문제가 된다.

```js
// 객체 생성
var obj = new Object();
console.log( obj.constructor === Object ); // true

// 숫자 객체 생성
var obj = new Object(9);
console.log( obj.constructor === Object ); // false
console.log( obj.constructor === Number ); // true

// 문자 객체 생성
var obj = new Object('의도치 않은 객체 생성');
console.log( obj.constructor === Object ); // false
console.log( obj.constructor === String ); // true

// 불린 객체 생성
var obj = new Object(true);
console.log( obj.constructor === Object ); // false
console.log( obj.constructor === Boolean ); // true
```

`Object()` 생성자의 이 같은 동작 방식 때문에 예기치 않은 결과를 초래할 수 있어 사용을 하지 않는 것이 좋다. 즉, `new Object()`는 사용하지 않는 것이 좋다. 결론은 리터럴 표현식을 사용하라.

[`'생성자와 리터럴' 목차로 이동 ↑`](#javascript-%EC%83%9D%EC%84%B1%EC%9E%90constructor%EC%99%80-%EB%A6%AC%ED%84%B0%EB%9F%B4literal)

-

##### 사용자 정의 생성자 함수(User Define Constructor Function)

앞서 공부한 객체 리터럴 패턴이나 객체 내장 생성자 함수를 사용하지 않고, 사용자가 정의한 생성자 함수로 객체를 생성할 수도 있다. 이 방법은 JAVA에서 Class를 사용하여 객체를 생성하는 방법과 매우 유사하다. 하지만 이는 Class가 아닌, Javascript 함수일 뿐이다.

```js
var MugCup = function(content) {
	this.content = content;
	this.count   = 1;
	this.broken  = false;
	this.drink   = function(amount) {
		return this.content + '를 ' + amount + '만큼 마시다.';
	};
};
```

`new` 키워드와 함께 생성자 함수를 호출하면 다음과 같이 처리된다.

1. 빈 객체가 생성된다. 이 객체는 `this` 변수로 참조 가능하며, 해당 함수의 `Prototype`을 상속받는다.
1. `this`로 참조되는 객체에 속성(메서드 포함)이 추가된다.
1. 다른 객체를 명시적으로 반환(`return`)하지 않을 경우, `this`로 참조된 객체가 반환된다.

처리 과정을 코드로 재현하면 아래와 같다.

```js
var MugCup = function(content) {

	// 프로토타입 상속 및 this 참조 객체 생성
	// var F       = function() {};
	// F.prototype = MugCup.prototype;
	// var this    = new F();

	// this 참조 객체에 속성 추가
	this.content = content;
	this.count   = 1;
	this.broken  = false;
	this.drink   = function(amount) {
		return this.content + '를 ' + amount + '만큼 마시다.';
	};

	// 암묵적으로 this 참조 객체 반환
	// return this;
};
```

위 예에서 `drink()` 메서드의 경우, `new MugCup()`을 호출할 때 마다 메모리에 새로운 함수가 생성된다. `drink()`라는 메서드는 생성된 인스턴스 객체마다 달라지는 것이 아니므로 이와 같은 방식은 비효율적이다. 이 메서드는 `MugCup`의 `prototype`에 추가하는 것이 효과적이다.

```js
MugCup.prototype.drink = function(amount) {
	return this.content + '를 ' + amount + '만큼 마시다.';
};
```

[`'생성자와 리터럴' 목차로 이동 ↑`](#javascript-%EC%83%9D%EC%84%B1%EC%9E%90constructor%EC%99%80-%EB%A6%AC%ED%84%B0%EB%9F%B4literal)

-

##### `new`를 강제하는 패턴

생성자란? `new` 키워드와 함께 호출될 뿐 일반 함수에 불과하다. 하지만 `new`를 빼먹으면 문법 오류나 런타임 에러가 발생하지는 않지만, 논리적인 오류가 생겨 의도치 않은 결과가 발생할 수도 있다. 이유는 `new`를 빼먹고 생성자 함수를 호출할 경우 `this`가 전역(Global) 객체를 가리키기 때문이다. (웹 브라우저 환경에서 `this`는 `window` 객체를 가리킨다) 이는 전역을 오염시키는 행위가 되기 때문에 피해야 할 상황이다.

```js
// 생성자
function Coffee() {
	this.tastes = '부드러움';
}

var my_coffee    = new Coffee(),
	other_coffee = Coffee(); // new를 빼먹었다!

console.log( my_coffee.constructor === Coffee );    // true
console.log( other_coffee.constructor === Coffee ); // Undefined
console.log( window.tastes );                       // '부드러움'
```

[`'생성자와 리터럴' 목차로 이동 ↑`](#javascript-%EC%83%9D%EC%84%B1%EC%9E%90constructor%EC%99%80-%EB%A6%AC%ED%84%B0%EB%9F%B4literal)

-

##### 생성자 함수 이름 규칙

생성자 함수 이름의 첫 글자를 대문자로 작성하여 일반 함수 이름과 구별되도록 한다.

```js
// 생성자 함수 이름
function MemoryStack() { ... };

// 일반 함수 이름
function memoryStack() { ... };
```

[`'생성자와 리터럴' 목차로 이동 ↑`](#javascript-%EC%83%9D%EC%84%B1%EC%9E%90constructor%EC%99%80-%EB%A6%AC%ED%84%B0%EB%9F%B4literal)

-

##### `that` 사용

생성자 함수 이름 작성 규칙을 따르는 것도 도움이 되겠지만 이는 권고(Recommendation)일 뿐, 강제(Force)하지 못한다. 생성자 함수가 항상 생성자 함수로 동작되도록 해주는 패턴을 알아보자. `this`에 모든 멤버를 추가하는 대신, `that`에 모는 멤버를 추가한 후 `that`을 반환하는 것이다. 이 방법을 사용하면 `new`를 빼먹어도 전역 객체의 속성으로 오염시키는 불상사를 예방할 수 있다.

```js
function MemoryStack(memories) {
	var that = {};
	that.stacks = memories;
	return that;
}
```

간단한 객체일 경우, `that` 지역 변수 생성 과정을 거치지 않고 객체 리터럴을 통해 객체를 반환해도 된다.

```js
function MemoryStack(memories) {
	return {
		stacks : memories;
	};
}
```

`that`을 사용하거나 객체 리터럴을 반환하는 패턴 모두 `new`를 빼먹어도 문제가 발생하지 않지만, 문제는 생성자의 `prototype` 링크(연결고리)를 잃어버리게 된다. 즉, 생성자의 프로토타입 속성을 사용할 수 없게 된다.

[`'생성자와 리터럴' 목차로 이동 ↑`](#javascript-%EC%83%9D%EC%84%B1%EC%9E%90constructor%EC%99%80-%EB%A6%AC%ED%84%B0%EB%9F%B4literal)

-

##### 스스로 호출하는 생성자

앞서 다룬 패턴의 문제점을 해결하기 위한 방법으로 생성자 함수 내부에서 `this` 객체가 해당 생성자의 인스턴스 객체임을 확인한 후, 그렇지 않을 경우 `new`와 함께 스스로 다시 호출하는 방법을 사용한다.

```js
function MemoryStack(memories) {
	if ( this.constructor !== MemoryStack ) {
		return new MemoryStack(memories);
	}
	this.stacks = memories;
}

MemoryStack.prototype.addMemory = function() {};
```

이 방법을 사용하면 `new`를 빼먹어도 문제가 발생하지 않고, `prototype` 객체 링크 또한 문제없이 처리된다.

[`'생성자와 리터럴' 목차로 이동 ↑`](#javascript-%EC%83%9D%EC%84%B1%EC%9E%90constructor%EC%99%80-%EB%A6%AC%ED%84%B0%EB%9F%B4literal)

---

#### 배열 리터럴

배열이란? 결국 인덱스 0으로 시작하는 값의 집합이다. `new`와 함께 사용해야 하는 생성자보다는 간단하고 직관적이며 우아한 리터럴 문법을 사용하는 것이 좋다.

```js
// 안티 패턴: 배열 생성자 사용
var avengers = new Array('캡틴 아메리카', '아이언맨', '헐크', '토르');

// 굿 패턴: 배열 리터럴 사용
var avengers = ['캡틴 아메리카', '아이언맨', '헐크', '토르'];

console.log( typeof avengers );      // 'object' ※ typeof의 사용 시, 주의점.
console.log( avengers.constructor ); // Array
```

-

##### 배열 생성자의 문제점

`new Array()`를 사용하지 말아야 할 또 다른 이유로 `Array()` 생성자에 숫자 하나를 전달할 경우, 의도치 않게 동작하기 때문이다. 기대한 결과는 전달한 숫자가 배열의 첫 번째 원소 값이 되어야 하지만, 실제 처리 결과는 배열의 개수(`length`)를 지정한다. 즉, `new Array(2)`는 `[2]`로 처리되는 것이 아니라, `[undefined, undefined]`로 처리된다.

```js
var avengers = new Array(4);
console.log( avengers.length ); // 4
console.log( avengers[0] );     // undefined

var avengers = [4];
console.log( avengers.length ); // 1
console.log( avengers[0] );     // 4
```

뿐만 아니라 `new Array()`에 정수가 아닌 부동소수점을 전달할 경우 배열이 생성되지 않고, RangeError가 발생한다.

```js
var pi = [3.14];
console.log( pi ); // 3.14

var pi = new Array(3.14);
console.log( pi );              // 배열 개수(length)로 유효하지 않은 값이기에 RangeError 발생
console.log( typeof avengers ); // 'undefined'
```

정리하면 배열 리터럴을 사용하는 것이 배열 생성자를 사용하는 것보다 간단하며 안전하다.

[`'생성자와 리터럴' 목차로 이동 ↑`](#javascript-%EC%83%9D%EC%84%B1%EC%9E%90constructor%EC%99%80-%EB%A6%AC%ED%84%B0%EB%9F%B4literal)

-

##### 배열 데이터 유형을 정확히 판별하기 위한 방법

Javascript 데이터 유형을 체크할 때 자주 사용하는 `typeof`는 배열의 경우 제대로 유형을 파악할 수 없다. (`'array'`가 아닌, `'object'`를 반환) 물론 배열도 객체이니 완전히 틀린 것은 아니지만 객체(Object)와 구분되지 않아 그다지 도움이 되지 않는다. 그렇다면 배열 데이터 형을 올바르게 체크해야 할 경우 어떤 방법을 사용해야 하나? `instanceof`를 사용하는 것도 방법이 될 수 있지만 일부 IE에서는 프레임간 사용시 올바르게 동작하지 않는 문제가 있다. 이 문제는 ES 5에서 해결된다. 새롭게 추가된 `Array.isArray()`를 사용하여 정확하게 배열 유형인지 파악할 수 있다.

```js
Array.isArray([]); // true
Array.isArray({}); // false
```

실행 환경에서 ES 5를 지원하지 않는 경우라면 이를 직접 정의하면 된다. (Array 생성자 객체에 isArray() 메서드 추가)

```js
if ( !Array.isArray ) {
	Array.isArray = function(data) {
		// 전달된 데이터 값의 생성자가 Array인지를 비교하여 결과를 반환
		return data.constructor === Array;
	}
}
```

위 방법은 객체를 전달할 경우 문제 없이 `true`, `false`를 반환하지만 객체가 아닌 `null`, `undefined`를 전달하면 오류(TypeError)를 발생시킨다. 이 문제까지 해결하는 완벽한 방법은 `Object.prototype.toString()`을 빌려서 데이터 유형을 체크하는 방법을 사용한다. 아래 코드를 보자.

```js
if ( !Array.isArray ) {
	Array.isArray = function(data) {
		// Object.prototype.toString() 메서드를 빌려 data 사용하면 데이터 유형을 체크할 수 있다.
		return Object.prototype.toString.call(data) === '[object Array]';
	}
}
```

[`'생성자와 리터럴' 목차로 이동 ↑`](#javascript-%EC%83%9D%EC%84%B1%EC%9E%90constructor%EC%99%80-%EB%A6%AC%ED%84%B0%EB%9F%B4literal)

---

#### JSON (Javascript Object Notation)

JSON이란? 자바스크립트 객체 표기법의 준말이며 데이터 전송 형식의 일종으로 자바스크립트를 비롯한 다양한 언어에서 가볍고 편리하게 사용가능하다. JSON은 새로울 것은 없고, 배열과 객체 레터럴 표기법의 조합일 뿐이다. 다만 속성 이름을 쌍 따옴표로 감싸야 한다는 점이 일반 배열, 객체 리터럴과의 차이점이다. 그리고 함수, 정규 표현식등은 사용할 수 없다.

```js
[
	{
		"name": "헐크",
		"unit": "어벤져스"
	},
	{
		"name": "아이언맨",
		"unit": "어벤져스"
	}
]
```

##### JSON 메서드

`eval()`을 사용하여 JSON 문자열을 처리하는 것은 보안상 문제가 있으므로 사용하지 않아야 한다. JSON 문자열을 해석하려면 `JSON.parse()`를 사용해야 한다. 이 메서드는 ES 5부터 포함되지만, 대다수 최신 브라우저는 이를 내장하고 있어 사용에 큰 문제가 없다. 다만 구형 웹 브라우저는 이를 지원하고 있지 않아 라이브러리([http://json.org/json2.js](http://json.org/json2.js))를 호출하여 사용해야 한다.

```js
var json_str = '{"name":"헐크","unit":"어벤져스"}', data;

// 안티 패턴: eval() 함수 사용
data = eval( '(' + json_str + ')' );

// 굿 패턴: JSON.parse() 메서드 사용
data = JSON.parse( json_str );
```

이미 사용 중인 자바스크립트 라이브러리가 있다면 `JSON.parse()` 메서드를 내장했을 가능성이 크다. 예를 들어 jQuery 라이브러리를 사용하고 있다면 `jQuery.parseJSON()` 메서드를 사용할 수 있다.

```js
var json_str = '{"name":"헐크","unit":"어벤져스"}',
	data     = jQuery.parseJSON( json_str );

console.log( data.unit ); // '어벤져스'
```

`JSON.parse()`가 처리하는 일의 반대 역할은 `JSON.stringify()`를 사용한다. 이 메서드는 객체, 배열 데이터를 전달 받아 JSON 문자열로 변경(직렬화)한다.

```js
var avengers = [
	{
		'name': '헐크',
		'unit': '어벤져스'
	},
	{
		'name': '아이언맨',
		'unit': '어벤져스'
	}
];

JSON.stringify( avengers ); // '[{"name":"헐크","unit":"어벤져스"},{"name":"아이언맨","unit":"어벤져스"}]'
```

[`'생성자와 리터럴' 목차로 이동 ↑`](#javascript-%EC%83%9D%EC%84%B1%EC%9E%90constructor%EC%99%80-%EB%A6%AC%ED%84%B0%EB%9F%B4literal)

---

#### 정규표현식(RegExp)

Javascript에서는 정규 표현식(Regular Expression) 역시 객체이다. 생성 방법은 생성자를 사용하는 방법과 리터럴을 사용하는 방식이 있다. 물론 리터럴을 사용하는 방법을 쓰는 것이 권장된다.

- new RegExp() 생성자 함수를 사용한다.
- 정규 표현식 리터럴 패턴을 사용한다.

```js
// 정규표현식 생성자 함수 사용
var reg = new RegExp('\\\\', 'igm');

// 정규표현식 리터럴 사용
var reg = /\\/igm;
```

일견하기에도 정규표현식 리터럴이 생성자 함수 사용방법보다 짧고, 쓰기 편하다. 뿐만 아니라 생성자 함수를 사용하면 따옴표(')나 역슬래시(/) 등을 이스케이프(Escape) 처리해야 한다. 즉, 역슬래시 하나를 매치시키기 위해 네 개의 역슬래시가 필요하게 되니 얼마나 코드가 복잡해지는지 알 수 있다. 해석하기도 어려울 뿐더러 수정하기 또한 불편하다. 정규표현식은 그 자체로도 어렵기 때문에 이를 조금이라도 간단하게 만드는게 중요하다. 고로 정규표현식 리터럴을 사용하는 것이 좋다. 단, 매칭시킬 패턴을 미리 알 수 없고 런타임 중에 문자열로 만들어지는 경우에는 `new RegExp()`를 사용해야 한다. 아래 `hasClass()` 예제를 살펴보자.

```js
function hasClass(element, class_name) {
	var el_class = element.getAttribute('class'),
		// 정규표현식 해석: \s는 '공백 문자', ^는 '시작', $는 '끝'
		// http://www.w3schools.com/jsref/jsref_obj_regexp.asp
		filter   = new RegExp( '(^|\\s)' + class_name + '(\\s|$)');

	return !!el_class.match( filter );
}
```

[`'생성자와 리터럴' 목차로 이동 ↑`](#javascript-%EC%83%9D%EC%84%B1%EC%9E%90constructor%EC%99%80-%EB%A6%AC%ED%84%B0%EB%9F%B4literal)

---

#### 오류(Error) 객체

Javascript에는 `Error()`, `SyntaxError()`, `TypeError()` 등 다양한 오류 생성자가 내장되어 있으며 `throw`문과 함께 사용된다. 이 생성자들로 생성된 오류 객체는 다음과 같은 속성을 가진다.

- `name`: 객체를 생성한 생성자 함수의 name 속성
- `message`: 객체를 생성할 때 새엇ㅇ자에 전달된 문자열

사실 `throw` 문은 어떤 객체와도 함께 사용이 가능하다. 즉, 반드시 오류 생성자를 통해 객체를 생성해야 하는 것은 아니다. 직접 정의한 객체 또한 `throw`와 함께 사용 가능한 것이다. 아래 예제를 살펴보면 생성자 함수가 아닌 직접 생성한 객체를 사용하여 창의적으로 문제 발생을 확인 후, 정상 상태로 복구하기 위한 해결책(Solution)을 활용하는 것을 볼 수 있다.

```js
try {
	// 오류 발생
	throw {
		'name'    : 'My Error Type',
		'message' : '오류 발생!!',
		'solution': function() {} // 오류를 처리할 함수 정의
	}
} catch(error) {
	// 오류 발생 메시지를 콘솔(Console)에 출력
	console.error( error.message );
	// 오류 발생 시, 처리해야 할 함수 실행
	error.solution();
}
```

[`'생성자와 리터럴' 목차로 이동 ↑`](#javascript-%EC%83%9D%EC%84%B1%EC%9E%90constructor%EC%99%80-%EB%A6%AC%ED%84%B0%EB%9F%B4literal)

---

#### 생성자 함수에 대응하는 리터럴 표현식 정리

일반적으로 `Math()`, `Date()` 생성자를 제외하면 내장 생성자를 쓸 일이 거의 없다. 다음 표는 내장 생성자에 대응하는 리터럴 패턴을 정리한 것이다.

| 내장 생성자(사용 자제) | 리터럴(사용 권장) |
| --- | --- |
| var num = new Number(9); | var num = 9; |
| var str = new String(''); | var str = ''; |
| var boo = new Boolean(true); | var boo = true; |
| var fnc = new Function(); | var fnc = function(){}; |
| var arr = new Array(); | var arr = []; |
| var obj = new Object(); | var obj = {}; |
| var reg = new RegExp('[a-z]', 'g'); | var reg = /[a-z]/g; |
| throw new Error('Oops'); | throw = { 'name': 'Error', 'message': 'Oopes' } |

[`'생성자와 리터럴' 목차로 이동 ↑`](#javascript-%EC%83%9D%EC%84%B1%EC%9E%90constructor%EC%99%80-%EB%A6%AC%ED%84%B0%EB%9F%B4literal)

---

### Javascript 함수(Function)

함수를 완벽하게 익히는 것은 자바스크립트 사용자에게 필수이다. 자바스크립트 함수는 특이한 2가지 특징을 가진다.
하나는 일급(First-Class) 객체이며, 다른 하나는 유효범위(Scope)를 제공한다는 점이다.

- [Javascript 함수의 특징](#javascript-%ED%95%A8%EC%88%98%EC%9D%98-%ED%8A%B9%EC%A7%95)
- [함수의 유형](#%ED%95%A8%EC%88%98%EC%9D%98-%EC%9C%A0%ED%98%95)
- [선언문 vs 표현식](#%EC%84%A0%EC%96%B8%EB%AC%B8-vs-%ED%91%9C%ED%98%84%EC%8B%9D)
- [함수 호이스팅](#%ED%95%A8%EC%88%98-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85)
- [콜백 패턴](#%EC%BD%9C%EB%B0%B1-%ED%8C%A8%ED%84%B4)
- [시간 제어](#%EC%8B%9C%EA%B0%84-%EC%A0%9C%EC%96%B4)
- [라이브러리 콜백 패턴](#%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%BD%9C%EB%B0%B1-%ED%8C%A8%ED%84%B4)
- [함수를 반환하는 함수](#%ED%95%A8%EC%88%98%EB%A5%BC-%EB%B0%98%ED%99%98%ED%95%98%EB%8A%94-%ED%95%A8%EC%88%98)
- [게으른 함수 정의 패턴 (Lazy Function Definition)](#%EA%B2%8C%EC%9C%BC%EB%A5%B8-%ED%95%A8%EC%88%98-%EC%A0%95%EC%9D%98-%ED%8C%A8%ED%84%B4-lazy-function-definition)
- [즉시 실행 함수](#%EC%A6%89%EC%8B%9C-%EC%8B%A4%ED%96%89-%ED%95%A8%EC%88%98)
- [즉시 실행 함수 전달인자](#%EC%A6%89%EC%8B%9C-%EC%8B%A4%ED%96%89-%ED%95%A8%EC%88%98%EC%9D%98-%EC%A0%84%EB%8B%AC%EC%9D%B8%EC%9E%90)
- [즉시 객체 초기화](#%EC%A6%89%EC%8B%9C-%EA%B0%9D%EC%B2%B4-%EC%B4%88%EA%B8%B0%ED%99%94)
- [초기화 시점의 코드 분기](#%EC%B4%88%EA%B8%B0%ED%99%94-%EC%8B%9C%EC%A0%90%EC%9D%98-%EC%BD%94%EB%93%9C-%EB%B6%84%EA%B8%B0)
- [함수 객체의 속성 - 메모이제이션(Memoization) 패턴](#%ED%95%A8%EC%88%98-%EA%B0%9D%EC%B2%B4%EC%9D%98-%EC%86%8D%EC%84%B1---%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98memoization-%ED%8C%A8%ED%84%B4)
- [설정 객체 패턴](#%EC%84%A4%EC%A0%95-%EA%B0%9D%EC%B2%B4-%ED%8C%A8%ED%84%B4)

---

#### Javascript 함수의 특징

- 프로그램이 실행되는 동안 동적으로 생성 가능하다.
- 변수에 할당할 수 있고, 다른 변수에 참조를 복사할 수 있으며, 확장 가능하다.
- 몇몇 특별한 경우를 제외하면 삭제도 가능하다.

Javascript에서 중괄호(`{}`) 블록 코드는 지역 유효범위를 가지지 않지만, 함수는 다르다. 유효범위를 가진다.
어떤 변수이든 함수 내에서 `var`를 사용하여 정의하면 지역 변수가 되고, 함수 밖에서는 이를 참조할 수 없다. 바꿔 말하면
감싸는 함수가 없을 경우 전역 변수 선언이 된다는 것이다. 전역 변수를 최소화하는 것이 좋기 때문에 함수는 Javascript에서
꼭 필요한 존재이다.

[`'Javascript 함수' 목차로 이동 ↑`](#javascript-%ED%95%A8%EC%88%98function)

##### 함수의 유형

- 함수 선언식 (Function Declation)
- 함수 표현식 (Function Expression)
	- 이름이 없는 함수 (익명 함수, Anonymous Function)
	- 이름이 있는 함수 (기명 함수, Named Function)

```js
// 기명 함수 표현식
// 기명 함수의 경우, 함수가 참조된 변수의 속성으로 `name` 값을 가진다.
// 이는 함수 내부에서 자신을 재귀적으로 호출할 경우 사용된다. (재귀 함수)
// 이와 같은 경우가 아니라면 기명 함수 표현식을 굳이 사용하지 않는다.
// ※ 이 방법은 IE에서 제대로 구현되지 않아 사용하지 않는 것이 좋다.
var removeItem = function _removeItem(item) { ... };

// 익명 함수 표현식
var removeItem = function(item) { ... };
```

[`'Javascript 함수' 목차로 이동 ↑`](#javascript-%ED%95%A8%EC%88%98function)

##### 선언문 vs 표현식

함수 표현식은 아래처럼 콜백 패턴에 사용할 때, 객체의 메소드 값으로 할당할 때 주로 사용된다.

```js
// 함수 showMe()의 전달인자로 익명 함수를 전달한다.
showMe(function() {

});

// 함수 showMe()의 전달인자로 기명 함수를 전달한다.
showMe(function me() {

});

// 객체 obj의 메서드(Method)로 익명 함수 값을 설정한다.
var obj = {
	method: function() {}
};
```

반면 함수 선언문은 전역 유효범위나 다른 함수 내부에 사용한다.

```js
function wrapper() {
	function localWrapper() {
		function inner() {}
		return inner;
	}
	return localWrapper;
}
```

함수 선언문보다 함수 표현식을 보다 선호하는 이유는 함수 표현식을 사용하면
함수 또한 다른 객체와 마찬가지로 객체의 일종임을 명확히 보여주기 때문이다.

[`'Javascript 함수' 목차로 이동 ↑`](#javascript-%ED%95%A8%EC%88%98function)

##### 함수 호이스팅

모든 변수(`var`)는 해당 영역(Scope)의 맨 윗부분으로 끌어올려(Hoist)진다.
함수 또한 변수에 할당되는 객체이기 때문에 동일한 방식으로 처리된다. 함수 선언문을 사용하면
함수 자체가 호이스팅되기 때문에 오류가 발생할 가능성이 농후하다.

```js
// 전역 함수
function foo() {
	console.log('glbal foo');
}

function bar() {
	console.log('global bar');
}

function hoistMe() {

	console.log(typeof foo); // 'function'
	console.log(typeof bar); // undefined

	foo(); // 'local foo'
	bar(); // TypeError: bar는 함수가 아니다.

	// 함수 영역 내 함수 선언문
	function foo() {
		console.log('local foo');
	}

	// 함수 영역 내, 함수 표현식
	var bar = function() {
		console.log('local bar');
	};

}

hoistMe();
```

[`'Javascript 함수' 목차로 이동 ↑`](#javascript-%ED%95%A8%EC%88%98function)

#### 콜백 패턴

**Javascript 함수는 객체로, 다른 함수의 전달인자로 전달할 수 있다.**
`me()` 함수를 `you()` 함수에 전달하면 특정 시점에 `너:you()`는 `나:me()`를 부를(호출) 것이다.
이 때 `me()`를 **콜백 함수** 또는 **콜백**이라고 부른다.

```js
function me() {}

function you(callback) {
	// 특정 작업 수행
	if (typeof callback === 'function') {
		callback();
	}
}

you( me );
```

함수에 괄호(`()`)를 붙이면 실행되기 때문에 함수의 참조만 전달하여
실행은 추후 진행되도록 만든 점을 위 코드에서 눈여겨 볼 필요가 있다.

예제를 살펴보면서 콜백 패턴을 공부해보자. 처음에는 콜백 없이 시작해서 리팩토링을 통해 콜백을 사용해볼 것이다.
복잡한 작업을 수행한 후 그 결과로 대용량 데이터 셋을 반환하는 범용 함수가 있다고 치자. 이 함수는 `findNodes()`와
같은 유형으로 호출되며, DOM 트리를 탐색해 필요한 요소 노드리스트(유사 배열)를 반환한다.

```js
var findNodes = function() {
	var i     = 100000, // 긴 반복 시뮬레이션
		nodes = [],     // 결과를 저장할 배열 값
		found;			// 노드 탐색 결과

	while(i) {
		i -= 1;
		// 이 부분에 복잡한 로직이 존재
		nodes.push(found);
	}
	return nodes;
}
```

위 함수는 범용으로 사용할 수 있도록 실제 요소에는 어떤 작업도 하지 않고 DOM 노드리스트를 반환하도록 유지하는 것이 좋다.
노드를 수정하는 로직은 다른 함수에 두자. 예를 들어 `showElement()` 함수를 만들자. 이 함수는 요소를 화면에 보이도록 만든다.

```js
var showElement = function(nodes) {
	var i = 0,
		max = nodes.length;
	for (; i<max; i+=1) {
		nodes[i].style.dispaly = 'block';
	}
};
// 함수 실행
show( findNodes() );
```

위 방법은 `findNodes()`에서 반환된 노드리스트를 다시 `hide()` 함수에서 다시 루프를 돌려야 하기 때문에 비효율적이다.
`findNodes()` 함수에서 요소를 반복하여 탐색할 때마다 화면에서 보여지게 하는 것이 보다 효율적이다. 하지만 `findNodes()` 내부에서
요소를 보이는 로직을 구현하면 탐색/수정 로직의 결합으로 범용 함수의 의미가 퇴색된다. 이럴 경우 콜백 패턴을 사용하면 효과적으로
로직을 분리하여 수행할 수 있다.

```js
var findNodes = function(callback) {
	var i     = 100000, // 긴 반복 시뮬레이션
		nodes = [],     // 결과를 저장할 배열 값
		found;			// 노드 탐색 결과

	// 전달인자 유형이 함수가 아닐 경우, false를 대입한다.
	if (typeof callback !== 'function') {
		callback = false;
	}

	while(i) {
		i -= 1;
		// 이 부분에 복잡한 로직이 존재

		// 콜백을 실행한다.
		if (callback) {
			callback(found);
		}
		nodes.push(found);
	}
	return nodes;
}
```

위와 같은 방법은 매우 직관적이다. `findNodes()` 함수가 실행될 때 전달된 콜백 함수가 있는지 확인한 후,
있다면 콜백이 실행된다. 콜백은 생략 가능하기 때문에 리팩토링된 `findNodes()`는 전과 같이 사용 가능하다.
기존 API를 망가뜨리지 않고 필요에 따라 원하는 코드를 수행할 수 있다.

```js
// 요소리스트를 순회할 필요가 없어진 관계로 코드가 간결해졌다.
var show = function(node) {
	node.style.display = 'block';
};
// 요소를 찾아서 바로 화면에서 보여지도록 한다.
findNodes( show );
```

위 예제처럼 이미 존재하는 함수를 콜백 함수로 쓸 수 있을 뿐만 아니라, `findNodes()` 함수 수행 시에
익명함수를 전달인자로 전달할 수도 있다.  아래 예제를 살펴보자.

```js
// 익명함수를 콜백으로 전달한다.
findNodes( function(node) {
	node.style.display = 'none';
} );
```

위 예제만으로도 훌륭하지만, 콜백이 반드시 1회성 익명 함수나 전역 함수일거란 보장은 없다.
객체의 메서드를 전달 받을 경우도 있는 것이다. 이럴 경우 함수 내부의 `this`는 예상한 것과 달리
동작하게 되는 문제를 직면하게 된다. 이어지는 예제를 살펴보자. `findNodes()` 함수에
`drawApp.paint()` 메서드를 전달해서 빌려 쓸 생각이다.

```js
var drawApp = {
	'color': 'lightblue',
	'paint': function(node) {
		node.style.color = this.color;
	}
};

var findNodes = function( callback ) {
	// ...
	if ( typeof callback !== 'function' ) {
		callback = false;
	}
	// ...
	if ( callback ) {
		callback(found);
	}
};

// findNodes() 함수에 drawApp.paint() 함수를 callback으로 전달한다.
findNodes( drawApp.paint );
```

위 코드의 결과는 기대하던 것과 다른 결과를 보여준다. 예상한 바는 각 요소를 찾아
글자 색상을 변경하는 것인데 이는 처리되지 않는다. 이유는 `findNodes()` 함수가
전역에서 실행되었기 때문에 drawApp.paint() 함수 내부의 `this`는 전역 객체인
`window`를 가리킨다. 이 문제를 해결하려면 콜백 함수와 함께 콜백의
컨텍스트(Context)를 전달해줘야 한다. 아래 코드를 보자.

```js
findNodes( drawApp.paint, drawApp );

var findNodes = function( callback, context ) {
	// ...
	if ( typeof callback !== 'function' ) {
		callback = false;
	}
	// ...
	if ( callback ) {
		// 전달받은 callback의 context를 지정
		// Function.prototype.call 활용
		callback.call( context, found );
	}
};
```

콜백으로 사용될 메서드와, 콘텍스트를 전달할 때, 메서드를 문자열로 전달하도록 설정할 수도 있다.
이렇게 하면 콘텍스트 객체의 이름을 2번 중복해서 사용하지 않아도 된다. 아래 예제를 보자.

```js
findNodes( 'paint', drawApp );

var findNodes = function( callback, context ) {
	// ...
	if ( typeof callback === 'string' && context ) {
		callback = context[callback];
	}
	if ( typeof callback !== 'function' ) {
		callback = false;
	}
	// ...
	if ( callback ) {
		// 전달받은 callback의 context를 지정
		// Function.prototype.call 활용
		callback.call( context, found );
	}
};
```

사실 콜백 패턴은 이미 Javascript 코드 속에 녹아 들어있다. 예를 들어 문서의 요소에 이벤트 리스너를 연결하는 것도
실제로는 이벤트가 발생했을 때 호출될 콜백 함수의 포인터를 전달하는 것이다.

```js
var app     = document.querySelector('#app'),
	handler = function() {};

// handler 함수는 사용자가 app 요소를 클릭할 때 콜백된다.
app.addEventListener('click', handler, false);
```

대부분의 클라이언트 프로그래밍은 이벤트 구동(Event Driven) 방식으로 작동한다.
Javascript가 이벤트 구동형 프로그래밍에 특히 적합한 이유는 프로그램이 비동기적으로
(특정 시점에) 동작할 수 있게 하는 콜백 패턴 덕분이다.

[`'Javascript 함수' 목차로 이동 ↑`](#javascript-%ED%95%A8%EC%88%98function)

#### 시간 제어

또 다른 콜백 패턴 예제는 웹 브라우저가 내장하고 있는
시간을 제어하는 함수인 `setInterval()`, `setTimeout()`이다.

```js
var callback = function() {};

// 0.24초 뒤에 callback이 실행된다.
setTimeout( callback, 240 );
```

함수 포인터 대신 문자열 `'callback()'`을 전달할 수도 있으나
이는 매우 안 좋은 방법이니 사용하지 앟는 것이 좋다.

```js
var callback = function() {};

// 안티패턴: 문자열을 전달하여 처리하는 과정이 eval()과 같다.
setTimeout( 'callback()', 240 );
```

[`'Javascript 함수' 목차로 이동 ↑`](#javascript-%ED%95%A8%EC%88%98function)

#### 라이브러리 콜백 패턴

Javascript 라이브러리를 설계할 때, 콜백 패턴은 간단하고 강력한 패턴이라 자주 사용된다.
스프트웨어 라이브러리에 들어갈 코드는 가능한 범용적이고 재사용할 수 있어야 한다. 콜백은 이런 일반화에 도움이 된다.
생각할 수 있는 모든 기능을 예측하고 구현할 필요는 없는 것이다. 이는 라이브러리를 쓸데 없이 부풀릴 뿐,
대부분 사용자는 그런 커다란 기능들의 덩어리를 절대 필요로 하지 않는다. 대신 핵심 기능에 집중하고 콜백 형태로
'연결고리(hook)'를 제공하는데 노력해야 한다. 콜백 함수를 활용하면 라이브러리 메서드를 쉽게 만들고 확장할 수 있다.

```js
// jQuery 라이브러리에서의 콜백 패턴
// 콜백 함수를 익명함수로 전달하여 사용자가 #app을 클릭할 때 처리되도록 한다.
jQuery('#app').on('click', function() {});
```

[`'Javascript 함수' 목차로 이동 ↑`](#javascript-%ED%95%A8%EC%88%98function)

##### 함수를 반환하는 함수

함수는 객체이기 때문에 함수의 반환 값이 될 수 있다. 즉 함수의 전달인자, 반환 값이 함수가 될 수 있다.
(이렇게 반환된 함수를 클로저 함수라 부른다)

```js
var setup = function() {
	// setup() 함수 내부에 선언된 지역 변수(외부에서 접근할 수 없다)
	var _local_var = '지역 변수';
	return function() {
		// 하지만, 반환된 함수에서는 setup() 함수 실행이 완료된 뒤에도 지역 변수를 읽을 수 있다.
		retrun _local_var + '를 읽을 수 있다. 외부에서도..';
	};
};

var test = setup(); // setup() 함수 내부 return 값인 function() {}이 반환된다.
test(); // '지역 변수를 읽을 수 있다. 외부에서도..'
```

`setup()` 함수가 실행되면 함수를 반환하면서 클로저를 생성한다. 클로저는 반환되는 함수에서만
접근할 수 있기 때문에 비공개 데이터 저장 시 자주 사용된다. 클로저를 사용한 예를 보자.

```js
var counter = function(num) {
	var _count = num;
	return function() {
		return _count -= 1;
	};
};

var countdown10 = counter(10);

countdown10(); // 9
countdown10(); // 8
countdown10(); // 7
```

[`'Javascript 함수' 목차로 이동 ↑`](#javascript-%ED%95%A8%EC%88%98function)

##### 게으른 함수 정의 패턴 (Lazy Function Definition)

함수는 동적으로 정의될 수 있고 변수에 할당할 수도 있다. 변수는 하나의 데이터만 담을 수 있기 때문에
이미 변수에 담긴 함수가 있을 경우 새로 담긴 함수에 의해 기존 함수는 메모리에서 제거된다. 말하고 싶은 바는
이전 함수 포인터(변수)에 새로운 함수 포인터를 가리키도록 재사용한다는 것이다.

```js
var eatFood = function() {
	// ...
	console.log('최초 실행 시 처리');
	// 함수 재정의
	eatFood = function() {
		// ...
		console.log('최초 실행 후, 다시 정의됨.');
	};
};

eatFood(); // '최초 실행 시 처리'
eatFood(); // '최초 실행 후, 다시 정의됨.'
```

이 패턴은 함수가 어떤 초기화 준비 작업을 단 한 번만 수행할 경우 사용하면 좋다.
불필요한 작업을 반복할 이유는 없으니까. 1회 수행 시에만 수행하고, 이후부터는
수행하지 않도록 설정하는 것이다. 이는 함수의 작업량이 줄어들기 때문에 이 패턴은
애플리케이션 성능 향상에 도움을 준다.

이러한 패턴의 단점은 다시 정의된 이후에는 이전 원본 코드를 잃어버리게 된다는 점이다.
또 다른 문제는 함수가 다른 이름으로 사용될 경우 재정의가 일어나지 않는다는 점이다.

```js
var eatFood = function() {
	// ...
	console.log('최초 실행 시 처리');
	// 함수 재정의
	eatFood = function() {
		// ...
		console.log('최초 실행 후, 다시 정의됨.');
	};
};

var drinkFood = eatFood;

drinkFood(); // '최초 실행 시 처리'
drinkFood(); // '최초 실행 시 처리'

eatFood(); // '최초 실행 시 처리'
eatFood(); // '최초 실행 후, 다시 정의됨.'
```

[`'Javascript 함수' 목차로 이동 ↑`](#javascript-%ED%95%A8%EC%88%98function)

#### 즉시 실행 함수

즉시 실행 함수 패턴은 함수가 선언되지마자 실행되도록 한다.
이 패턴은 함수 표현식을 생성하자마자 즉시 실행시킨다.

```js
(function(){
	console.log( 'IIFE' );
}());
```

- 함수를 함수 표현식으로 선언한다. (함수 선언문은 정상 동작하지 않는다.)
- 함수가 즉시 실행될 수 있도록 마지막에 괄호(`()`)를 추가한다.
- 전체 함수 구문을 괄호(`()`)로 감싼다.

이 패턴은 초기화 코드에 유효범위 샌드박스(Sandbox)를 제공한다는 점에서 유용하다.
즉시 실행 함수는 모든 코드를 지역 유효범위로 감싸고 어떤 변수도 전역 유효범위로 새어나가지 않게 한다.

[`'Javascript 함수' 목차로 이동 ↑`](#javascript-%ED%95%A8%EC%88%98function)

##### 즉시 실행 함수의 전달인자

즉시 실행 함수에 인자를 전달할 수도 있다. 하지만 인자를 너무 많이 전달하지 않는 것이 좋다.
코드의 동작을 이해하기 위해 반복해서 코드의 맨 윗부분과 아랫부분 사이를 오가며 스크롤하기 부담스럽기 때문이다.
(하지만 에디터의 코드 폴딩(Folding) 기능을 사용하면 큰 부담이 되지 않기도 한다.)

```js
(function(global, $){
	console.log( global ); // window
	console.log( $ );      // jQuery
}(window, window.jQuery));
```

즉시 실행 함수 패턴은 폭 넓게 사용된다. 전역 변수를 남기지 않고 상당량의 작업을 할 수 있도록 해준다.
선언된 모든 변수는 스르로 호출하는 함수의 지역 변수가 되기 때문에 임시 변수가 전역을 오염시키지 않을까
걱정하지 않아도 된다.

[`'Javascript 함수' 목차로 이동 ↑`](#javascript-%ED%95%A8%EC%88%98function)

#### 즉시 객체 초기화

전역을 오염시키지 않도록 보호하는 또 다른 패턴은 앞서 설명한 즉시 실행 함수 패턴과 유사한 즉시 객체 초기화 패턴이다.
이 패턴은 객체가 생성된 즉시 `init()` 메서드를 실행해 객체를 바로 사용한다. `init()` 함수는 모든 초기화 작업을 처리한다.

```js
({
	// 초기 설정 값 정의
	'max_width':  900,
	'max_height': 400,

	// 메서드 정의
	'getSizes': function() {
		return this.max_width + ' x ' + this.max_height;
	}

	// 초기화
	'init': function() {
		console.log( this.getSize() );
	}

}).init(); // 객체 생성과 동시에 실행
```

문법적인 면에서 이 패턴은 객체 리터럴을 사용한 일반적인 객체 생성과 똑같다.
객체 리터럴도 괄호(`()`)로 감싸는데, 이는 Javascript 엔진이 중괄호를 코드 블록이 아니라
객체 리터럴로 인식하도록 지시하는 역할을 한다. 아래와 같은 방법으로도 사용이 가능하다.

```js
({
	'init': function() {}
}.init());
```

이 패턴의 장점은 즉시 실행 함수 패턴과 동일하다. 단 한 번의 초기화 작업을 실행하는 동안 전역을 오염시키지 않아도 된다.
다만 문법적으로 즉시 실행 함수 패턴에 비해 복잡해 보일 수 있으며, 압축 과정에서 효과적으로 압축하지 못한다.

#### 초기화 시점의 코드 분기

초기화 시점의 코드 분기는 최적화 패턴이다. 이떤 조건이 프로그램의 생명주기 동안 변경되지 않은 게 확실한 경우,
조건을 단 한 번만 확인하는 것이 바람직히다. 웹 브라우저 기능 탐지가 대표적인 예이다.

```js
var xhr = (function(global) {
	var _xhr;
	if ( global.XMLHttpRequest ) {
		_xhr = new XMLHttpRequest; // IE 7+
	} else {
		_xhr = new ActiveXObject('Microsoft.XMLHTTP'); // IE 5, 6
	}
	return _xhr;
}(window));
```

위 코드는 `XMLHttpRequest` 객체를 브라우저가 지원하는지 확인하여 지원할 경우,
지원하지 않을 경우를 초기화 시점에 파악하여 지원하는 기능을 쓸 수 있도록 처리하는 코드 분기문이다.

[`'Javascript 함수' 목차로 이동 ↑`](#javascript-%ED%95%A8%EC%88%98function)

#### 함수 객체의 속성 - 메모이제이션(Memoization) 패턴
<!-- 참고 URL: http://blog.naver.com/zerosum99/120193490188 -->
함수는 객체이기 때문에 속성을 가질 수 있다. 사실 함수는 생성될 때부터 속성과 메서드를 가지고 있다.
예를 들어 함수는 생성됨과 동시에 `length` 속성을 가진다. 이 속성은 함수가 전달 받은 인자의 개수를 값으로 가진다.

```js
var fn = function(arg1, arg2, arg3) {};
console.log( fn.length ); // 3
```

그리고 사용자는 함수에 언제든지 속성을 추가할 수 있다. 함수에 속성을 추가하여 결과(반환 값)를 캐시(Cache)해두면
다음 호출 시점에 복잡한 연산을 반복하지 않아 효율적으로 활용할 수 있다. 이런 활용 법을 메모이제이션 패턴이라고 한다.

```js
var memoization = function(arg) {

	if (!memoization.cache[arg]) {
		var result = {};
		// 비용이 많이 드는 일 수행...
		memoization.cache[arg] = result;
	}
	return memoization.cache[arg];
};
// 캐시 저장공간
memoization.cache = {};
```

위 코드에서 `memoization()` 함수는 한 개의 전달인자를 받는데, 받는 데이터 유형은 원시 데이터 형이라고 가정한다.
보다 많은 전달 인자와 복잡한 유형을 갖고자 한다면 직렬화(Serialization)하여 해결할 수 있다. 예를 들어
객체 인자를 `JSON` 문자열로 직렬화하여 이 문자열을 `memoization.cache` 객체에 메모할 수 있다.

```js
var memoization = (function(){
	// Array.prototype.slice() 메서드 캐시
	var slice = Array.prototype.slice;

	return function() {
		// Array.prototype.slice() 메서드 캐시 slice를 빌려 배열화
		// JSON.stringify()를 활용하여 직렬화
		var cachekey = JSON.stringify( slice.call(arguments) ),
			result;

		if ( !memoization.cache ) {
			// 캐시 저장공간
			memoization.cache = {};
		}

		if (!memoization.cache[cachekey]) {
			result = {};
			// 비용이 많이 드는 일 수행...
			memoization.cache[cachekey] = result;
		}
		return memoization.cache[cachekey];
	};

}());
```

[`'Javascript 함수' 목차로 이동 ↑`](#javascript-%ED%95%A8%EC%88%98function)

#### 설정 객체 패턴

설정 객체 패턴은 보다 깨끗한 API를 제공하는 방법이다. 라이브러리 제작 시 유용하다.
소프트웨어를 개발하고 유지보수하는 과정에서 요구사항이 변경되는 것은 어쩔 수 없는 현실.
요구사항을 결정 짓고 일을 시작했어도 나중에 더 많은 기능이 추가되는 상황이 발생한다.

`addProduct()` 함수를 정의한다 생각해보자. 이 함수는 제품의 이름, 용도를 전달 받아
새 제품을 추가한다.

```js
var addProduct = function(name, use) {
	// ...
};
```

하지만 실제로는 출하년도, 사양 정보 등을 선택적으로 입력 받아 저장할 필요가 있다는 것을
나중에 알게 되었다. 결국 기존에 작성했던 함수를 수정하여 새로운 전달 인자를 받도록 수정해야 한다.
(선택적 입력 가능한 전달인자는 의도적으로 마지막에 위치시킨다)

```js
var addProduct = function(name, use, date, spec) {
	// ...
};
```

벌써부터 함수에 전달하는 인자 값이 복잡해지고 있다. 그런데 중고제품인지 여부를 선택이 아닌,
필수로 넣어야 한다는 사실을 알게 되었다. 하여 함수를 다음과 같이 수정해야만 했다.

```js
var addProduct = function(name, use, date, spec, old) {
	// ...
};
```

중고 제품인 머그컵을 새 상품으로 등록한다고 가정하자. 그러면 아래 코드처럼 함수를 사용해야 한다.
함수 사용 시 주의할 점은 전달인자의 순서가 뒤썩이지 않게 주의해야만 한다.
(필수 인자가 맨 뒤에 있는 것이 문제가 된다)

```js
addProduct( '머그컵', '음료', null, null, true );
```

보다시피 많은 수의 전달인자를 전달하는 것은 매우 불편하다. 이럴 때 객체를 전달 받아 처리하는 방법을 사용하면
이와 같은 불편함을 손쉽게 해결할 수 있다. Javascript 함수는 모든 객체를 전달 인자로 받을 수 있다.
전달된 객체의 속성의 순서와 상관없이 함수 `addProduct()`는 이를 제대로 처리한다.

```js
var mugcup = {
	'name': '머그컵',
	'use': '음료',
	'old': true
};

var addProduct = function( product ) {
	// 전달 받은 객체 속성 값이 없을 경우, 초기 값 적용
	var name = product.name || '',
		date = product.date || new Date(),
		.
		.
};

addProduct( mugcup );
```

설정 객체의 장점을 정리해보자.

- 전달 인자의 순서를 기억할 필요가 없다.
- 선택적인 전달인자를 안전하게 생략 가능하다.
- 읽기 쉽고 유지보수하기 편하다.
- 전달인자를 추가하거나 제거하기가 편하다.

설정 객체의 단점은 다음과 같다.

- 전달인자 이름을 기억해야 한다.
- 속성 이름은 압축되지 않는다.

이 패턴은 DOM 요소를 생성하거나, 요소의 CSS 스탕리을 지정할 때 유용하다.
이유는 요소, 스타일은 많은 수의 속성을 가지며 대부분 선택적인 값이기 때문이다.
그래서 jQuery에서 흔히 볼 수 있는 인기 패턴이다.

[`'Javascript 함수' 목차로 이동 ↑`](#javascript-%ED%95%A8%EC%88%98function)