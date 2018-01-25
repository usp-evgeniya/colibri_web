var $ = require('jquery');

module.exports = $(function(){
    $('.js-btn-auth').on('click',function (e) {
        e.preventDefault();
        var elem = $(e.target),
            mainIntro = elem.closest('.js-main-intro');

        mainIntro.addClass('active');
    });

    $('.js-btn-home').on('click',function (e) {
        e.preventDefault();
        var elem = $(e.target),
            mainIntro = elem.closest('.js-main-intro');

        mainIntro.removeClass('active');
    });
});