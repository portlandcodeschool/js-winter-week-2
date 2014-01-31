//JavaScript Week 2 Wednesday Assignment
//Intermediates Assignment

//Part 1
//Write a function that accepts an array and a string. 
//Have it return true if the string is in the array, otherwise it should return false.

//Got it to work! Thanks for the hints!

// var string = "this is the string";
// var array = ["string", "another string", "this is the string"];

var string = 4;
var array = [1, 2, 3];

function arrayFunction(arr, str) {


	//if true print true

		for (var i = 0; i < arr.length; i++){
			// console.log(arr[i]);
			if (arr[i] === str) {
			return true;
			} 		
		}

			return false;
	//else print false 

		// for (var i = 0; i < arr.length; i ++){
		// 	// console.log(arr[i]);
		// 	/*if (arr[i] !== str)*/ {
		// 	return false
		// 	}
		// }
}

console.log(arrayFunction(array, string));


//Part 2
//Write a function that returns an exact copy of an existing array
//Demonstrate that the newly created array is different from the original array by changing a 
//value in the first array and observing that the second array is unaffected.

var array = [1, 2, 3, 4, 5];
var newArray = [];

function returnNewArray(element, index, array) {
	return newArray.push(element);
}

array.forEach(returnNewArray);

console.log("The original array is: " + array);
console.log("The copy of the original array is: " + newArray);
array.push(6); //pushes a 6 to the original array
console.log("This is the changed array once a new element is added to the original array: " + array); //prints out new array
console.log("This is the copy of the original array, unaffected by the push to the original array: " + newArray);

//Part 3
//Write a function that accepts an array of numbers and returns an array containing only 
//the even integers from the original array.

var array = [1, 2, 3, 4, 5, 6, 7, 8];
var evenArray = [];

function returnEvenArray(element, index, array) {
	if (element % 2 === 0) {
		return evenArray.push(element);
	}
}

array.forEach(returnEvenArray);

console.log(evenArray);


