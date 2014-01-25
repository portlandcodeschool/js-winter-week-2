if(!module.parent) { // Put any code you need to test your functions in here:

// Example:
console.log("538 in roman numerals is: " + decimalToRoman(538));
console.log("DXXXVIII in decimals is: " + romanToDecimal("DXXXVIII"));  

}
/*-----------------------------------------------------------------------------
     

     Nothing needs to be in this area


-----------------------------------------------------------------------------*/
// Good to 999, I'm not sure how to make it work past 3,999 with straight ASCII. Stuff gets confusing...
function decimalToRoman (decNumber) {
	var romNumeral = "",
// Split the number into two digit/arrays
 	    hundreds = Math.floor(decNumber / 100),
 	    tens = Math.floor((decNumber - (hundreds*100)) / 10),
  	    ones = decNumber % 10,
  	    hundredsArr = [],
  	    tensArr = [],
  	    onesArr = [];

 // Process the Hundreds Digit
  	if (hundreds >= 1 && hundreds <= 3 ) {
  		for (i = 1; i <= hundreds; i++) {
  			hundredsArr.push("C");
  		};  		
  	} else if (hundreds >=5 && hundreds <=8) {
  		hundredsArr.push("D");
  		for (i = 1; i <= hundreds-5; i++) {
  			hundredsArr.push("C");
  		};  
  	} else if (hundreds === 4) {
  		hundredsArr.push("CD")
  	} else if (hundreds === 9) {
  		onesArr.push("CM")
  	}

  // Process the Tens Digit
  	if (tens >= 1 && tens <= 3 ) {
  		for (i = 1; i <= tens; i++) {
  			tensArr.push("X");
  		};  		
  	} else if (tens >=5 && tens <=8) {
  		tensArr.push("L");
  		for (i = 1; i <= tens-5; i++) {
  			tensArr.push("X");
  		};  
  	} else if (tens === 4) {
  		tensArr.push("XL")
  	} else if (tens === 9) {
  		onesArr.push("XC")
  	}

// Process the Ones Digit
  	if (ones >= 1 && ones <= 3 ) {
  		for (i = 1; i <= ones; i++) {
  			onesArr.push("I");
  		};  		
  	} else if (ones >=5 && ones <=8) {
  		onesArr.push("V");
  		for (i = 1; i <= ones-5; i++) {
  			onesArr.push("I");
  		};  
  	} else if (ones === 4) {
  		onesArr.push("IV")
  	} else if (ones === 9) {
  		onesArr.push("IX")
  	}

//Bring it all together now!
  		   romNumeral = hundredsArr.join("") + tensArr.join("") + onesArr.join("");
	return romNumeral;
}

function romanToDecimal (romNumeral) {
	var decNumber = 0;




	for (i=romNumeral.length -1 ; i>=0; i--) {

		if (romNumeral[i] === "V" && romNumeral[i - 1] === "I") {
			decNumber += 3;
		} else if (romNumeral[i] === "X" && romNumeral[i - 1] === "I") {
			decNumber += 8;
		} else if (romNumeral[i] === "V") {
			decNumber += 5;
		} else if (romNumeral[i] === "I") {
			decNumber++
		} 

		if (romNumeral[i] === "L" && romNumeral[i - 1] === "X") {
			decNumber += 30;
		} else if (romNumeral[i] === "C" && romNumeral[i - 1] === "X") {
			decNumber += 80;
		} else if (romNumeral[i] === "L") {
			decNumber += 50;
		} else if (romNumeral[i] === "X" && romNumeral[i -1] !== "I") {
			decNumber += 10
		}

		if (romNumeral[i] === "D" && romNumeral[i - 1] === "C") {
			decNumber += 300;
		} else if (romNumeral[i] === "M" && romNumeral[i - 1] === "C") {
			decNumber += 800;
		} else if (romNumeral[i] === "D") {
			decNumber += 500;
		} else if (romNumeral[i] === "C" && romNumeral[i -1] !== "X") {
			decNumber += 100
		}

	}


// Implement here!
	
	return decNumber;
}

// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;