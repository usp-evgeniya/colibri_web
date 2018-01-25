module.exports = function () {
    
    /*document.body.onload = function () {

        setTimeout(function() {
            var preloader = document.getElementById('js-preloader');
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done');
            }           

        },500)


    };*/

    var images = document.images,
        imagesTotalCount = images.length,
        imagesLoadedCount = 0,
        persDisplay = document.getElementById('js-load-percent'),
        preloader = document.getElementById('js-preloader');
    
    for ( var i =0; i < imagesTotalCount; i++) {
        imageClone = new Image();
        imageClone.onload = imageLoaded;
        imageClone.onerror = imageLoaded;
        imageClone.src = images[i].src;
    }

    function imageLoaded() {
        document.body.style.overflow = 'hidden';
        imagesLoadedCount++;
        persDisplay.innerHTML = Math.ceil((100 / imagesTotalCount) * imagesLoadedCount);
    
        if (imagesLoadedCount >= imagesTotalCount) {

            setTimeout(function() {
                if (!preloader.classList.contains('done')) {
                    preloader.classList.add('done');
                    document.body.style.overflow = 'auto';
                }          
    
            }, 1000);
        }
    }

    /*

    var loadContent = function () {
        console.log('Дом загружен');

        function load(elem) {
            return new Promise((resolve,reject) => {
                elem.addEventListener('load', resolve);
            });
        }

                
        load(preloader)
            .then(() => {
                console.log('Прелоудер загружен');
            })
            .then(() => load(images))
            .then(() => {
                //return load(images);
                //return imageLoaded();
                console.log('Изображения загружены');



            });
    
    }

    document.addEventListener("DOMContentLoaded", loadContent);
*/    

};