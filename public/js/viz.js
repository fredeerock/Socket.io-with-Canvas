////////////////////
//CANVAS ANIMATION//
////////////////////

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var mx;
var my;

canvas.addEventListener('mousemove', getMousePos, false);
window.addEventListener('resize', setup, false );

window.onload = function() {
	setup();
	requestAnimationFrame(draw);
}

function getMousePos(event) {
	mx = event.clientX;
	my = event.clientY;
}

function drawMouse() {
	ctx.beginPath();
	ctx.arc(mx, my, 50, 0, 2*Math.PI);
	ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
	ctx.fill();
}

function setup(){
	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function draw(){
	drawMouse();
	ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
	requestAnimationFrame(draw);

	ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}



