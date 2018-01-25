    module.exports = function() {
        var slides = [
            {
                subtitle: "Адаптивная вёрстка лендинга магазина бургеров Mr.Burger",
                techs: "Адаптивный сайт, постраничный скролл, удобный слайдер, выпадающие и раскрывающиеся меню, форма заказа, интерактивная кастомизированная карта. Технологии: HTML5, CSS3, JavaScript & jQuery, Ajax, Gulp, Git",
                link: "https://usp-evgeniya.github.io/burgers/",
                img: "img/content/works/burgers.png",
            }, {
                subtitle: "Вёрстка сайта фитнес-клуба Афродита",
                techs: "Качественная верстка по БЭМ, плавные переходы, анимация. Технологии: HTML5, CSS3, Git",
                link: "https://usp-evgeniya.github.io/project_afrodita/",
                img: "img/content/works/fitness.png",
            }, {
                subtitle: "Дизайн и вёрстка лендинга для студии красоты Пион",
                techs: "Яркий насыщенный тёплый дизайн, светлые тона, продуманная структура. Технологии: HTML5, CSS3, Git",
                link: "https://usp-evgeniya.github.io/project_peony/",
                img: "img/content/works/peony.png",
            }, {
                subtitle: "Вёрстка и программирование сайта-портфолио веб-разработчика",
                techs: "Адаптивный сайт, parallax-эффекты, стильный слайдер, форма обратной связи, страница авторизации, интерактивная кастомизированная карта. Технологии: HTML5, CSS3, JavaScript & jQuery, Ajax, Gulp, Git",
                link: "https://usp-evgeniya.github.io/portfolio/dist/",
                img: "img/content/works/portfolio.png",
            }, {
                subtitle: "Дизайн интернет-магазина лабораторного оборудования",
                techs: "Продуманная структура, простой и понятный дизайн, реализация адаптивных версий",
                link: "https://morozovaey.myportfolio.com/dizayn-internet-magazina-laboratornogo-oborudovaniya/",
                img: "img/content/works/laboratory.png",
            }, {
                subtitle: "Редизайн лендинга по ремонту квартир",
                techs: "Спокойная цветовая гамма, понятная структура, четкие описания",
                link: "https://morozovaey.myportfolio.com/redizayn-lendinga-po-remontu-kvartir",
                img: "img/content/works/home_repair.png",
            }, {
                subtitle: "Редизайн лендинга школы танцев Pole Dance",
                techs: "Четкая структура, привлекательный яркий дизайн, бизнес-подход",
                link: "https://morozovaey.myportfolio.com/redizayn-lendinga-shkoly-tantsev-pole-dance",
                img: "img/content/works/pole_dance.png",
            }, {
                subtitle: "Создание корпоративного сайта компании по математическому моделированию",
                techs: "Лаконичный дизайн, простой и информативный формат. Детальная информация о компании и различных аспектах ее деятельности представлена на отдельных страницах",
                link: "http://msdecision.nichost.ru/",
                img: "img/content/works/msdecisions.png",
            }, {
                subtitle: "Создание сайта стоматологической клиники Ваша стоматология",
                techs: "Лаконичный душевный дизайн, четкая структура, бизнес-ориентированность. Уникальные векторные иконки, удобные формы записи и подписки на новости. Главная страница в форме лендинга",
                link: "https://your-dent.ru/",
                img: "img/content/works/your_dent.png",
            }
        ];
   
        var showingSlide = document.querySelector('.js-slide-img'),
            nextSlide = document.querySelector('.js-slide-next'),
            prevSlide = document.querySelector('.js-slide-prev'),
            btnPrev = document.querySelector('.js-btn-prev'),
            btnNext = document.querySelector('.js-btn-next'),
            subtitle = document.querySelector('.js-slide-subtitle'),
            techs = document.querySelector('.js-slide-techs'),
            link = document.querySelector('.js-slide-link'),
            currentSlide = 0,
            slidesLength = slides.length;
    
        
    
        function slideLimiter(eq) {
            if(eq >= slidesLength) {
                return 0;
            } else if(eq < 0) {
                return slidesLength - 1;
            } else {
                return eq;
            }
        }
    
        function fillSlider() {
            var prev = slideLimiter(currentSlide - 1),
                next = slideLimiter(currentSlide + 1);
    
            showingSlide.setAttribute('src', slides[currentSlide].img);
            subtitle.innerText = slides[currentSlide].subtitle;
            techs.innerText = slides[currentSlide].techs;
            link.setAttribute('href', slides[currentSlide].link);
            prevSlide.setAttribute('src', slides[prev].img);
            nextSlide.setAttribute('src', slides[next].img);
        
            

        }
    
            fillSlider();
    
        btnNext.addEventListener('click', function(){
            currentSlide = slideLimiter(currentSlide + 1);
            //showingSlide.classList.add('animate');
            fillSlider();
            //showingSlide.classList.remove('animate');
        });
    
        btnPrev.addEventListener('click', function(){
            currentSlide = slideLimiter(currentSlide - 1);
            fillSlider();
        });
    
    };

