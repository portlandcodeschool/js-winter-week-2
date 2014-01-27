//Assignment 04: js-winter-week-2
//Javascript class - Arrays
//Arcy Douglass
//January 23, 2014

//intermediate.js


//Part 1
console.log("\nPart 1: ");
var colorArray = ['red', 'blue', 'yellow', 'green']
outputArray(colorArray);

searchArray(colorArray, 'red');
searchArray(colorArray, 'cyan');
searchArray(colorArray, 'green');


function searchArray (array, string) {
  for (var i = 0; i < array.length; i++){
    if (array[i] === string){
    	console.log( "\nThe color " + string + " is in the array!")
    	return true;
    }
  }
  console.log( "\nSorry, the color " + string + " is not in the array.")
  return false;
}



//Part 2
console.log("\nPart 2: ");
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("\nHere are the initial contents of the array: ");
outputArray(numberArray);

var newNumberArray = [];

copyArray(numberArray, newNumberArray);

numberArray.push(11);

function copyArray(array, newName){
	for (var i = 0; i < array.length; i++){
		newName[i] = array [i];
	}
}

console.log("\nHere are the copied contents of the second array: ");
outputArray(newNumberArray);




//Part 3
console.log("\nPart 3: ");

var newEvenArray = [];
var newIndex = 0;

copyEvenArray(numberArray, newEvenArray);

function copyEvenArray(array, newName){
	for (var i = 0; i < array.length; i++){
		if (array[i] % 2 === 0){
			newName[newIndex] = array[i];
			newIndex++;
		}
	}
}

console.log("\nHere are the even copied contents of the second array: ");
outputArray(newEvenArray);




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


