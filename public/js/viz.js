////////////////////
//CANVAS ANIMATION//
////////////////////

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var mx;
var my;

canvas.addEventListener('mousemove', drawMouse, false);
window.addEventListener('resize', setup, false );


window.onload = function() {
	setup();
	requestAnimationFrame(draw);
}

function getMousePos(event) {
	mx = event.clientX;
	my = event.clientY;
	
	console.log("mx: " + mx + " my:" + my);

}

function drawMouse() {
	ctx.beginPath();
	ctx.arc(event.clientX, event.clientY,50,0,2*Math.PI);
	ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
	ctx.fill();

}

function setup(){
	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	ctx.fillRect(0,0,canvas.width, canvas.height);
}

function draw(){
	ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
	requestAnimationFrame(draw);
}



