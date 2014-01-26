if(!module.parent) { // Put any code you need to test your functions in here:

// Example:
// console.log("1 in roman numerals is: " + decimalToRoman(1)); 
// console.log("53 in roman numerals is: " + decimalToRoman(53)); 
// console.log("4 in roman numerals is: " + decimalToRoman(4));  
// console.log("9 in roman numerals is: " + decimalToRoman(9)); 
// console.log("500 in roman numerals is: " + decimalToRoman(500)); 
// console.log("90 in roman numerals is: " + decimalToRoman(90));
// console.log("40 in roman numerals is: " + decimalToRoman(40));
// console.log("900 in roman numerals is: " + decimalToRoman(900)); 
// console.log("999 in roman numerals is: " + decimalToRoman(999)); 


console.log("IMICIX in roman numerals is: " + romanToDecimal('IMICIX'));
console.log("D in roman numerals is: " + romanToDecimal('D'));
console.log("IV in roman numerals is: " + romanToDecimal('IV')); 
console.log("LIII in roman numerals is: " + romanToDecimal('LIII'));
console.log("IM in roman numerals is: " + romanToDecimal('IM'));
console.log("III in roman numerals is: " + romanToDecimal('III'));
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

function romanToDecimal (romanNumeral) {
  var decNumber = 0;
  var romanNumeralLetters = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  var newValueArray = [];
  var numeralArray = [];

  zeroArray(newValueArray, romanNumeralLetters.length);
  emptyStringArray(numeralArray, romanNumeral.length - 1);
  numeralToArray(romanNumeral);

  searchAndSort(numeralArray);

  decNumber = sumArray(newValueArray);

  return decNumber;

  //-------- Support Functions for romanToDecimal ----------
  function searchAndSort(romanNumeral){
    for (var i = 0; i < romanNumeral.length; i++){
      for (var index = 0; index < romanNumeralLetters.length; index++){
        if ((romanNumeral[i] === 'I') && (romanNumeral[i + 1] != 'I')){
            switch (romanNumeral[i + 1]){
                case 'M':
                  romanNumeral.shift();
                  romanNumeral.shift();
                  newValueArray.unshift(900);
                  outputArray(romanNumeral);
                  break;
                case 'D':
                  romanNumeral.shift();
                  romanNumeral.shift();
                  newValueArray.unshift(400);
                  break;
                case 'C':
                  romanNumeral.shift();
                  romanNumeral.shift();
                  newValueArray.unshift(90);
                  break;
                case 'L':
                  romanNumeral.shift();
                  romanNumeral.shift();
                  newValueArray.unshift(40);
                  break;
                case 'X':
                  romanNumeral.shift();
                  romanNumeral.shift();
                  newValueArray.unshift(9);
                  outputArray(romanNumeral);
                  break;
                case 'V':
                  romanNumeral.shift();
                  romanNumeral.shift();
                  newValueArray.unshift(4);
                  break;
                default:
                  romanNumeral.shift();
                  newValueArray.unshift(1); ;
            }
          }  else {
            switch (romanNumeral[i]){
                case 'M':
                  romanNumeral.shift();
                  newValueArray.unshift(1000);
                  break;
                case 'D':
                  romanNumeral.shift();
                  newValueArray.unshift(500);
                  break;
                case 'C':
                  romanNumeral.shift();
                  newValueArray.unshift(100);
                  break;
                case 'L':
                  romanNumeral.shift();
                  newValueArray.unshift(50);
                  break;
                case 'X':
                  romanNumeral.shift();
                  newValueArray.unshift(10);
                  break;
                case 'V':
                  romanNumeral.shift();
                  newValueArray.unshift(5);
                  break;
                case 'I':
                  romanNumeral.shift();
                  newValueArray.push(1);
                  break;
                 default: ;
          }
        }
      } 
    }
    //outputArray(newValueArray);
    //outputArray(romanNumeral);
  }

  function sumArray(array){
    var sum = 0;

    for (var i = 0; i < array.length; i++){
      sum += array[i];
    }
    return sum;
  }


  function zeroArray(array , number){
    for (var i = 0; i < number; i++ ){
      array[i] = 0;
    }
  }


  function numeralToArray(romanNumeral){
    for (var i = 0; i < romanNumeral.length; i++){
        numeralArray[i] = romanNumeral[i];
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


// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;







