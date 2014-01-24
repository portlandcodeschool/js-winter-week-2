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

function decimalToRoman (decimalNumber) {
  //Variables
  var romNumeral = "";
  var numeralLetterArray = [];
  var numeralCountArray =[];
  var romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  var valueArray = [1, 5, 10, 50, 100, 500, 1000];
  
  //Prepare arrays
  zeroArray(numeralCountArray, valueArray.length - 1);
  emptyStringArray(numeralLetterArray, valueArray.length - 1);

  //Divide number for numerals and retrurn
  numberSplit(999);
  //numberSplit(decimalNumber);

  letterAssembler(numeralCountArray, romanNumerals);
  romNumeral = numeralAssembler(numeralLetterArray);

  return romNumeral;


  //-------- Support Functions for decimalToRoman ----------
	function numberSplit(decimalNumber) {
		//Test for thousands
		if (divides(decimalNumber, valueArray[5]) >= 1)  {
			numeralCountArray[5] = divides(decimalNumber, valueArray[5]);
			decimalNumber -= (numeralCountArray[5] * valueArray[5]);
			//console.log(valueArray[5] + " " + decimalNumber);
		} 

		//Test for five hundreds
		if (divides(decimalNumber, valueArray[4]) >= 1) {
			numeralCountArray[4] = divides(decimalNumber, valueArray[4]);
			decimalNumber -= (numeralCountArray[4] * valueArray[4]);
		}

		//Test for hundreds
		if ((divides(decimalNumber, valueArray[3]) >= 1) && (divides(decimalNumber, valueArray[3]) != 4)){
			numeralCountArray[3] = divides(decimalNumber, valueArray[3]);
			decimalNumber -= (numeralCountArray[3] * valueArray[3]);
		} else if ((divides(decimalNumber, valueArray[5]) >= 1) && (divides(decimalNumber, valueArray[5]) === 4)){
			//Manual Roman numeral overide if the condition is four or nine
			numeralLetterArray[3] = 'ID'
		} 

		//Test for fifties
		if (divides(decimalNumber, valueArray[2]) >= 1){
			numeralCountArray[2] = divides(decimalNumber, valueArray[2]);
			decimalNumber -= (numeralCountArray[2] * valueArray[2]);
		}

		//Test for tens
		if (divides(decimalNumber, valueArray[1]) >= 1){
			numeralCountArray[1] = divides(decimalNumber, valueArray[1]);
			decimalNumber -= (numeralCountArray[1] * valueArray[1]);
		}

		//Test for ones
		if (divides(decimalNumber, valueArray[0]) >= 1){
			numeralCountArray[0] = divides(decimalNumber, valueArray[0]);
			decimalNumber -= (numeralCountArray[0] * valueArray[0]);
		}
		//outputArray(numeralCountArray);
	}


  function numeralAssembler(array){
  	var numeralString = '';

  	for (var i = array.length - 1; i >= 0; i--){
  		numeralString += array[i];
  	}
  	return numeralString;
  }


  function letterAssembler(countArray, letterArray) {
  	for ( var i = countArray.length - 1 ; i >= 0; i--){
  		for (var index = 0; index <= countArray[i] - 1; index++){
  			if (countArray[i] != 4){
  				numeralLetterArray[i] += letterArray[i];
  			}
  		}
  	}
  	//outputArray(numeralLetterArray);
  }


  function divides(numerator, denominator){
  	return Math.floor(numerator / denominator);
  }


  function zeroArray(array , number){
  	for (var i = 0; i < number; i++ ){
  		array[i] = 0;
  	}
  }


  function emptyStringArray(array , number){
  	for (var i = 0; i < number; i++ ){
  		array[i] = '';
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