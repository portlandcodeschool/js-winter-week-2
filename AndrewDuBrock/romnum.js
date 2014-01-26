if(!module.parent) { // Put any code you need to test your functions in here:

// Example:
console.log("53 in roman numerals is: " + decimalToRoman(53));  

//accepts any number of thousands (no commas, though; i.e. 100949 works but not 100,949), but gets crazy looking!!
console.log("6449 in roman numerals is: " + decimalToRoman(6449));

console.log("MMMMMMCDXLIX in decimal notation is: " + romanToDecimal('MMMMMMCDXLIX'));

}
/*-----------------------------------------------------------------------------
     

     Nothing needs to be in this area


-----------------------------------------------------------------------------*/
function decimalToRoman (decNumber) {
  var romNumeral = [];
  var stringNum = decNumber + ''
  var numArray = stringNum.split('')
  for ( i = numArray.length; i > 0; i-- ) {
    if ( numArray.length === i ) {
      switch (numArray[i-1]) {
        case "1": romNumeral.push("I"); break;
        case "2": romNumeral.push("II"); break;
        case "3": romNumeral.push("III"); break;
        case "4": romNumeral.push("IV"); break;
        case "5": romNumeral.push("V"); break;
        case "6": romNumeral.push("VI"); break;
        case "7": romNumeral.push("VII"); break;
        case "8": romNumeral.push("VIII"); break;
        case "9": romNumeral.push("IX"); break;
        default: break;
      }
    }
    if ( numArray.length - 1 === i ) {
      switch (numArray[i-1]) {
        case "1": romNumeral.unshift("X"); break;
        case "2": romNumeral.unshift("XX"); break;
        case "3": romNumeral.unshift("XXX"); break;
        case "4": romNumeral.unshift("XL"); break;
        case "5": romNumeral.unshift("L"); break;
        case "6": romNumeral.unshift("LX"); break;
        case "7": romNumeral.unshift("LXX"); break;
        case "8": romNumeral.unshift("LXXX"); break;
        case "9": romNumeral.unshift("XC"); break;
        default: break;
      }
    }
    if ( numArray.length - 2 === i ) {
      switch (numArray[i-1]) {
        case "1": romNumeral.unshift("C"); break;
        case "2": romNumeral.unshift("CC"); break;
        case "3": romNumeral.unshift("CCC"); break;
        case "4": romNumeral.unshift("CD"); break;
        case "5": romNumeral.unshift("D"); break;
        case "6": romNumeral.unshift("DC"); break;
        case "7": romNumeral.unshift("DCC"); break;
        case "8": romNumeral.unshift("DCCC"); break;
        case "9": romNumeral.unshift("CM"); break;
        default: break;
      }
    }
    if ( numArray.length - 3 === i ) {
      for ( i = Math.floor(decNumber/1000); i > 0; i--) {
        romNumeral.unshift("M"); 
      }
    }
  }  
  romNumeral = romNumeral.join('');
  return romNumeral;
}

function romanToDecimal (romNumeral) {
  var decNumber = 0;
  romNumeral = romNumeral.replace('IX', '9').replace('XC', '9').replace('CM', '9');
  romNumeral = romNumeral.replace('IV', '4').replace('XL', '4').replace('CD', '4');
  romNumeral = romNumeral.replace('VIII', '8').replace('LXXX', '8').replace('DCCC', '8');
  romNumeral = romNumeral.replace('VII', '7').replace('LXX', '7').replace('DCC', '7');
  romNumeral = romNumeral.replace('VI', '6').replace('LX', '6').replace('DC', '6');
  romNumeral = romNumeral.replace('V', '5').replace('L', '5').replace('D', '5');
  romNumeral = romNumeral.replace('III', '3').replace('XXX', '3').replace('CCC', '3');
  romNumeral = romNumeral.replace('II', '2').replace('XX', '2').replace('CC', '2');
  romNumeral = romNumeral.replace('I', '1').replace('X', '1').replace('C', '1');
  var thousands = (romNumeral.split('M').length - 1);
  romNumeral = romNumeral.replace(/M*/, thousands)
  decNumber = parseInt(romNumeral, 10);

  return decNumber;
}

// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;