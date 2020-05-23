// Initialize Swiper 
var swiper = new Swiper('.swiper-container', {
    loop: true,
    direction: 'vertical',
    simulateTouch: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});