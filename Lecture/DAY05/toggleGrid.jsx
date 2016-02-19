#target photoshop

/**
 * -------------------------------------
 * 선택한 레이어를 토글(Show/Hide)
 * 1. 레이어 패널의 레이어 중에서 첫번째 레이어를 선택
 * 2. 선택된 레이어의 visible 상태(State)를 체크
 * 3-1. 보여지는 상태면, 감추고
 * 3-2. 감춰진 상태면, 보이게 합니다.
 * ---------------------------------- */
 if( documents.length ) {
	var first_layer = app.activeDocument.layers[0];
	first_layer.visible = !first_layer.visible;
}
// if ( first_layer.visible ) {
// 	first_layer.visible = false;
// } else {
// 	first_layer.visible = true;
// }
