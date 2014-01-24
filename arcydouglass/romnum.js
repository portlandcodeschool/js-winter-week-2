if(!module.parent) { // Put any code you need to test your functions in here:

// Example:
console.log("53 in roman numerals is: " + decimalToRoman(53));  

}
/*-----------------------------------------------------------------------------
     

     Nothing needs to be in this area


-----------------------------------------------------------------------------*/
//Standard Roman Numerals
//I	1
//V	5
//X	10
//L	50
//C	100
//D	500
//M	1,000

function decimalToRoman (decNumber) {
  var romNumeral = "";

  var numeralLetterArray = [];
  var numeralCountArray =[];
  var romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  var valueArray = [1, 5, 10, 50, 100, 500, 1000];
  
  zeroArray(numeralCountArray, valueArray.length - 1);
  zeroArray(numeralLetterArray, valueArray.length - 1);
  //outputArray(numeralCountArray);
  //outputArray(numeralArray);

  numberSplit(999);
  //numberSplit(decimalNumber);

  valueAssembler(numeralCountArray, romanNumerals);


  romNumeral = numeralAssembler(numeralLetterArray);

  return romNumeral;


  //-------- Support Functions for decimalToRoman ----------
	function numberSplit(decimalNumber) {

		if (divides(decimalNumber, valueArray[5]) >= 1){
			numeralCountArray[5] = divides(decimalNumber, valueArray[5]);
			decimalNumber -= (numeralCountArray[5] * valueArray[5]);
			//console.log(valueArray[5] + " " + decimalNumber);
		}

		if (divides(decimalNumber, valueArray[4]) >= 1){
			numeralCountArray[4] = divides(decimalNumber, valueArray[4]);
			decimalNumber -= (numeralCountArray[4] * valueArray[4]);
		}

		if (divides(decimalNumber, valueArray[3]) >= 1){
			numeralCountArray[3] = divides(decimalNumber, valueArray[3]);
			decimalNumber -= (numeralCountArray[3] * valueArray[3]);
		}

		if (divides(decimalNumber, valueArray[2]) >= 1){
			numeralCountArray[2] = divides(decimalNumber, valueArray[2]);
			decimalNumber -= (numeralCountArray[2] * valueArray[2]);
		}

		if (divides(decimalNumber, valueArray[1]) >= 1){
			numeralCountArray[1] = divides(decimalNumber, valueArray[1]);
			decimalNumber -= (numeralCountArray[1] * valueArray[1]);
		}

		if (divides(decimalNumber, valueArray[0]) >= 1){
			numeralCountArray[0] = divides(decimalNumber, valueArray[0]);
			decimalNumber -= (numeralCountArray[0] * valueArray[0]);
		}

		outputArray(numeralCountArray);
	}

  function numeralAssembler(array){
  	var numeralString = '';

  	for (var i = 0; i < array.length; i++){
  		numeralString += array[i];
  	}
  	return numeralString;
  }

  function valueAssembler(countArray, letterArray) {
  	var string = "";

  	for ( var i = countArray.length - 1 ; i >= 0; i--){
  		for (var index = 0; index <= countArray[i]; index++){
  			if (countArray[i] >= 1){
  				numeralLetterArray[i] += letterArray[i];
  			}
  		}
  	}
  	outputArray(numeralLetterArray);
  }

  function divides(numerator, denominator){
  	return Math.floor(numerator / denominator);
  }

  function remainder(numerator, denominator){
  	return numerator % denominator;
  }

  function zeroArray(array , number){
  	for (var i = 0; i < number; i++ ){
  		array[i] = 0;
  	}
  }

  function outputArray(array){
  	for (var i = 0; i < array.length; i++){
  		console.log(array[i]);
  	}
  }

}


//************** romanToDecimal Function ********************

function romanToDecimal (romNumeral) {
  var decNumber = 0;

  // Implement here!

  return decNumber;
}

// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;