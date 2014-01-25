if(!module.parent) { // Put any code you need to test your functions in here:

// Example:
console.log("1 in roman numerals is: " + decimalToRoman(1)); 
console.log("53 in roman numerals is: " + decimalToRoman(53)); 
console.log("4 in roman numerals is: " + decimalToRoman(4));  
console.log("9 in roman numerals is: " + decimalToRoman(9)); 
console.log("500 in roman numerals is: " + decimalToRoman(500)); 
console.log("90 in roman numerals is: " + decimalToRoman(90));
console.log("40 in roman numerals is: " + decimalToRoman(40));
console.log("900 in roman numerals is: " + decimalToRoman(900)); 
console.log("999 in roman numerals is: " + decimalToRoman(999)); 

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
  zeroArray(numeralCountArray, valueArray.length);
  emptyStringArray(numeralLetterArray, valueArray.length - 1);

  //Divide number for numerals and retrurn
  numberSplit(decimalNumber);

  letterAssembler(numeralCountArray, romanNumerals);
  romNumeral = numeralAssembler(numeralLetterArray);

  return romNumeral;


  //-------- Support Functions for decimalToRoman ----------
  function numberSplit(decimalNumber){
  	sortSplit(1000, 6);
  	sortSplit(500, 5);
  	sortSplit(100, 4, 'IM', 'ID');
  	sortSplit(50, 3);
  	sortSplit(10, 2, 'IC', 'IL');
  	sortSplit(5, 1);
  	sortSplit(1, 0, 'IX', 'IV');

  	//outputArray(numeralCountArray);
	  //outputArray(numeralLetterArray);
  }

	function sortSplit (value, countIndex, overrideString1, overrideString2){
		if ((divides(decimalNumber, value) >= 1) && (divides(decimalNumber, value) != 4)){
			numeralCountArray[countIndex] = divides(decimalNumber, value);
      if (decimalNumber % value === 0) { decimalNumber = 0;}
		}else if ((divides(decimalNumber, value) >= 1) && (divides(decimalNumber, value) === 4)){
			//Manual Roman numeral overide if the condition is four or nine
			//Check to see if number is a 4 or 9 and apply set numbers
      if (decimalNumber % value === 0) { decimalNumber = 0;}
			if (numeralCountArray[countIndex + 1] >= 1){
				numeralCountArray[countIndex + 1] = 0;
				numeralCountArray[countIndex] = 0;
				numeralLetterArray[countIndex] = overrideString1;
			} else {
				numeralLetterArray[countIndex] = overrideString2;
				numeralCountArray[countIndex + 1] = 0;
				numeralCountArray[countIndex] = 0;
			}
		} 
    decimalNumber -= (numeralCountArray[countIndex] * value);
    //console.log("This is the decimal number: "+ decimalNumber);
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
      //console.log("This is index " + i + " with value "+ array[i]);
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