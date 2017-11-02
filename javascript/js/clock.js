var i = 0;

function IntervalSet() {
	setInterval(CreateHands, 1);
}
setInterval(CheckQuote, 1000);

function CreateHands() {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	var millisecond = now.getMilliseconds();
	var msec = document.getElementById('millisecond');
	var sec = document.getElementById('second');
	var min = document.getElementById('minute');
	var h = document.getElementById('hour');

	//hour
	hour = hour % 12;
	hourAngle = 360 / 12 * hour;
	
	//minute
	minuteAngle = 360 / 60 * minute;

	// second
	secondAngle = 360 / 60 * second;

	// millisecond
	millisecondAngle = 360 / 1000 * millisecond;

	msec.style.transform = 'rotate('+millisecondAngle+'deg)';
	sec.style.transform = 'rotate('+secondAngle+'deg)';
	min.style.transform = 'rotate('+minuteAngle+'deg)';
	h.style.transform = 'rotate('+hourAngle+'deg)';


}

function CheckQuote() {
	var now = new Date();
	var second = now.getSeconds();
	var minute = now.getMinutes();

	if(minute === 0 && second === 0 || minute === 30 && second === 0) {
		let x = document.getElementsByClassName('quote').length;
		let d = i;

		document.getElementsByClassName('quote')[d].style.display = 'none';
		i = Math.floor(Math.random() * x);

		if(d !== i) {
			document.getElementsByClassName('quote')[i].style.display = 'block';
		} else {
			CheckQuote();
		}
	}
}

function ShowQuote() {
	let x = document.getElementsByClassName('quote').length;
	i = Math.floor(Math.random() * x);
	document.getElementsByClassName('quote')[i].style.display = 'block';
}