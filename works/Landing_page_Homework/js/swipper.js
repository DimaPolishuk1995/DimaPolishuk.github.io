$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        parallax: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 5000,
        mousewheelControl: true,
        spaceBetween: 50
    })
});