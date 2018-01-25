module.exports = function () {
    var blur = (function () {
        var wrapper = document.querySelector('.js-blur-wrapper'),
            form = document.querySelector('.js-blur-form');

        return {
            set: function() {
                var bgWidth = document.querySelector('.js-blur-bg').offsetWidth,
                    bgHeight = document.querySelector('.js-blur-bg').offsetHeight,
                    posTop = -wrapper.offsetTop,
                    blurCSS = form.style,
                    wrapperHeight = wrapper.offsetHeight;
                    transformY = posTop-wrapperHeight/2;
                blurCSS.height = bgHeight + 'px';
                blurCSS.width = bgWidth + 'px';
                blurCSS.transform = 'translate(-50%,' + transformY + 'px)';
            }
        };
    })();

    blur.set();

    window.onresize = function () {
        blur.set();
    };

};