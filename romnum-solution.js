if(!module.parent) { // Put any code you need to test your functions in here:

// Example:
console.log("19 in roman numerals is: " + decimalToRoman(19)); 
console.log(decimalToRoman(19) + " in decimal is " + romanToDecimal(decimalToRoman(19))); 

}

function decimalToRoman (decNumber) {
  var romNumeral = "";

  // Figure out how many of each digit rank
  var thousands = Math.floor(decNumber / 1000);
  var hundreds  = Math.floor(decNumber % 1000 / 100);
  var tens      = Math.floor(decNumber % 100 / 10);
  var ones      = Math.floor(decNumber % 10);

  // for thousands we just add M tokens at the beginning of the string
  for (var i = thousands; i > 0; i -= 1)
    romNumeral += "M";

  /* Now we take care of each digit rank one at a time. The logic is the same
     for each, so we factor it out into a helper function and pass in the
     required set of tokens along with the rank count.
  */
  romNumeral += digitToRoman(hundreds, "CM", "D", "CD", "C");
  romNumeral += digitToRoman(tens, "XC", "L", "XL", "X");
  romNumeral += digitToRoman(ones, "IX", "V", "IV", "I");

  return romNumeral;

  function digitToRoman (digitCount, nineSymb, fiveSymb, fourSymb, oneSymb) {
    var romanSubString = "";

    /* The trick here is that we add the biggest possible roman numeral token
       first. As we do so we decrement the remaining per rank digit count.
       This code does more checks than it really needs to (example: if we've
       already added a nine symbol we know we're done adding symbols for that
       particular rank), but I went with simplicity over maximum efficiency.
    */
    if (digitCount === 9) {
      romanSubString += nineSymb;
      digitCount -= 9;
    } else if (digitCount >= 5) {
      romanSubString += fiveSymb;
      digitCount -= 5;
    } else if (digitCount === 4) {
      romanSubString += fourSymb;
      digitCount -= 4;
    }
    while (digitCount > 0) {
      romanSubString += oneSymb;
      digitCount -= 1;
    }

    return romanSubString;
  }
}

function romanToDecimal (romNumeral) {
  var decNumber = 0;
  var current, previous;

  /* I decided to handle the first character outside of the for loop.
     This is because the loop references back to the previous character,
     and the first character has no previous character. This could have been
     checked for/handled within the loop, but I felt like this was simpler.
     This is also why the loop starts with index 1 instead of index 0.
  */
  decNumber += decValueOf(romNumeral[0]);

  for (var i = 1; i < romNumeral.length; i += 1) {
    current  = decValueOf(romNumeral[i]);
    previous = decValueOf(romNumeral[i - 1]);

    /* If you think about roman numerals, you realize that they always go
       from largest to smallest, left to right, *unless* they're using
       "subtractive notation", that is, things like IV and XL for 9 and 40.
       So, if the current character is greater than the last, we know we're
       dealing with subtractive notation, and we should (1) delete the last
       value we added to the sum and (2) Add the current minus the previous
       to the sum. We could have simplified this to:

       decNumber += current - 2 * previous;

       But again, clarity is often preferable to maximum terseness.
    */

    if (current > previous) {
      decNumber -= previous;
      decNumber += current - previous;
    } else {
      decNumber += current;
    }

  }

  return decNumber;

  function decValueOf (numeral) {
    // This is just a helper function to convert individual roman characters to
    // their decimal value.

    switch (numeral) {
      case 'M':
        return 1000;
      case 'D':
        return 500;
      case 'C':
        return 100;
      case 'L':
        return 50;
      case 'X':
        return 10;
      case 'V':
        return 5;
      case 'I': 
        return 1;
      default:
        return 0;
    }
  }

}

// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;