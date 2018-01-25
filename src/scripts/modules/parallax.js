module.exports = function () {

    var parallax = (function () {
        var bg = document.querySelector('.js-bg-hero'),
        bgTitle = document.querySelector('.js-bg-title'),
        owner = document.querySelector('.js-hero-content');

        return {
            move: function(block, windowScroll, strafeAmount) {
                var strafe = windowScroll / -strafeAmount + '%';
                var transform3D = 'translate3d(0,' + strafe + ',0)';
                var style = block.style;

                style.transform = transform3D;
                style.webkitTransform = transform3D;

            },

            init: function (wScroll) {
                this.move(bg, wScroll, 50);
                this.move(bgTitle, wScroll, 25);
                this.move(owner, wScroll, 5);
                bgTitle.style.left = '0%';
            }
        };
    }());
    window.onscroll = function () {
        var wScroll = window.pageYOffset;

        parallax.init(wScroll);


    };
};