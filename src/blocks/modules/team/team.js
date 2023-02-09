import { Swiper, Navigation } from "swiper";

Swiper.use(Navigation);

const teamSlider = new Swiper(".team__slider", {
    slidesPerView: 1,
    spaceBetween: 109,
    centeredSlides: true,
    loop: true,
    breakpoints: {
        991: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: '.team__slider-arrow--next',
        prevEl: '.team__slider-arrow--prev',
    },
}); 