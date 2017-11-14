function ParseIt(jsonLink){
	var XMLReq = new XMLHttpRequest(); // a new request
	XMLReq.open( 'GET', jsonLink, false );
	XMLReq.send( null );
	return XMLReq.responseText;
}

function parseText() {
	let text = JSON.parse(ParseIt('js/hobby.json'));
	let i = 0;
	for( i = 0; i < text.Hobbies.length; i++ ) {
		document.getElementsByClassName('jsonText')[i].innerHTML = '<ul>Hobbies:<li class="listItem">Name: ' + text.Hobbies[i].name + '</li><li class="listItem">Since: ' + text.Hobbies[i].since + '</li><li class="listItem">When: ' + text.Hobbies[i].When + '</li><li class="listItem">Why: ' + text.Hobbies[i].Why + '</li></ul>';	
	}
	setTimeout(ColorChange, 100);
}

function ColorChange() {
	let listColor = document.getElementsByClassName('listItem').length;
	let i;
	for(i = 0; i < listColor; i++ ) {
		if( i % 2 === 0) {
			document.getElementsByClassName('listItem')[i].style.backgroundColor = 'blue';
			document.getElementsByClassName('listItem')[i].style.color = 'orange';
		} else {
			document.getElementsByClassName('listItem')[i].style.backgroundColor = 'orange';
			document.getElementsByClassName('listItem')[i].style.color = 'blue';		
		}
	}	
}
