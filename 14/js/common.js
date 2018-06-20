var slider = $('.sliders');

if(slider.length) {
    $('.slider__items--first').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
    });

    $('.slider__items--second').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
    });
}