// Colin Lebens
// Intermediate Assignment
// js-winter-week-2

// Part 1

function hasStr(array, str) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === str) { return true; }
	}

	return false;
}

/*
var inArray1 = ["dog", "cat"];
console.log(hasStr(inArray1, "dog"));
console.log(hasStr(inArray1, "bird"));
*/

// Part 2

function arrayCopy(srcArray) {
	var outputArray = [];
	srcArray.forEach( function(item) {
		outputArray.push(item);
	})
	return outputArray;
}

var array1 = [1, 2, 3];
var array2 = arrayCopy(array1);
array2.push(4);
console.log("------Part 2 Output------");
console.log("Array 1: " + array1);
console.log("Array 2: " + array2);

// Part 3

function evenNumbers(srcArray) {
	var outputArray = [];

	for (var i = 0; i < srcArray.length; i++) {
		if(srcArray[i] % 2 === 0) { outputArray.push(srcArray[i]); }
	}

	return outputArray;
}

/*
var array3 = [1, 3, 4, 7, 2, 9, 8, 6, 4, 3];
console.log(array3);
console.log(evenNumbers(array3));
*/