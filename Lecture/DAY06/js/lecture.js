/*! lecture.js © yamoo9.net, 2016 */
// var body = document.body;
// var body = selector('body');
// var container = selector('.container');
// var divs = selector('div');
// var links = selector('a');

// addAttribute(body, 'data-module', 'dom-helper');

// addAttribute(body, 'class', 'hi');
// addAttribute(body, 'class', 'there');
// addAttribute(body, 'class', 'everyone');
// addAttribute(body, 'class', ':-)');


var divs = selector('div');
var page = selector('.page');
var page_in_divs = selector('div', page);

// console.log(divs);
console.log(page_in_divs);


// Javascript 데이터 유형
// 객체(Object)
// 객체가 아닌 것... undefined, null
// Number
// var num = new Number(9); // 객체
var num = 9; // 리터럴
// String
// var str = new String('this is string object'); // 객체
var str = 'this is string object'; // 리터럴
// Boolean
// var boo = new Boolean(false); // 객체
var boo = false; // 리터럴
// Function
// var fnc = new Function('');
var fnc = function() {};
// Array
// var arr = new Array();
var arr = [];
// Object
// var obj = new Object();
var obj = {};

// 데이터 유형을 체크하는 방법
// 1. typeof
// 약점 : Array, Object를 구분하지 못한다.
// 2. instanceof
// 데이터 유형 instanceof 생성자함수
// 3. constructor
// 데이터(객체)를 생성한 생성자를 체크한다. (데이터가 객체가 아닌 경우는 오류 발생)
//
// 4. Object.prototype.toString 메소드 빌려쓰기(Function.prototype.call)
// Object.prototype.toString.call(DATA).slice(8, -1);
