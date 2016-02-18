/*! toggleGrid.js © yamoo9.net, 2016 */
(function(global, undefined){
	'use strict';

	var body = document.body;

	document.onkeydown = toggleGrid;

	function toggleGrid(event) {
		// G키(71)
		if ( event.shiftKey && event.keyCode === 71 ) {
			body.classList.toggle('grid');
		}
	}

})(this);