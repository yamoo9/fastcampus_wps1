(function(this){
    var $ = this.jQuery;
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
})(this);