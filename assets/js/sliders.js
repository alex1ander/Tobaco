const productPreviewSlider = new Swiper('.products-preview-slider', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.products-preview-slider .swiper-button-next',
        prevEl: '.products-preview-slider .swiper-button-prev',
    },
    pagination: {
        el: ".products-preview-slider .swiper-pagination",
        type: "fraction",
    },
    loop: false,
    breakpoints: {
        // когда ширина <= 768px, показывать 1 слайд за группу
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        }
    },
});



var categoryNavSlider = new Swiper(".category-nav-slider", {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    // loop: true,
    navigation: {
        nextEl: '.category-nav-slider .swiper-button-next',
        prevEl: '.category-nav-slider .swiper-button-prev',
    },
});



// Навигационный слайдер
var productswipersNavSlider = new Swiper(".products-nav-slider", {
    direction: 'vertical',
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
    pagination: {
        el: ".products-nav-slider-tools .swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: '.products-nav-slider-tools .swiper-btn-next',
        prevEl: '.products-nav-slider-tools .swiper-btn-prev',
    },
});

// Основной слайдер
var productsSlider = new Swiper(".products-slider", {
    direction: 'vertical',
    autoHeight: true,
    slidesPerView: 1,
});


// === Двусторонняя синхронизация ===
productsSlider.controller.control = productswipersNavSlider;
productswipersNavSlider.controller.control = productsSlider;




var imageSlider = new Swiper(".image-slider", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    pagination: {
    el: ".image-slider .swiper-pagination",
    clickable: true,
    },
});


var brandsSmallSlider = new Swiper(".brands-small-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".brands-small-slider .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
        },
        769:{
            slidesPerView: 2,
        },
        1400:{
             slidesPerView: 3,
        }
    },

});

var brandsBigSlider = new Swiper(".brands-big-slider", {
    slidesPerView: 5,
    spaceBetween: 20,
    pagination: {
        el: ".brands-big-slider .swiper-pagination",
        clickable: true,
    },
    grid: {
        rows: 2,
        fill: 'row'
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
        },
        500:{
            slidesPerView: 2,
        },
        769:{
            slidesPerView: 3,
        },
        1400:{
             slidesPerView: 5,
        }
    },

});


var peronalSlider = new Swiper(".personal-slider", {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
        nextEl: '.personal-slider .swiper-button-next',
        prevEl: '.personal-slider .swiper-button-prev',
    },
    pagination: {
        el: ".personal-slider .swiper-pagination",
        type: "fraction",
      },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500:{
            slidesPerView: 2,
        },
        769:{
            slidesPerView: 3,
        },
        1400:{
             slidesPerView: 5,
        }
    },
});
