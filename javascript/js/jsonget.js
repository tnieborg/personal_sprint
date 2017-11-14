function ParseIt(jsonLink){
	const XMLReq = new XMLHttpRequest(); // a new request
	XMLReq.open( 'GET', jsonLink, false );
	XMLReq.send( null );
	return XMLReq.responseText;
}

function parseText() {
	let text = JSON.parse(ParseIt('js/hobby.json'));
	let i = 0;
	if( document.getElementsByClassName('jsonText')[i].innerHTML === '' ) {
		for( i = 0; i < text.Hobbies.length; i++ ) {
			document.getElementsByClassName('jsonText')[i].innerHTML = '<ul><li class="listItem">Name: ' + text.Hobbies[i].name + '</li><li class="listItem">Since: ' + text.Hobbies[i].since + '</li><li class="listItem">When: ' + text.Hobbies[i].When + '</li><li class="listItem">Why: ' + text.Hobbies[i].Why + '</li></ul>';	
		}
		setTimeout(ColorChange, 100);
	} else {
		for( i = 0; i < text.Hobbies.length; i++ ) {
			document.getElementsByClassName('jsonText')[i].innerHTML = null;	
		}
		setTimeout(ColorChange, 100);
	}
}

function ColorChange() {
	let listColor = document.getElementsByClassName('listItem').length;

	for(let i = 0; i < listColor; i++ ) {
		if( i % 2 === 0) {
			document.getElementsByClassName('listItem')[i].style.backgroundColor = color();
			document.getElementsByClassName('listItem')[i].style.color = color();
		} else {
			document.getElementsByClassName('listItem')[i].style.backgroundColor = color();
			document.getElementsByClassName('listItem')[i].style.color = color();
		}
	}	
}

function color() {
	let letter = 'ABCDEF0123456789';
	let color = '#';

	for( let i = 0; i < 6; i++ ) {
		color += letter[Math.floor(Math.random() * 16)];
	}
	console.log(color);
	return color;
}
