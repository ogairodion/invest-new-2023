import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
global.$ = global.jQuery = $;
import LazyLoad from "vanilla-lazyload";
// eslint-disable-next-line no-unused-vars
import fancybox from "@fancyapps/fancybox";
window.fancybox = $.fancybox;

// eslint-disable-next-line no-unused-vars
const lazyLoadInstance = new LazyLoad({});

$("a.scroll").on("click", function () {
    let link = $(this);
    
    $("html, body").animate({
        scrollTop: scrollTo = $(link.attr("href")).offset().top + "px"
    }, {
        duration: 800
    });
    return false;
});