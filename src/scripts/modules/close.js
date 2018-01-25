var $ = require('jquery');

module.exports = function(){
    var statusMessage = $('.js-contact-status');
    var close = $('.js-close');
    close.on('click',function (e) {
        e.preventDefault();
        statusMessage.removeClass('show');
    });
};