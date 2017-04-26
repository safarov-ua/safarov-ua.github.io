(function () {

	var value = document.getElementById("value");
	var button = document.getElementById("button");
	var window1 = document.getElementById("window1");
	var window2 = document.getElementById("window2");
	var window3 = document.getElementById("window3");
	var dollar1 = document.getElementById("x1");
	var dollar2 = document.getElementById("x2");
	var dollar5 = document.getElementById("x3");
	var select = document.getElementById("select");
	var spinMusic = document.getElementById("spin");
	var winMusic = document.getElementById("win");
	var winComb = document.getElementsByClassName("winComb");
	//var jackpotVideo = document.getElementById("jackpot");
	/*------------------------------*/
	/*var piki = 0;
	var trefi = 0;
	var buben = 0;
	var heart = 0;
	var piki3 = 0;
	var jackpot = 0;
	function sum(){
		return(piki+trefi+buben+heart+piki3+jackpot);
	}*/
/*-----autoplay-----------*/
	var autoplay = document.getElementById("autoplay");
	var buttonAutoplay = document.getElementById("buttonautoplay");
	var play;
	autoplay.onchange = function(){
	if(autoplay.checked == true){
	play = setInterval(function(){
    button.onclick();
	},1000);
	button.disabled = true;
	}
	else{			
	clearInterval(play);
	button.disabled = false;
	}
}
/*------slotChange---------*/
	select.onchange = function(){
		var image = document.getElementsByClassName("windows");
		var winComb = document.getElementsByClassName("wincomb-img");
		if(select.value == "Fruit machine"){
		for(var i = 0 ;i < image.length; i++){
			image[i].style.backgroundImage = "url(images/slotStyle1/slot.png)";		
		}
		for(var a = 0; a < winComb.length; a++){
			winComb[a].setAttribute("src","images/slotStyle1/comb"+(a+1)+ ".png");
		}
	}
		else if(select.value == "Cards machine"){
		for(var i = 0 ;i < image.length; i++){
			image[i].style.backgroundImage = "url(images/slotStyle2/slot.png)";		
		}
		for(var a = 0;a  <winComb.length; a++){
			winComb[a].setAttribute("src","images/slotStyle2/comb"+(a+1)+ ".png");
		}
		}
	}
/*--------volume on or off----------*/
		function musicPlay(track){
			var mute = document.getElementById("mute");
			if(mute.checked == true){
				track.play();
			}
		}
	var multiplier;

	button.onclick = function(){
		if(dollar1.checked){
				multiplier = 1;
			}
			else if(dollar2.checked){
				multiplier = 2;
			}
			else if(dollar5.checked){
				multiplier = 5;
			}

		var valueVal = value.value;
		if(valueVal < multiplier){
			alert("Недостаточно средств на счете");
		}
		else{
		/*-------animation clear--------------*/
		for(var i = 0;i < winComb.length; i++){
				winComb[i].style = "animation: ";
			}

		/*-----------Show win sum-------------*/	
		function winPotShow(x){
			var win = document.createElement("div");
			win.innerHTML = multiplier*x;
			win.style = 'position:absolute; border-radius:10%; padding:30px; text-align:center; animation:win 4s ease-in-out;'				
			document.body.appendChild(win);
			function removeWin(){
				win.remove()
			}
			setTimeout(removeWin, 3900);
		}

		/*---------random for spin----------*/
			musicPlay(spinMusic);

			var random = (Math.random().toFixed(1))*(-1000);
			var random2 = (Math.random().toFixed(1))*(-1000);
			var random3 = (Math.random().toFixed(1))*(-1000);	

			valueVal = valueVal - multiplier;
			value.setAttribute('value', valueVal);
			window1.style.backgroundPosition = "-8px "+random+"px";
			window2.style.backgroundPosition = "215px "+random2+"px";
			window3.style.backgroundPosition = "105px "+random3+"px";

/*------------------------------------------------combinations win-------------------------------------------------*/

			if((random ==-100||random ==-400||random ==-700)&&(random2 ==0||random2 ==-300||random2 ==-800)&&
				(random3 ==-100||random3 ==-300||random3 ==-600||random3 ==-900)){
				value.setAttribute("value",valueVal+(multiplier*8));
				winPotShow(8);
				winComb[1].style.animation = "wincomb 1s linear";
				//trefi++
				//console.log("trefi=" + trefi);
				musicPlay(winMusic);
			}
			else if((random ==-600||random ==-800)&&(random2 ==-100||random2 ==-500||random2 ==-700)&&
				(random3 ==0||random3 ==-700||random3 ==-1000)){
				value.setAttribute("value",valueVal+(multiplier*15));
				winPotShow(15);
				winComb[2].style.animation = "wincomb 1s linear";
				//buben++
				//console.log("buben=" + buben);
				musicPlay(winMusic);
			}
			else if((random ==0||random ==-200)&&(random2 ==-400||random2 ==-900)&&(random3 ==-500||random3 ==-800)){
				value.setAttribute("value",valueVal+(multiplier*30));
				winPotShow(30);
				winComb[3].style.animation = "wincomb 1s linear";
				//heart++
				//console.log("heart=" + heart);
				musicPlay(winMusic);
			}
			else if((random ==-1000||random==-500)&&(random2 ==-1000||random2==-600)&&(random3 ==-200)){
				value.setAttribute("value",valueVal+(multiplier*50));
				winPotShow(50);
				winComb[4].style.animation = "wincomb 1s linear";
				//piki3++
				//console.log("piki3=" + piki3);
				musicPlay(winMusic);
			}
			else if((random ==-300||random ==-900)&&(random2 ==-200)&&(random3 ==-400)){
				value.setAttribute("value",valueVal+(multiplier*200));
				winPotShow(200);
				winComb[5].style.animation = "wincomb 1s linear";
				//jackpot++
				//console.log("jackpot=" + jackpot);
				musicPlay(winMusic);
			}
			else if(((random ==-1000||random==-500)&&(random2 ==-1000||random2==-600))||
				((random ==-1000||random==-500)&&(random3 ==-200))||
				((random2 ==-1000||random2==-600)&&(random3 ==-200))){
				value.setAttribute("value",valueVal+(multiplier*5));
				winPotShow(5);
				winComb[0].style.animation = "wincomb 1s linear";
				//piki++
				//console.log("2piki="+piki);
				musicPlay(winMusic);
			}

			
}
}
})();
