/**
 * --------------------------------
 * Javascript 데이터 유형
 *
 * null
 * undefined
 *
 * 문자
 * new String() // 문자 객체
 * 숫자
 * 불린
 * 함수
 * 객체
 * 배열
 *
 * ----------------------------- */

// new를 강제화 시키는 생성자 함수 제작 패턴
// 생성자 함수 정의
function Monster() {
	if ( this === window ) {
	// if ( this.constructor !== Monster ) {
		return new Monster();
	}
}

Monster.prototype = {
	'crying' : function() {
		return this.name + ' 울부짓다';
	},
	'running' : function() {
		return this.name + ' 달리다';
	},
	'sleeping' : function() {
		return this.name + ' 잠자다';
	},
	'tellType' : function() {
		return this.name + '의 유형은 ' + this.type + '이다.';
	}
};

// Monster 클래스 확장(상속)
function ExtendMonster(name, type) {
	if ( this === window ) {
	// if ( this.constructor !== ExtendMonster ) {
		return new ExtendMonster(name, type);
	}
	this.name = name;
	this.type = type;
}

ExtendMonster.prototype = new Monster();

// 프로토타입 객체 확장
// Monster.prototype.crying = function() {
// 	return this.name + ' 울부짓다';
// };
// Monster.prototype.running = function() {
// 	return this.name + ' 달리다';
// };
// Monster.prototype.sleeping = function() {
// 	return this.name + ' 잠자다';
// };
// Monster.prototype.tellType = function() {
// 	return this.name + '의 유형은 ' + this.type + '이다.';
// };

// 일반 함수
// Monster();

//  생성자로서 함수
// new Monster();

