document.body.onload = function(){ 
	/*preloader hide*/
	var preloader = document.querySelector(".preloader");
	setTimeout(function(){preloader.style.display = "none"},1000);
	/*info show*/
	
	function showInfo(text){
		var infoBlock = document.querySelector(".info");
		infoBlock.textContent = text;
		infoBlock.style.display = "block";		
		setTimeout(function(){
			infoBlock.style.display = "none"
		},2000);
	}
	
	var buttonToCart = document.querySelectorAll(".product__to-cart");
	var modalButtonToCart = document.querySelector(".modal-description__button");

	for(var i = 0; i<buttonToCart.length; i++){
		buttonToCart[i].onclick = function(){showInfo("Товар добавлен в корзину")};
	}
	
	modalButtonToCart.onclick = function(){showInfo("Товар добавлен в корзину")};


	/*carousel*/

	$(".header__slider").slick({
		autoplay: true,
		dots: true,
		arrows: false,
		responsive: [
    {
      breakpoint: 480,
      settings: {
        dots: false,
      }
    },
  ]
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
var cartClose = document.querySelector(".cart-close");

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
/*if ukraine delivery show town*/
var delivery = document.querySelectorAll(".delivery-change");

for(var i = 0; i<delivery.length; i++){
	delivery[i].onchange = function(){

	var adress = document.querySelectorAll(".form__group-hide");

		if(this.value == "delivery"){
			for(var j = 0;j<adress.length;j++){
				adress[j].style.display = "block";
			}			
		}
		else{
			for(var j = 0;j<adress.length;j++){
				adress[j].style.display = "none";
			}
		}
	}
}

	
/*---modal show/hide---*/
var modal = document.querySelector(".modal");
var modalClose = document.querySelector(".modal-close");
var modalContent = document.querySelector(".modalContent");


window.onclick = function(evt){
	if(evt.target == modal || evt.target == modalClose){
		modal.style.display = "none";
	}
}
/*---constructor---*/
var shape = document.querySelector(".constructor__form");
var shapeVariations = document.querySelectorAll(".constructor__properties-shape");
var handleChoose = document.querySelector("#handle-choose");
var stoppersChoose = document.querySelector("#stoppers-choose");
var constructorImg = document.querySelector(".constructor__properties-img");
var price = 1000;


for(var j = 0; j<shapeVariations.length; j++){ //shape choose
	shapeVariations[j].onchange = function(){
		var shapeActive = shape.classList[1];
		shape.classList.remove(shapeActive);
		shape.classList.add("constructor__form-"+this.value);
	}
}


handleChoose.onchange = function(){
	var handle = document.querySelector(".handle");
	if(handleChoose.checked == true){
		handle.style.display = "block";		
	}
	else{
		handle.style.display = "none";
	}
}
stoppersChoose.onchange = function(){
	if(stoppersChoose.checked == true){
		price+= 100;
	}
	else{
		price -= 100;
	}
}
var boardImg = document.querySelector(".constructor__forms-img");


constructorImg.oninput = function(){
	boardImg.setAttribute("src", constructorImg.value);
}

var rotateRight = document.querySelector(".constructor__properties-right");
var rotateLeft = document.querySelector(".constructor__properties-left");
var degress = 0;
rotateRight.onclick = function(){
	var boardImgSrc = boardImg.getAttribute("src");
	if(boardImgSrc == ''){
		console.log(degress);
	}
	else{
		console.log(degress);
		degress += 90;
		degress == 360 ? degress = 0 : degress = degress;
		boardImg.style.transform = "rotate("+degress+"deg)";
		console.log(degress)
	}
}

rotateLeft.onclick = function(){
	var boardImgSrc = boardImg.getAttribute("src");
	if(boardImgSrc == ''){
		console.log(degress);
	}
	else{
		console.log(degress);
		degress -= 90;
		degress == -360 ? degress = 0 : degress = degress;
		boardImg.style.transform = "rotate("+degress+"deg)";

	}
}

var rotateImg = document.querySelectorAll(".constructor__properties-size");

for(var i = 0; i<rotateImg.length; i++){
	rotateImg[i].onchange = function(){


		if(this.value == "width"){
			boardImg.style.width = "100%";
			boardImg.style.height = "auto";			
		}
		else{
			boardImg.style.width = "auto";
			boardImg.style.height = "100%";
		}
	}
}

var imgPadding = document.querySelectorAll(".constructor__properties-padding");
for(var j = 0; j< imgPadding.length; j++){
	imgPadding[j].onchange = function(){
		var a = this.dataset.direction;
		if(a == "top"){
			shape.style.paddingTop = this.value+"px";
		}
		else if(a == "right"){
			shape.style.paddingRight = this.value+"px";
		}
		else if(a == "bottom"){
			shape.style.paddingBottom = this.value+"px";
		}
		else if(a == "left"){
			shape.style.paddingLeft = this.value+"px";
		}
	}
}
var constructorButton = document.querySelector(".constructor__properties-button");
var constructorOrder = document.querySelector(".constructor__order");
var constructorOrderClose = document.querySelector(".constructor__order-close");

constructorButton.onclick = function(){
	constructorOrder.style.left = 0
}
constructorOrderClose.onclick = function(){
	constructorOrder.style.left = "100%";
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

	$('body').animate({'scrollTop': 0},1000);
	$('html').animate({'scrollTop': 0},1000);
}

/*comments add*/
var commentsShow = document.querySelector(".comment-button");
var commentsBlock = document.querySelector(".comment-add");
var commentClose = document.querySelector(".comment-add__close");
commentsShow.onclick = function(){
	commentsBlock.style.display = "block";
	this.style.display = "none";	
}
commentClose.onclick = function(){
	commentsBlock.style.display = "none";
	commentsShow.style.display = "block";	
}
/*slow scroll page*/
var page = $('html, body');
$('a[href^="#"]').click(function(){

var target = $(this).attr('href');

page.animate({scrollTop: $(target).offset().top}, 800);
return false;
});

}