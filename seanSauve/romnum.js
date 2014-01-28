if(!module.parent) { // Put any code you need to test your functions in here:

// Example:
console.log("53 in roman numerals is: " + decimalToRoman(55963));
//console.log("X in roman numeral is :" + romanToDecimal('MMMMCMXCIX'));  

}
/*-----------------------------------------------------------------------------
     

     Nothing needs to be in this area


-----------------------------------------------------------------------------*/
function decimalToRoman (decNumber) {
	var romNumeral = "";

  	// Implement here!
  	//function removes value from decimal as it builds roman string

  	while (decNumber - 1000 >= 0) {
  		romNumeral += 'M';
  		decNumber -= 1000;
  	}
  	while (decNumber - 100 >= 0){
  		if (decNumber - 900 >= 0){
  			romNumeral += 'CM'
  			decNumber -= 900;
  		};
  		if (decNumber - 500 >= 0){
  			romNumeral += 'D';
  			decNumber -= 500;
  		}
  		if (decNumber - 400 >= 0){
  			romNumeral += 'CD';
  			decNumber -= 400;
  		}
  		if (decNumber- 100 >= 0){
  			romNumeral += 'C';
  			decNumber -= 100;
  		}
  	}
  	while (decNumber - 10 >= 0){
  		if (decNumber - 90 >= 0){
  			romNumeral += 'XC';
  			decNumber -= 90;
  		}
  		if (decNumber - 50 >= 0){
  			romNumeral += 'L';
 			decNumber -= 50;
  		}
  		if (decNumber - 40 >= 0){
  			romNumeral += 'XL';
  			decNumber -= 40;
  		}
  		if (decNumber - 10 >= 0){
  			romNumeral += 'X';
  			decNumber -= 10;
  		}
  	}
  	while (decNumber - 1 >= 0){
  		if (decNumber - 9 >= 0){
  			romNumeral += 'IX';
  			decNumber -= 9;
  		}
  		if (decNumber - 5 >= 0){
  			romNumeral += 'V';
 			decNumber -= 5;
  		}
  		if (decNumber - 4 >= 0){
  			romNumeral += 'IV';
  			decNumber -= 4;
  		}
  		if (decNumber - 1 >= 0){
  			romNumeral += 'I';
  			decNumber -= 1;
  		}
  	}
  	return romNumeral;
}

function romanToDecimal (romNumeral) {
	var decNumber = 0;

	while (charInStr('M',romNumeral)){
		if (romNumeral[0] === 'C'){
			decNumber += 900;
			romNumeral = romNumeral.substring(2);
		}

		else{
			decNumber += 1000;
			romNumeral = romNumeral.substring(1);
		}
	}

	while (charInStr('D', romNumeral)){
		if (romNumeral[0] === 'C'){
			decNumber += 400;
			romNumeral = romNumeral.substring(2);
		}

		else{
			decNumber += 500;
			romNumeral = romNumeral.substring(1);
		}
	}
	while (charInStr('C', romNumeral)){
		if (romNumeral[0] === 'X'){
			decNumber += 90;
			romNumeral = romNumeral.substring(2);
		}

		else{
			decNumber += 100;
			romNumeral = romNumeral.substring(1);
		}

	} 
	while (charInStr('L', romNumeral)){
		if (romNumeral[0] === 'X'){
			decNumber += 40;
			romNumeral = romNumeral.substring(2);
		}

		else{
			decNumber += 50;
			romNumeral = romNumeral.substring(1);
		}
	}

	while (charInStr('X', romNumeral)){
		if (romNumeral[0] === 'I'){
			decNumber += 9;
			romNumeral = romNumeral.substring(2);
		}

		else{
			decNumber += 10;
			romNumeral = romNumeral.substring(1);
		}
	}
	while (charInStr('V', romNumeral)){
		if (romNumeral[0] === 'I'){
			decNumber += 4;
			romNumeral = romNumeral.substring(2);
		}

		else{
			decNumber += 5;
			romNumeral = romNumeral.substring(1);
		}
	}

	while (romNumeral[0] === 'I'){
		decNumber +=1;
		romNumeral = romNumeral.substring(1);
	}

  	// Implement here!

  	return decNumber;
}

function charInStr(chr, str){
	if (str.indexOf(chr) === -1) return false;
	else return true;
}

// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;