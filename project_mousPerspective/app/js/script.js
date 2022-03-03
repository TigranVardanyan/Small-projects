'use strict'

document.onmousemove = mouseMove;
var pageHeight = window.innerHeight;
var pageWith = window.innerWidth;
var header = document.getElementById('header');
var headerHeight = header.clientHeight; 
var mouse = document.getElementById('mouse');
var scalePrecent;
function mouseMove(e) {
	console.log(e.pageX + " " + e.pageY);
	scalePrecent = e.pageY/headerHeight;
	mouse.style.transformOrigin = "center 0";
	mouse.style.transform = "scale("+scalePrecent*0.7+")";
	mouse.style.top = +e.pageY*0.35*0.35 + "px";
	mouse.style.left = +e.pageX-124 + "px";
}