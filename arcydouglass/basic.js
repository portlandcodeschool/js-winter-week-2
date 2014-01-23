//Assignment 04: js-winter-week-2
//Javascript class - Arrays
//Arcy Douglass
//January 23, 2014

//basic.js


//Part 1
console.log("\nPart 1: ");
var numberArray = ['1', '2', '3'];
outputArray(numberArray);

//Part 2
console.log("\nPart 2: ");
numberArray.push('4');
outputArray(numberArray);

//Part 3
console.log("\nPart 3: ");
numberArray.shift(1);
outputArray(numberArray);

//Part 4
console.log("\nPart 4: ");
outputArray(numberArray);

//Part 5
console.log("\nPart 5: ");
numberArray.unshift('0.5');
outputArray(numberArray);

//Part 6
console.log("\nPart 6: ");
numberArray.pop();
outputArray(numberArray);

//Part 7
console.log("\nPart 7: ");
outputArray(numberArray);

//----------------------------------------------
//Name: outputArray
//Function: Outputs contents of array to the console
//Arguments:  array- an array
//Returns: null
//----------------------------------------------
function outputArray (array) {
  for (var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}
