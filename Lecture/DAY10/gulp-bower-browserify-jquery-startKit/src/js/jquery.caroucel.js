'use strict';
var $j = require('jquery');
// $j.fn === $j.prototype;

// jQuery 플러그인 (인스턴스 메소드, 프로토타입 확장)

if (!$j.fn.caroucel) {
    $j.fn.caroucel = function() {
        var $instance = this;
        $instance.addClass('caroucel-container');

        return $j.each($instance, function(index, item) {
            var $item = $instance.eq(index);
            $item.find('p').html('내가 널 바꾸었다.');
        });
    };
}