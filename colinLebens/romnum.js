if(!module.parent) { // Put any code you need to test your functions in here:

// Example:
var testValue=3498;
console.log(testValue + " in roman numerals is: " + decimalToRoman(testValue));  
console.log(decimalToRoman(testValue) + " in decimals is: " + romanToDecimal(decimalToRoman(testValue)));  

}
/*-----------------------------------------------------------------------------
     

     Nothing needs to be in this area


-----------------------------------------------------------------------------*/
function decimalToRoman (decNumber) {
  var romNumeral = "";

  // Implement here!
  while (decNumber > 0) {
  	
  	// If remaining amount is > 1000, add an M, decrease decNumber, and enter 
  	// next loop iteration

  	if (decNumber >= 1000) { 
  		romNumeral += "M";
  		decNumber -= 1000;
		continue;
  	}
  	
  	// If 900 <= remaining amount < 1000, add a CM, decrease decNumber, 
  	// and enter next loop iteration

  	if (decNumber >= 900) { 
  		romNumeral += "CM";
  		decNumber -= 900;
  		continue;
  	}
 
  	// If 500 <= remaining amount < 900, add an L, decrease decNumber, 
  	// and enter next loop iteration

  	if (decNumber >= 500) { 
  		romNumeral += "D";
  		decNumber -= 500;
  		continue;
  	}

  	// etc.
  	
  	if (decNumber >= 400) { 
  		romNumeral += "CD";
  		decNumber -= 400;
  		continue;
  	}

  	if (decNumber >= 100) { 
  		romNumeral += "C";
  		decNumber -= 100;
  		continue;
  	}

  	if (decNumber >= 90) { 
  		romNumeral += "XC";
  		decNumber -= 90;
  		continue;
  	}

  	if (decNumber >= 50) { 
  		romNumeral += "L";
  		decNumber -= 50;
  		continue;
  	}

  	if (decNumber >= 40) { 
  		romNumeral += "XL";
  		decNumber -= 40;
  		continue;
  	}

  	if (decNumber >= 10) { 
  		romNumeral += "X";
  		decNumber -= 10;
  		continue;
  	}

  	if (decNumber >= 9) { 
  		romNumeral += "IX";
  		decNumber -= 9;
  		continue;
  	}
  	if (decNumber >= 5) { 
  		romNumeral += "V";
  		decNumber -= 5;
  		continue;
  	}
  	if (decNumber >= 4) { 
  		romNumeral += "IV";
  		decNumber -= 4;
  		continue;
  	}
  	if (decNumber >= 1) { 
  		romNumeral += "I";
  		decNumber -= 1;
  		continue;
  	}

  }

  return romNumeral;
}

function romanToDecimal (romNumeral) {
  var decNumber = 0;

  // Implement here!
  var i = romNumeral.length - 1;


  // If I's on end, begin traversing I's and add one for each until
  // reach a non-I

  while (romNumeral[i] === "I") {
  	decNumber += 1;
  	i--;
  }

  
  // If V's on end, begin traversing V's and add 5 for each until
  // reach a non-V

  while (romNumeral[i] === "V") {
  	decNumber += 5;
  	i--;
  
  	// If I before last V, subtract 1 and traverse I
  	if (romNumeral[i] === "I") {
  		decNumber -= 1;
  		i--;
  	}
  }

  
  // If X's on end, begin traversing X's and add 10 for each until
  // reach a non-X

  while (romNumeral[i] === "X") {
  	decNumber += 10;
  	i--;
  
   	// If I before last X, subtract 1 and traverse I
 
  	if (romNumeral[i] === "I") {
  		decNumber -= 1;
  		i--;
  	}
  }

  // Remaining cases follow same logic:
  // Traverse reverse through the Roman Numeral String
  // subtract for X's before L's, X's, before C's, C's before D's, C's before M
  
  while (romNumeral[i] === "L") {
  	decNumber += 50;
  	i--;
  
	if (romNumeral[i] === "X") {
  		decNumber -= 10;
  		i--;
  	}
  }

  
  while (romNumeral[i] === "C") {
  	decNumber += 100;
  	i--;
  
  	if (romNumeral[i] === "X") {
  		decNumber -= 10;
  		i--;
  	}
  }

  while (romNumeral[i] === "D") {
  	decNumber += 500;
  	i--;
  
	if (romNumeral[i] === "C") {
  		decNumber -= 100;
  		i--;
  	}
  }

  while (romNumeral[i] === "M") {
  	decNumber += 1000;
  	i--;

  	if (romNumeral[i] === "C") {
  		decNumber -= 100;
  		i--;
  	}
  }

  return decNumber;
}

// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;