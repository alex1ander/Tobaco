const productSlider = new Swiper('.product-slider', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.product-slider .swiper-button-next',
        prevEl: '.product-slider .swiper-button-prev',
    },
    pagination: {
        el: ".product-slider .swiper-pagination",
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