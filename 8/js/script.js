document.body.onload = function(){ 

	/*carousel*/

	$(".header__slider").slick({
	autoplay: true,
	dots: false,
	arrows: false,
		});

	$(".production__slider").slick({
		autoplay: false,
		dots: true,
		arrows: true,
		slidesToShow: 4,
		responsive: [
    	{
      		breakpoint: 1100,
      		settings: {
        		slidesToShow: 3,
        		slidesToScroll: 1,
        		infinite: true,
        		dots: true
      		}
    	},
    	{
      		breakpoint: 900,
      		settings: {
        		slidesToShow: 2,
        		slidesToScroll: 1
      		}
    			},
    		{
      		breakpoint: 600,
      		settings: {
        		slidesToShow: 1,
        		slidesToScroll: 1
    		}
    		}
  		]
	});

$(".comments__items").slick({
	autoplay: false,
	dots: true,
	arrows: true,
	slidesToShow: 3,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


var menu = document.querySelector(".bar");
var nav = document.querySelector(".nav");
var cartIcon = document.querySelector(".cart-icon");
var cart = document.querySelector(".cart");

menu.onclick = function(){
	nav.classList.toggle("nav-visible");
}
cartIcon.onclick = function(){
	cart.classList.toggle("cart-visible");
}

$('.gallery__items').gallerify({
	margin:3,
	mode: 'default',
});



var page = $('html, body');
$('a[href^="#"]').click(function(){

var target = $(this).attr('href');
console.log(target)
page.animate({scrollTop: $(target).offset().top}, 800);
return false;
});
}