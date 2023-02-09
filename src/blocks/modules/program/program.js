import $ from 'jquery';
import Swiper from "swiper";

let windowWidth;

windowWidth = $(window).width();

$(window).on('resize', function() {
    windowWidth = $(window).width();
});

const sliderProgram = new Swiper(".program__tabs", {
    slidesPerView: 'auto',
    spaceBetween: 91,
    resistance: true,
    resistanceRatio: 0,
    observer: true,
    observeParents: true,
    slideToClickedSlide: true,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    centeredSlides: true,
    breakpoints: {
        600: {
    spaceBetween: 118,
    centeredSlides: false,
        },
    },
}); 

getActiveContent(1);

$('.program__tab').on('click', function() {
    let id = $(this).data('id');

    $('.program__tab').removeClass('active');
    $(this).addClass('active');

    getActiveContent(id);
});

function getActiveContent(id) {
    $('.program__content').each(function() {
        let attr = $(this).data('id');

        if (attr == id) {
            $(this).removeClass('hidden');
        } else {
            $(this).addClass('hidden');
        }
    });
}

sliderProgram.on('slideChange', function() {
    if (windowWidth < 600) {
        getActiveContent(sliderProgram.activeIndex + 1);
    }
});
    