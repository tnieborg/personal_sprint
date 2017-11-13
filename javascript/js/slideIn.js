'use strict';

function move() {
	var timeline = document.getElementsByClassName("image--left")[0].offsetHeight;
	console.log(timeline);
	console.log(scrollY);

	if (scrollY > timeline) {
		document.getElementsByClassName("image--left")[0].style.right = "430px";
		document.getElementsByClassName("image--left")[0].style.opacity = "1";
	} else {
		document.getElementsByClassName("image--left")[0].style.right = "600px";
		document.getElementsByClassName("image--left")[0].style.opacity = "0";
	}
	
	if (scrollY+100 > timeline) {
		document.getElementsByClassName("image--right")[0].style.left = "40px";
		document.getElementsByClassName("image--right")[0].style.opacity = "1";
	} else {
		document.getElementsByClassName("image--right")[0].style.left = "170px";
		document.getElementsByClassName("image--right")[0].style.opacity = "0";
	}

	if (scrollY-200 > timeline) {
		document.getElementsByClassName("image--left")[1].style.right = "430px";
		document.getElementsByClassName("image--left")[1].style.opacity = "1";
	} else {
		document.getElementsByClassName("image--left")[1].style.right = "600px";
		document.getElementsByClassName("image--left")[1].style.opacity = "0";
	}
}