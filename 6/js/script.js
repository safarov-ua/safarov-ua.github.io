var burger = document.querySelector(".burger-menu");
var mobMenu = document.querySelector(".mobile-nav");
var cancel = document.querySelector(".cancel")
burger.onclick = function(){
	mobMenu.style.left = "0";
}
cancel.onclick = function(){
	mobMenu.style.left = "-240px";
}