if(!module.parent) { // Put any code you need to test your functions in here:

var inputDigit = 100;
var testLoop = 1;
while(testLoop <= inputDigit){

if((romanToDecimal(decimalToRoman(inputDigit))-inputDigit) !== 0){
	console.log("SHIT!!!");
}	
console.log(decimalToRoman(testLoop),romanToDecimal(decimalToRoman(testLoop))-testLoop);

testLoop++;

}

}
/*-----------------------------------------------------------------------------

Nothing needs to be in this area


-----------------------------------------------------------------------------*/
function decimalToRoman (decNumber) {
  var romNumeral = "";
  // James' added variables
  var numDigits = decNumber.toString().length;
  var symArray = ['I','V','X','L','C','D','M'];
  var multiThou = "";
  // Implement here!
  
romNumeral = thouPlace(parseInt(decNumber.toString()[numDigits-4])) +
			 hundPlace(parseInt(decNumber.toString()[numDigits-3])) +
			 tensPlace(parseInt(decNumber.toString()[numDigits-2])) +
			 onesPlace(parseInt(decNumber.toString()[numDigits-1]));

if (numDigits-4 > 0){
	for(var iter = 0; iter < Math.pow(10,numDigits-4); iter++){
		multiThou += symArray[symArray.length-1];
	}
	romNumeral = multiThou+romNumeral;
}


// James' added functions
function onesPlace(ones){
	var  firstPower = '';
	if (!ones){
		firstPower="";
	}
	else if(ones <= 3){
		for(var i = 0; i<ones;i++){
			firstPower += symArray[0];
		}
	} else if (ones === 4){
		firstPower = symArray[0]+symArray[1];
	} else if (ones <= 8){
		firstPower = symArray[1];
		for(var j = 5; j < ones; j++){
			firstPower += symArray[0];
		}
	} else {
		firstPower = symArray[0]+symArray[2];
	}


	return firstPower;
}


function tensPlace(tens){
		var  secPower = '';
	if (!tens){
		secPower = "";
	}
	else if(tens <= 3){
		for(var i = 0; i<tens;i++){
			secPower += symArray[2];
		}
	} else if (tens === 4){
		secPower = symArray[2]+symArray[3];
	} else if (tens <= 8){
		secPower = symArray[3];
		for(var j = 5; j < tens; j++){
			secPower += symArray[2];
		}
	} else {
		secPower = symArray[2]+symArray[4];
	}


	return secPower;
}

function hundPlace(hund){
			var  thirdPower = '';
	if (!hund){
		thirdPower = "";
	}
	else if(hund <= 3){
		for(var i = 0; i<hund;i++){
			thirdPower += symArray[4];
		}
	} else if (hund === 4){
		thirdPower = symArray[4]+symArray[5];
	} else if (hund <= 8){
		thirdPower = symArray[5];
		for(var j = 5; j < hund; j++){
			thirdPower += symArray[4];
		}
	} else {
		thirdPower = symArray[4]+symArray[6];
	}


	return thirdPower;
}

function thouPlace(thou){
			var  plusPower = '';
		if (!thou || thou === 0){
			return "";
		}
		for(var i = 0; i<thou;i++){
			plusPower += symArray[6];
		}

	return plusPower;
}

// added funcs end here

  return romNumeral;
}

function romanToDecimal (romNumeral) {
  var decNumber = 0;
  // James' added variables
  var convArray = [['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]];
  // Implement here!
  romNumeral = romNumeral.toUpperCase().split(''); // converting string to array

while(romNumeral.length >= 1){
decNumber = decNumber + repSymbol(romNumeral[0],romNumeral[ 1],romNumeral[2]);
}

function repSymbol (a,b,c){
	var conVal;
	var numericA;
	var numericB;
// Check to make sure Array still exists

	convArray.forEach(function(value, index){
		if (a === value[0]){
			numericA = [value[1], index];
			conVal = value[1];
		} else if (b === value[0]){
			numericB = [value[1], index];
		}
	});
	if (!a){
		conVal = 0;
	}
	else if(!b && !c){
		conVal = numericA[0];
		romNumeral.shift();
	}
	else if(a === b && a === c){
		conVal = 3*conVal;
		romNumeral.shift();
		romNumeral.shift();
		romNumeral.shift();
	}else if (a === b){
		conVal = 2*conVal;
		romNumeral.shift();
		romNumeral.shift();
	}else if (numericB[0] > numericA[0] && numericB[1]-numericA[1] <=2 ) {
		conVal = numericB[0]-numericA[0];
		romNumeral.shift();
		romNumeral.shift();
	}else {
		conVal = numericA[0];
		romNumeral.shift();
	}
return conVal;

}

  return decNumber;
}


// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;