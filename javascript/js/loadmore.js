'use strict';

setTimeout(hide, 100);

function load() {
	var height = document.getElementById("hide").offsetHeight;
	
	if( height === 0 ) {
		document.getElementById("button").innerHTML = "Load less";
		document.getElementById("hide").style.height = "400px";
	} else {
		document.getElementById("button").innerHTML = "Load more";
		document.getElementById("hide").style.height = "0px";
	}
}

function hide() {
	var height = document.getElementById("container").offsetHeight;

	if( height < 500 ) {
		document.getElementById("button").style.display = "none";
	} else {
		document.getElementById("hide").style.height = "0"
	}
}