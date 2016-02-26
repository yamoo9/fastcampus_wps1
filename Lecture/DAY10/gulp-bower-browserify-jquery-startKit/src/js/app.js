/*! app.js © yamoo9.net, 2016 */
'use strict';

// 모듈
// require('modernizr');
// require('jquery');

// ------------------------------
// jQuery
// ------------------------------
// jQuery.noConflict(true);

/**
 * --------------------------------
 * 스킵 네비게이션
 * ----------------------------- */
// jQuery Plugin 코드
// var pluginName = '';
//
// jQuery[pluginName] = function() {};
// jQuery.fn[pluginName] = function() {};

$.skipNav = function(selector) {
    if ( $.type(selector) !== 'string' ) {
        console.error('전달인자는 문자여야만 합니다.');
        return;
    }
    var $skip = $(selector);
    $skip
        .addClass('skip-container')
        .children('a').addClass('skip-content')
        .on('click', 'a', skipToContent);

    function skipToContent(e) {
        e.preventDefault();
        var target_id = e.target.getAttribute('href');
        var target = document.querySelector(target_id);
        target.setAttribute('tabindex', -1);
        target.focus();
    }

};

// $.skipNav('.skip');