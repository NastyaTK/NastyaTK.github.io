$(document).ready(function () {
    $('.slider-container').slick({
        infinite: true,
        slidesToShow: 1,
        speed: 700,
        // autoplay: true,
        slidesToScroll: 1,
        appendArrows: $('.slider-nav-container'),
        prevArrow: '<button id="prev" type="button" class="slider-navigation-btn btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i> <span class="material-icons">arrow_back_ios</span></button>',
        nextArrow: '<button id="next" type="button" class="slider-navigation-btn btn btn-juliet"><span class="material-icons">arrow_forward_ios</span> <i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        // appendDots: ('.slider-dots'),
        // dots: true
    });
});


// <span class="material-icons">arrow_back_ios</span>