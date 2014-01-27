if(!module.parent) { // Put any code you need to test your functions in here:

// Example:
console.log("\nTesting decimalToRoman function:\n")
console.log("53 in roman numerals is: " + decimalToRoman(53));  

//accepts any number of thousands (no commas, though; i.e. 100949 works but not 100,949), but gets crazy looking!!
console.log("3440 in roman numerals is: " + decimalToRoman(3440));
console.log("1010 in roman numerals is: " + decimalToRoman(1010));
console.log("2003 in roman numerals is: " + decimalToRoman(2003));

console.log("\nTesting romanToDecimal function:\n")
console.log("LIII in decimal notation is: " + romanToDecimal('LIII'));
console.log("MMMCDXL in decimal notation is: " + romanToDecimal('MMMCDXL'));
console.log("MX in decimal notation is: " + romanToDecimal('MX'));
console.log("MX in decimal notation is: " + romanToDecimal('MMIII'));
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

//Taking care of integers 1-9
  switch (romNumeral.substr(romNumeral.length-1, 1)) {
    case "I": case "V": break;
    case "X": if ( romNumeral.charAt(romNumeral.length-2) !== "I" ) {
      romNumeral = romNumeral + "0"; break;
    };
    default: romNumeral = romNumeral + "0";
  }
  romNumeral = romNumeral.replace('IX', '9');
  romNumeral = romNumeral.replace('IV', '4');
  romNumeral = romNumeral.replace('VIII', '8');
  romNumeral = romNumeral.replace('VII', '7');
  romNumeral = romNumeral.replace('VI', '6');
  romNumeral = romNumeral.replace('V', '5');
  romNumeral = romNumeral.replace('III', '3');
  romNumeral = romNumeral.replace('II', '2');
  romNumeral = romNumeral.replace('I', '1');

 //Taking care of the 10s digit
  switch (romNumeral.substr(romNumeral.length-2, 1)) {
    case "X": case "L": break;
    case "C": if ( romNumeral.charAt(romNumeral.length-3) !== "X" ) {
      romNumeral = [romNumeral.slice(0, romNumeral.length-1) + "0" + romNumeral.slice(romNumeral.length-1)].join('');
    }; break;
    default: romNumeral = [romNumeral.slice(0, romNumeral.length-1) + "0" + romNumeral.slice(romNumeral.length-1)].join('');
  }
  romNumeral = romNumeral.replace('XC', '9');
  romNumeral = romNumeral.replace('XL', '4');
  romNumeral = romNumeral.replace('LXXX', '8');
  romNumeral = romNumeral.replace('LXX', '7');
  romNumeral = romNumeral.replace('LX', '6');
  romNumeral = romNumeral.replace('L', '5');
  romNumeral = romNumeral.replace('XXX', '3');
  romNumeral = romNumeral.replace('XX', '2');
  romNumeral = romNumeral.replace('X', '1');

//Taking care of the 100s digit
  switch (romNumeral.substr(romNumeral.length-3, 1)) {
    case "C": case "D": break;
    case "M": if ( romNumeral.charAt(romNumeral.length-3) !== "C" ) {
      romNumeral = [romNumeral.slice(0, romNumeral.length-2) + "0" + romNumeral.slice(romNumeral.length-2)].join('');
    }; break;
    default: romNumeral = [romNumeral.slice(0, romNumeral.length-2) + "0" + romNumeral.slice(romNumeral.length-2)].join('');
  }
  romNumeral = romNumeral.replace('CM', '9');
  romNumeral = romNumeral.replace('CD', '4');
  romNumeral = romNumeral.replace('DCCC', '8');
  romNumeral = romNumeral.replace('DCC', '7');
  romNumeral = romNumeral.replace('DC', '6');
  romNumeral = romNumeral.replace('D', '5');
  romNumeral = romNumeral.replace('CCC', '3');
  romNumeral = romNumeral.replace('CC', '2');
  romNumeral = romNumeral.replace('C', '1');

//Taking care of the thousands
  var thousands = (romNumeral.split('M').length - 1);
  romNumeral = romNumeral.replace(/M*/, thousands)
  decNumber = parseInt(romNumeral, 10);

  return decNumber;
}

// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;