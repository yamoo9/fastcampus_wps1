var toggleBtn = $('.toggle-grid');

toggleBtn.onclick = function() {
	toggleGrid('.container', 'grid');
	return false;
};

function toggleGrid(selector, className) {
	$(selector).classList.toggle(className);
	// if ( $(selector).classList.contains(className) ) {
	// 	$(selector).classList.remove(className);
	// } else {
	// 	$(selector).classList.add(className);
	// }
}

