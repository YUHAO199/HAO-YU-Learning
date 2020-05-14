// var colors=["rgb(255, 0, 0)",
// "rgb(255, 255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 0, 255)"]
var numberodsquare=6;
var colors=generaterandom(numberodsquare);
var square=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
colordisplay.textContent=pickedcolor;
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");


easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numberodsquare=3;
	colors=generaterandom(numberodsquare);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for (var i = 0; i <square.length; i++) {
		if (colors[i]) {
			square[i].style.background=colors[i];
		}else{
			square[i].style.display="none";
		}
	}

});


hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numberodsquare=6;
	colors=generaterandom(numberodsquare);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for (var i = 0; i <square.length; i++) {
			square[i].style.background=colors[i];
			square[i].style.display="block";
		
	}
});




reset.addEventListener("click",function(){
colors=generaterandom(numberodsquare);
pickedcolor=pickcolor();
colordisplay.textContent=pickedcolor;
this.textContent="New Colors";
messagedisplay.textContent=" ";
for (var i = 0; i<square.length;i++){
	square[i].style.background=colors[i];}
	h1.style.background="steelblue";
});




for (var i = 0; i<square.length;i++){
	square[i].style.background=colors[i];

	square[i].addEventListener("click",function(){
		var clicked=this.style.background;
		if (clicked===pickedcolor) {
			messagedisplay.textContent="Correct";
			reset.textContent="Play again?";
			changecolor(clicked);
			h1.style.background=clicked;
		}else{
			this.style.background="#232323";
			messagedisplay.textContent="Try again";
		}
	})
}

function generaterandom(num){
	var arr=[];
	for (var i =0; i < num; i++) {
		arr.push(randomcolor());

	}
return arr;
}

function pickcolor(){
var random=Math.floor(Math.random()*colors.length);
return colors[random];
}

function randomcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}


function changecolor(color){
	for (var i = 0; i<=square.length-1; i++) {
		square[i].style.background=color;
	}
}



