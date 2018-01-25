module.exports = function () {

    var parallaxBox = document.getElementById('parallax'),
        layers = parallaxBox.children;

    var moveLayers = function (e) {
        var initialX = (window.innerWidth / 2) - e.pageX;
        var initialY = (window.innerHeight / 2) - e.pageY;

        Array.prototype.slice.call(layers).forEach(function (layer, index) {
            var
                divider = index / 100,
                positionX = initialX * divider,
                positionY = initialY * divider,
                transform2D = 'translate(' + positionX + 'px,' + positionY + 'px)',
                image = layer.firstElementChild;

            layer.style.transform = transform2D;
        });

    };

    window.addEventListener('mousemove', moveLayers);
};