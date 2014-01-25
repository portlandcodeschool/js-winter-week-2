if(!module.parent) { // Put any code you need to test your functions in here:

// Example:
console.log("207 in roman numerals is: " + decimalToRoman(207)); 
console.log("999 in roman numerals is: " + decimalToRoman(999));  
console.log("49 in roman numerals is: " + decimalToRoman(49));
console.log("4 in roman numerals is: " + decimalToRoman(4)); 

console.log("XXXIX in decimals is: " + romanToDecimal("XXXIX"));
console.log("IV in decimals is: " + romanToDecimal("IV"));
console.log("CM in decimals is: " + romanToDecimal("CM"));
console.log("LIV in decimals is: " + romanToDecimal("LIV"));

}
/*-----------------------------------------------------------------------------
     

     Nothing needs to be in this area


-----------------------------------------------------------------------------*/
function decimalToRoman (decNumber) {
	var romNumeral = "";
/*
I is 1
V is 5
X is 10
L is 50
C is 100
D is 500
M is 1000
No numeral 4 times in a row, rather pops in front of next up numeral IIII becomes IV
For the numbers 9, 90, 900 need to subtract from next highest numeral: VIV becomes IX
*/

	var numerals = [1000, 500, 100, 50, 10, 5, 1];
	var count = [];
	var x = decNumber;
	numerals.forEach(function (value, index){
		var y = Math.floor(x/value)
		count[index] = y
		// console.log("pre: " + y);
		x -= (y*value);
		// console.log("post: " + x);
	});
	// console.log(count);

	var symbol = ["M", "D", "C", "L", "X", "V", "I"]; //array with symbols arrainged to matched array with count in it
	count.forEach(function (value, index, array){
		var x = value; //variable to use in while loop, not sure if necessary but better safe than sorry
		while (x > 0){
			//case for the numbers 9, 90, 900
			if (((index===5 && value===1) && array[6]===4) || ((index===3 && value===1) && array[4]===4) || ((index===1 && value===1) && array[2]===4)){
				romNumeral = romNumeral + symbol[index + 1] + symbol[index - 1];
				array[index + 1] = 0;
				break; //can break from while loop since curent conversion is complete
			} 
			romNumeral += symbol[index]; 
			//case for the numbers 4, 40, and 400
			if ((index===2 && value===4) || (index===4 && value===4) || (index===6 && value===4)){
				romNumeral += symbol[index-1];
				break; //can break from while loop since curent conversion is complete
			}
			x--;
		}
	});
	return romNumeral;
}

function romanToDecimal (romNumeral) {
 	var decNumber = 0;

 	/*
 	I is 1
	V is 5
	X is 10
	L is 50
	C is 100
	D is 500
	M is 1000
 	Will read string into an aray left to right and act accordingly
 	Need to be careful with 4, 40, 400, 9, 90, 900
 	4: IV	40: XL	400: CD 
 	9: IX 	90: XC 	900: CM
 	*/

 	var numerals = []; //split Roman Numeral and place each numeral into an array as a seperate entry
 	for (i = 0; i < romNumeral.length; i++){
 		numerals.push(romNumeral.substr(i, 1));
 	}
 	//console.log(numerals);

 	var symbol = ["M", "D", "C", "L", "X", "V", "I"]; //array with symbols arrainged to matched array with count in it
 	var integers = [1000, 500, 100, 50, 10, 5, 1];

 	numerals.forEach(function (valueN, indexN, arrayN){ //looping through each roman numeral in numeral array
 		symbol.forEach(function (valueS, indexS, arrayS){ //looping through the symbols to match them to current Numeral and then add corresponding integer to total
 			if (valueN===valueS && arrayN[indexN+1]===arrayS[indexS-1]){ //4, 40, 400
 				decNumber += (integers[indexS-1]-integers[indexS]);
 				arrayN[indexN+1] = "";
 			}
 			else if (valueN===valueS && arrayN[indexN+1]===arrayS[indexS-2]){ //9, 90, 900
 				decNumber += (integers[indexS-2]-integers[indexS]);
 				arrayN[indexN+1] = "";
 			}
 			else if(valueN===valueS){
 				decNumber += integers[indexS];
 			}
 		});
 	});
 	return decNumber;
}

// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;