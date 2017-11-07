var seconds;
var minutes;
var hours;
var color;
var timeReset;

function askTime() {

	var hourscheck;
	var minutescheck;
	var secondscheck;

	seconds = prompt("How many seconds?");
	minutes = prompt("How many minutes?");
	hours = prompt("How many hours?");

	if( seconds % 1 === 0 && seconds != "true" && seconds != "false" ) {
		secondscheck = true;
	} else {
		alert("seconds is not a number");
		askTime();
	}

	if( minutes % 1 === 0 && minutes != "true" && minutes != "false" ) {
		minutescheck = true;
	} else {
		alert("minutes is not a number");
		askTime();
	}

	if( hours % 1 === 0 && hours != "true" && hours != "false" ) {
		hourscheck = true;
	} else {
		alert("hours is not a number");
		askTime();
	}

	if( secondscheck == true && minutescheck == true && hourscheck == true && seconds < 60 && minutes < 60 && hours < 60) {
		if( seconds != null && minutes != null && hours != null ) {
			document.getElementsByClassName('timer')[0].innerHTML = timerZero(hours) + ':' + timerZero(minutes) + ':' + timerZero(seconds);
			clearInterval(timeReset);
			timeReset = setInterval(timer, 1000);
		} else {
			alert("You cancelled one of the options");
		}
	} else {
		alert("the time is more than 60");
		askTime();
	}
}

function timerZero(time) {
	if( time < 10 ) {
		time = '0' + time;
	}

	return time;
}

function timer() {

	if( hours === -1 && minutes === -1 && seconds === -1 ) {
		hours = 0;
		sound();
	}

	seconds--;

	if( seconds === -1 ) {
		seconds = 59;
		minutes--;
	}

	if( minutes === -1) {
		minutes = 59;
		hours--;
	}

	if( hours === -1 ) {
		seconds = 0;
		minutes = 0;
		hours = 00;

		flicker();

	} else if( hours === 0 && minutes === 0 && seconds < 10 ) {
		document.getElementsByClassName('timer')[0].style.color = 'red';
		document.getElementsByClassName('timer')[0].style.fontSize = '36px';
	} else {
		document.getElementsByClassName('timer')[0].style.color = 'black';
		document.getElementsByClassName('timer')[0].style.fontSize = '24px';
	}

	document.getElementsByClassName('timer')[0].innerHTML = timerZero(hours) + ':' + timerZero(minutes) + ':' + timerZero(seconds);

	

}

function flicker() {
	if( color === false ) {
		document.getElementsByClassName('timer')[0].style.color = 'black';
		color = true;
	} else {
		document.getElementsByClassName('timer')[0].style.color = 'red';
		color = false;
	}
}

function sound() {
	console.log("ALARM");
	//document.getElementsByClassName('timer')[1].innerHTML = '<embed src="sounds/siren.mp3" hidden="true" autostart="true" loop="false" />'
}