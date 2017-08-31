window.onload = function(){
	let canvas= document.getElementById("canvas");
	let ctx = canvas.getContext("2d");
	let color = document.getElementById("color");
	let size = document.getElementById("size");
	let clear  =document.getElementById("clear");
	let arrCircles = [];
	let circlesDeleted = [];
	let backgroundColor = document.getElementById("background");
	let mirrorEffect = document.getElementById("check");
	let increase = document.getElementById("increase");
	let decrease = document.getElementById("decrease");
	let backward = document.getElementById("backward");
	let forward = document.getElementById("forward");
	let save = document.getElementById("save");
	let load = document.getElementById("load");	
	let localStorageText = document.getElementById("saved");
	ctx.strokeStyle = color.value;
	

	class Circle{
		constructor(x,y,color,size,scale, mirror){
			this.x = x;
			this.y = y;
			this.color = color;
			this.size = size;
			this.scale = scale;
			this.mirror = mirror;
			arrCircles.push(this);
		}
		draw(){
       		ctx.beginPath();
        	ctx.arc(this.x,this.y,this.size*this.scale,0,2*Math.PI);
        	ctx.fillStyle=this.color;
        	ctx.fill();
        	if(this.mirror == true){
        		ctx.beginPath();
        		ctx.arc(canvas.width - this.x,this.y,this.size*this.scale,0,2*Math.PI);
        		ctx.fillStyle=this.color;
        		ctx.fill();
        		ctx.beginPath();
        		ctx.arc(this.x,canvas.height - this.y,this.size*this.scale,0,2*Math.PI);
        		ctx.fillStyle=this.color;
        		ctx.fill();
        		ctx.beginPath();
        		ctx.arc(canvas.width - this.x,canvas.height -this.y,this.size*this.scale,0,2*Math.PI);
        		ctx.fillStyle=this.color;
        		ctx.fill();
        	}	
    	}    			
	}

   	/*---Mouse position and draw---*/
   	canvas.onmousemove = function(evt){
   		
   		let rect = canvas.getBoundingClientRect();
		let x = event.clientX - rect.left;
		let y = event.clientY - rect.top;

    	if (evt.buttons) {
    		circlesDeleted = [];
    		let circle = new Circle(x, y,color.value, size.value,1,mirrorEffect.checked);
        	circle.draw();  	 
    	}
	}

	/*---Change canvas background---*/
	backgroundColor.onchange = function(){
		canvas.style.backgroundColor = backgroundColor.value;
	}

	/*---Clear canvas---*/
	clear.onclick = function(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		arrCircles = [];
		circlesDeleted = [];
	}

	/*---Steps actions---*/
	backward.onclick = function(){
		ctx.clearRect(0,0,canvas.width,canvas.height);

		let a = arrCircles.length;

		circlesDeleted.push(arrCircles[a-1]);
		arrCircles.pop();

		for(let i = 0;i < arrCircles.length; i++){
			arrCircles[i].draw();
		}
	}
	forward.onclick = function(){
		if(circlesDeleted.length > 0){
			ctx.clearRect(0,0,canvas.width,canvas.height);

			let a = circlesDeleted.length;

			arrCircles.push(circlesDeleted[a-1]);
			circlesDeleted.pop();

			for(let i = 0;i < arrCircles.length; i++){
				arrCircles[i].draw();
			}
		}
	}

	/*--Increase decrease---*/
	increase.onclick = function(){			
		ctx.clearRect(0,0,canvas.width,canvas.height);

		for(let i = 0;i < arrCircles.length; i++){
			arrCircles[i].scale += 0.5;
			arrCircles[i].draw();
		}		
	}
	decrease.onclick = function(){			
		ctx.clearRect(0,0,canvas.width,canvas.height);
		for(let i = 0;i < arrCircles.length; i++){
			if(arrCircles[i].scale >= 1.5){
				arrCircles[i].scale -= 0.5;
				arrCircles[i].draw(); 
			}
			else{
				arrCircles[i].draw();
			}	
		}
	}

	/*---Save canvas image---*/
	save.onclick = function(){
		if(arrCircles.length > 0){
			toggle(localStorageText, "Saved!");

			let b = localStorage.setItem("Circle",JSON.stringify(arrCircles));
		}
		else{
			toggle(localStorageText, "Nothing to save");
		}
	}

	/*---Toogle text---*/
	function toggle(elem, text){
			elem.innerHTML = text;
			elem.classList.add("storage-text-visible");
			setTimeout(function(){
                elem.classList.remove("storage-text-visible");
                elem.innerHTML = "";
                }, 2000);
	}

	/*---Load canvas image---*/
	load.onclick = function(){
		let a = (JSON.parse(localStorage.getItem("Circle")));
		if(localStorage.length > 0){
			for(let i = 0;i < a.length; i++){
				let circle = new Circle(a[i].x, a[i].y, a[i].color, a[i].size , a[i].scale, a[i].mirror);
				arrCircles.push(circle);
			}
			for(let b = 0; b < arrCircles.length; b++){
				arrCircles[b].draw();
				toggle(localStorageText, "Loaded!");	
			}	
		}
		else{
			toggle(localStorageText, "Nothing to load");
		}
		localStorage.clear();			
	}
}