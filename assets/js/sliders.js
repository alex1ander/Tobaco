const productPreviewSlider = new Swiper('.products-preview-slider', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    navigation: {
        nextEl: '.products-preview-slider .btn-next',
        prevEl: '.products-preview-slider .btn-prev',
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
    spaceBetween: 20,
    centeredSlides: true,
    // loop: true,
    navigation: {
        nextEl: '.category-nav-slider .btn-next',
        prevEl: '.category-nav-slider .btn-prev',
    },

    breakpoints: {
        // когда ширина <= 768px, показывать 1 слайд за группу
        0: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 3,
        }
    },
});



// Навигационный слайдер
var productswipersNavSlider = new Swiper(".products-nav-slider", {
    direction: 'vertical',
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
    slideToClickedSlide: true,
    watchSlidesProgress: true,
    pagination: {
        el: ".products-nav-slider-tools .swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: '.products-nav-slider-tools .swiper-btn-next',
        prevEl: '.products-nav-slider-tools .swiper-btn-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            direction: 'horizontal',
        },
        1025: {
            slidesPerView: 3,
            direction: 'vertical',
        }
    },
});

// Основной слайдер с описанием
var productsSliderInfo = new Swiper(".products-info-slider", {
    allowTouchMove: false,
    direction: 'vertical',
    autoHeight: true,
    slidesPerView: 1,
    watchSlidesProgress: true,
    breakpoints: {
        0: {
            direction: 'horizontal',
        },
        1025: {
            direction: 'vertical',
        }
    },
});

// Слайдер с изображениями
var productsSliderImages = new Swiper(".products-images-slider", {
    allowTouchMove: false,
    direction: 'vertical',
    autoHeight: true,
    slidesPerView: 1,
    watchSlidesProgress: true,
    breakpoints: {
        0: {
            direction: 'horizontal',
        },
        1025: {
            direction: 'vertical',
        }
    },
});

var productsSliderThumbImages = new Swiper(".products-images-thumb-slider", {
    allowTouchMove: false,
    direction: 'vertical',
    autoHeight: true,
    slidesPerView: 1,
    watchSlidesProgress: true,
    breakpoints: {
        0: {
            direction: 'horizontal',
        },
        1025: {
            direction: 'vertical',
        }
    },
});

// === Синхронизация всех трёх ===
productswipersNavSlider.controller.control = [productsSliderImages, productsSliderInfo,productsSliderThumbImages];






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
        nextEl: '.personal-slider .btn-next',
        prevEl: '.personal-slider .btn-prev',
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




// products images

document.querySelectorAll('.products-images-slider .swiper-slide').forEach((slide, index) => {
  const mainInnerEl = slide.querySelector('.product-images-slider');
  const thumbInnerEl = document.querySelectorAll('.products-images-thumb-slider .swiper-slide')[index]
    ?.querySelector('.product-images-thumbs-slider');

  if (!mainInnerEl || !thumbInnerEl) return;

  const thumbsSwiper = new Swiper(thumbInnerEl, {
    spaceBetween: 20,
    slidesPerView: 2,
    watchSlidesProgress: true,
  });

  new Swiper(mainInnerEl, {
    spaceBetween: 20,
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
});




var categoryNavSlider = new Swiper(".news-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    // navigation: {
    //     nextEl: '.news-slider .btn-next',
    //     prevEl: '.news-slider .btn-prev',
    // },
    pagination: {
        el: ".news-slider .swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        // когда ширина <= 768px, показывать 1 слайд за группу
        0: {
            slidesPerView: 1,
            navigation: false,
        },
        769: {
            slidesPerView: 3,
        }
    },
});
