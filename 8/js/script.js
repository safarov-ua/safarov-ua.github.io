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

/*menu show/hide*/
var menu = document.querySelector(".bar");
var nav = document.querySelector(".nav");
var navClose = document.querySelector(".nav-close");

menu.onclick = function(){
	nav.classList.add("nav-visible");
}
navClose.onclick = function(){
	nav.classList.remove("nav-visible");
}

/*cart show show/hide*/
var cartIcon = document.querySelector(".cart-icon");
var cart = document.querySelector(".cart");
var cartClose = document.querySelector(".cart-close")
cartIcon.onclick = function(){
	cart.classList.add("cart-visible");
}
cartClose.onclick = function(){
	cart.classList.remove("cart-visible");
}
/*place-order show/hide*/
var order = document.querySelector(".place-order");
var cartButton = document.querySelector(".cart-button"); 
var closeCart = document.querySelector(".place-order-close")

cartButton.onclick = function(){
	order.classList.add("place-order-visible");
}
closeCart.onclick = function(){
	order.classList.remove("place-order-visible");
}

/*modal show/hide*/
var modal = document.querySelector(".modal");
var modalClose = document.querySelector(".modal-close");
var modalContent = document.querySelector(".modalContent");

modalClose.onclick = function(){
	modal.style.display = "none";
}

/*pictures in gallery*/
$('.gallery__items').gallerify({
	margin:3,
	mode: 'default',
});

/* scrollTop button*/
var top = document.querySelector(".scroll-top");

window.onscroll = function(){	
	var pageY = window.pageYOffset || document.documentElement.scrollTop;
	var innerHeight = document.documentElement.clientHeight;
	if(pageY > innerHeight){
		top.style.display = "block";
	}
	else{
		top.style.display = "none";
	}
};

top.onclick = function(){
	console.log(5)
	$('body').animate({'scrollTop': 0},1000);
	$('html').animate({'scrollTop': 0},1000);
}


/*slow scroll page*/
var page = $('html, body');
$('a[href^="#"]').click(function(){

var target = $(this).attr('href');
console.log(target)
page.animate({scrollTop: $(target).offset().top}, 800);
return false;
});

}