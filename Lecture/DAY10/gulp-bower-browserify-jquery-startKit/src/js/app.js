/*! app.js © yamoo9.net, 2016 */
'use strict';

// 모듈
// require('modernizr');
var $j = require('jquery');
require('./jquery.skipNav');
require('./jquery.caroucel');

// ------------------------------
// jQuery
// ------------------------------
function init() {
    // 스킵 내비게이션 설정
    // $j.skipNav('.target');
    var result = $j('.target, .target-other').caroucel();
    // console.log(result); // ????
    result.addClass('caroucel-dash');

    // $j('.target').caroucel().animate(); // ????

}

$(init);