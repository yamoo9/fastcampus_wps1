/*! lecture.js © yamoo9.net, 2016 */

// Javascript 기본 문법 정리
// Variable 변수
// $, @, var
// var html, head, body;

// 변수 정의(선언)
var html;
var head;
var body;

// Legacy DOM === DOM Level 0
// --------------------------------------------
// 선언된 변수에 값을 할당 (여기서 값이란? 문서객체)
// html = document.documentElement;
// head = document.head;
// body = document.body;


// DOM Level 1
// --------------------------------------------
html = document.getElementsByTagName('html'); // [html]
head = document.getElementsByTagName('head'); // [head]
body = document.getElementsByTagName('body'); // [body]

// 웹 브라우저의 콘솔 객체의 로그 메소드로 콘솔 창에 출력
// console.log( 'html: ', html.item(0) );
// console.log( 'head: ', head[0] );
// console.log( 'body: ', body[0] );

// 문서에 존재하는 모든 Divistion 요소를 선택 변수에 참조
// var all_div = document.getElementsByTagName('div');

// console.log( all_div.length );

// console.log( all_div[0] );

// 배열 데이터 유형이 가진 메소드
// .push(), .shift(), ....
// console.log( !!all_div.push );



// 클라이언트 환경에서 문서(Document)에 접근/조작/처리 과정..
// 문서에 존재하는 대상(요소)을 선택합니다.
// 선택된 대상에 조작을 가하거나,
// 이벤트에 따라 프로그래밍 되도록 설계합니다.


// HTML 요소(Element)의 속성으로 대상을 식별하는 DOM API 메소드
var page = document.getElementById('page');
var navigation = document.getElementById('navigation');
var footer = document.getElementById('footer');

// console.log(page, navigation, footer);

// class 속성으로 대상 요소를 선택하는 방법
var container = document.getElementsByClassName('container');

// console.log(container[0]); // NodeList, HTMLCollection

// DOM Selection API
// var page = document.querySelector('#page');
// var container = document.querySelector('.container');
// var page_tile = page.querySelector('.page-title');
// var page_tile = document.querySelector('#page .page-title');


/**
 * --------------------------------
 * 새로운 DOM 선택 API
 * .querySelector()
 * .querySelectorAll()
 */
var divs = document.querySelectorAll('div');

// console.log(divs);


/**
 * --------------------------------
 * 선택 후, 조작
 * 생성
 * 제거
 * 변경
 * 복사
 * ----------------------------- */

// var first_child_of_body = document.body.querySelector(':first-child');
var first_child_of_body = document.querySelector('body *:first-child');
// console.log(first_child_of_body);


// GET
// 찾아온 요소의 속성을 가져와서 콘솔 화면에 출력
// console.log( first_child_of_body.id );
// console.log( first_child_of_body.className );


// debugger;
// SET
// first_child_of_body.id = 'document_page';
// first_child_of_body.className = 'wrapper';

var first_child_of_body_id = first_child_of_body.getAttribute('id');
var first_child_of_body_class = first_child_of_body.getAttribute('class');

// console.log( first_child_of_body_id );
// console.log( first_child_of_body_class );

var app_name = document.body.getAttribute('data-ng-app');
// console.log(app_name);

document.body.setAttribute('data-ng-app', 'MemoryGameApp');