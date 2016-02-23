// .list a 요소를 클릭했을 때,
// 각 목록 아이템의 앵커를 사용자가 클릭하면
// 콘솔 패널 창에 각 아이템의 인덱스를 출력하라.

var list = $('.list'),
	list_links = $('a', list);

// HTML Collection, NodeList 유사배열
// console.log( list_links.length );

// 1. 문서 객체에 새로운 속성을 설정하여 값을 기억
// for (var i = 0, l = list_links.length, item; i<l; i = i + 1) {
// 	item = list_links[i];
// 	item.index = i;
// 	// item.setAttribute('index', i);
// 	item.onclick = function() {
// 		'use strict';
// 		console.log( this, this.index ); // 0, 1, 2, ..., 7 //// 8 ???
// 		return false;
// 	};
// }

// 2. Javascript 클로저(Closure)를 사용하는 방법
for (var i = 0, l = list_links.length, item; i<l; i = i + 1) {
// for ( var i = list_links.length; i--; ) {
	list_links[i].onclick = (function(i){
		'use strict';
		return function() {
				console.log( this, i );
				return false;
			};
	})(i);
}

// 클로저
function outerFn() {
	'use strict';
	var i = 0;
	function innerFn() {
		return ++i;
	}
	return innerFn;
}
var couter = outerFn();