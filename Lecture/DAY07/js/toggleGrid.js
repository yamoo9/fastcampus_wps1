// DOM API를 사용해서 문서 객체를 동적으로 생성하는 방법
// 생성 및 설정 (요소, 속성 설정)
// <a class="button toggle-grid fa fa-bars" href="#" role="button" aria-label="Toggle Grid"></a>

var body = document.body,
	toggle_grid_btn = document.createElement('a');

// 속성을 설정
// toggle_grid_btn.setAttribute('class', 'button toggle-grid fa fa-bars');
// toggle_grid_btn.setAttribute('href', '#');
// toggle_grid_btn.setAttribute('role', 'button');
// toggle_grid_btn.setAttribute('aria-label', 'Toggle Grid');

attr(toggle_grid_btn, 'class', 'button toggle-grid fa fa-bars');
attr(toggle_grid_btn, 'href', '#');
attr(toggle_grid_btn, 'role', 'button');
attr(toggle_grid_btn, 'aria-label', 'Toggle Grid');

// 헬퍼함수를 사용할 경우,
// [SET] attr(el, prop, value)
// [GET] attr(el, prop)

// console.log( toggle_grid_btn );

// 실제 문서에 생성한 요소노드를 추가(append)
body.appendChild(toggle_grid_btn);

// 문서 객체 참조
// var toggleBtn = $('.toggle-grid');

// 토글 그리드 함수 선언
function toggleGrid(selector, className) {
	'use strict';
	$(selector).classList.toggle(className);
}

// 이벤트 핸들링 (함수 = 핸들러)
// toggleBtn.onclick = function() {
// 	'use strict';
// 	toggleGrid('.container', 'grid');
// 	return false;
// };
