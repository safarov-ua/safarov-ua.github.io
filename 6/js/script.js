var burger = document.querySelector(".burger-menu");
var mobMenu = document.querySelector(".mobile-nav");
var cancel = document.querySelector(".cancel")
burger.onclick = function(){
	mobMenu.style.left = "0";
}
cancel.onclick = function(){
	mobMenu.style.left = "-240px";
}

$('.comments-carousel').slick({
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$('.future-carousel').slick({
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});