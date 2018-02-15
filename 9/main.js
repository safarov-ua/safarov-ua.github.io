var started = true;
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var score = document.getElementById("score");
var sequence = document.querySelector(".sequence");
var scoreValue = 0;
var animation;
var squares = [];
var squareCreate;
var counter = 0;
var inSequence = 0;

function Square(){
	/*create random square*/
	this.x = Math.floor(Math.random()*((canvas.clientWidth-20)+1));
	this.y =0;
	this.speed = Math.floor(1 + Math.random()*(6+1 - 1));
	this.color = "rgb("+Math.floor(Math.random()*(255+1))+","+Math.floor(Math.random()*(255+1)) + 
	","+Math.floor(Math.random()*(255+1))+")";

	squares.push(this);
}

function showSequence(){
	sequence.textContent = inSequence +" in a row";
	sequence.classList.toggle("showSequence");
	setTimeout(function(){sequence.classList.toggle("showSequence")},1300);
}

function animate() {
	counter++;
	if(counter==60){
		squareCreate = setTimeout(function(){var square = new Square()},
		Math.floor(150+Math.random()*(1200 - 150)));
		counter=0;
	}

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');  
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);

  /*squares draw*/
  for(var i = 0;i<squares.length;i++){
  	ctx.fillStyle = squares[i].color;
  	ctx.fillRect(squares[i].x, squares[i].y, 20, 20);
  	squares[i].y += squares[i].speed;

  	if(squares[i].y >= canvas.clientHeight) {
    	squares.splice(i,1);
    	i--;
    	inSequence = 0;
  	}
  } 

  /*squares click*/
  canvas.onmousedown = function(evt){
  	var rect = canvas.getBoundingClientRect();
  	var mouseX = evt.clientX - rect.left;
		var mouseY = evt.clientY - rect.top;
		for(var i = 0;i<squares.length;i++){
			if((mouseX>=squares[i].x&&mouseX<=squares[i].x+20)&&
				(mouseY>=squares[i].y&&mouseY<=squares[i].y+20)){
				squares.splice(i,1);
				inSequence++;
				scoreValue+=1;
				score.textContent = scoreValue;
				if(inSequence>0 && inSequence%5==0){
  				showSequence();	
  			}
				break;
			}
		}
  }

  animation = requestAnimationFrame(animate);

  /*stop game*/
  stopButton.onclick = function(){
  	cancelAnimationFrame(animation);
  	clearInterval(squareCreate);
  	ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);
  	started = false;
  	scoreValue = 0;
  	score.textContent = scoreValue;
  	squares = [];
  	inSequence=0;
	}
}

	/*start game*/
startButton.onclick = function(){
  if(started == false){
  	requestAnimationFrame(animate);
  	started = true;
  }
}

document.body.onload = animate;
