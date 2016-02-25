(function(exports, $){
    'use strict';

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

    $.skipNav('.skip');

    // jQuery 버전 확인
    // console.log($.fn.jquery);

    /**
     * --------------------------------
     * 스킵 네비게이션
     * ----------------------------- */
    $(document).ready(init);

    function init() {
        // 문서 요소 객체 대상 참조
        var $skip_nav = $('.skip-navigation');

        $skip_nav.on('click', 'a', function(e) {
            // 브라우저의 기본 동작 차단
            e.preventDefault();
            // 목적지(타겟 요소를 탐색)
            // var target_id = e.target.getAttribute('href');
            var target_id = $(e.target).attr('href');
            // var target = document.querySelector(target_id);
            $(target_id)
                .attr('tabindex', -1)
                .focus();
            // 목적지(타겟 요소)에 속성 설정 (포커스 가능하도록...)
            // target.setAttribute('tabindex', -1);
            // 목적지(타겟 요소)에 포커스 설정
            // target.focus();
        });

    }

})(this, this.jQuery);