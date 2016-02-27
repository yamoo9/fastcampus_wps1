var $j = require('jquery');
/**
 * --------------------------------
 * 스킵 네비게이션
 * ----------------------------- */
$j.skipNav = function(selector) {
    if ( $.type(selector) !== 'string' ) {
        console.error('전달인자는 문자여야만 합니다.');
        return;
    }

    $(selector)
        .addClass('skip-container')
        .children('a').addClass('skip-content')
        .on('click', 'a', skipToContent);

    function skipToContent(e) {

        e.preventDefault();

        var target,
            target_id = e.target.getAttribute('href');

        if (!skipToContent.memo[target_id]) {
            target = document.querySelector(target_id);
            skipToContent.memo[target_id] = target;
        } else {
            target = skipToContent.memo[target_id];
        }

        if ( !target.getAttribute('tabindex') ) {
            target.setAttribute('tabindex', -1);
        }
        target.focus();
    }

    skipToContent.memo = {};

};