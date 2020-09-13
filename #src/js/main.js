var mySwiper = new Swiper('.bakery-main-slider .swiper-container', {
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 50,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 10,
        modifier: 1,
        slideShadows: false,
    },

});
