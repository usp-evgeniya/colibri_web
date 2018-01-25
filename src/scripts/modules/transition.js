
var $ = require('jquery');

module.exports = function() {
    function ScrollTo(sectionNumber) {
        var target = $('.section').eq(sectionNumber).offset().top;
        $('html, body').animate({
            scrollTop : target
        }, 1000);
    }

    $(function() {
        $('.js-hero-btn').on('click', function(e) {
            e.preventDefault();
            ScrollTo(1);
        });
    });

    $(function() {
        $('.js-comments-btn').on('click', function(e) {
            e.preventDefault();
            ScrollTo(0);
        });
    });
};