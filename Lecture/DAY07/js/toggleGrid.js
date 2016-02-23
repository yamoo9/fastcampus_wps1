var toggleBtn = $('.toggle-grid');

function toggleGrid(selector, className) {
	'use strict';
	$(selector).classList.toggle(className);
	// if ( $(selector).classList.contains(className) ) {
	// 	$(selector).classList.remove(className);
	// } else {
	// 	$(selector).classList.add(className);
	// }
}

toggleBtn.onclick = function() {
	'use strict';
	toggleGrid('.container', 'grid');
	return false;
};

