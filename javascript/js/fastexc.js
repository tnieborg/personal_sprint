'use strict';

function checkodd(numb) {
	for(var i = 0; i <= numb; i++) {
		if( i % 2 === 0 ) {
			console.log('even');
		} else {
			console.log('odd');
		}
	}
}
console.log(checkodd(20))

function reverse(numb) {
	numb = numb + '';
	return numb.split('').reverse().join('');
}
console.log(reverse(25683));

function largest() {
	var numb1 = parseInt(document.getElementById('numb1').value);
	var numb2 = parseInt(document.getElementById('numb2').value);
	var numb3 = parseInt(document.getElementById('numb3').value);
	var numb4 = parseInt(document.getElementById('numb4').value);
	var numb5 = parseInt(document.getElementById('numb5').value);

	var choice = [0, numb1, numb2, numb3, numb4, numb5];
	var largest = choice[0];

	for (var i = 0; i < choice.length; i++) {
		if (choice[i] > largest ) {
			largest = choice[i];
		}
	}
	
	
	alert(largest);
}