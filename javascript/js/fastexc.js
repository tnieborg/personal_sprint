'use strict';

function checkodd(numb) {
	for(var i = 0; i <= numb; i++) {
		if( i % 2 === 0 ) {
			console.log("even");
		} else {
			console.log("odd");
		}
	}
}
console.log(checkodd(20))

function reverse(numb) {
	numb = numb + "";
	return numb.split("").reverse().join("");
}
console.log(reverse(25683));