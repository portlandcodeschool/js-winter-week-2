//Part 1
function arraySearch(array, string){
	var contain = false; //will return false unless a match is found
	for (i=0; i<array.length; i++){
		if (string===array[i]){
			contain = true;
		}
	}
	return contain;
}
var words = ["these", "are", "a", "bunch", "of", "words"];
console.log(arraySearch(words, "of"));
console.log(arraySearch(words, "mail"));

//Part 2
var arr1 = [1,2,3,4,5,6];
function arrayCopy (array){ //function that copies an array with a forEach loop
	var copy = [];
	array.forEach(function (value, index){
		copy[index] = value;
	});
	return copy;
}
var arr2 = arrayCopy(arr1);
console.log("Original: " + arr1);
console.log("Copy: " + arr2);

arr1[0] = 22; //change 1st value in orig array to 22
console.log("Original with change: " + arr1);
console.log("Copy: " + arr2);

//Part 3
var arr3 = [1,2,3,4,5,6,7,8,9,10];
function evens (array){ //function that accepts an array and returns only its even numbers is a sep. array
	var onlyEven = []; //array that will contain only even numbers
	array.forEach(function (value){ //forEach loop that will only add even numbers to end of array
		if (value%2===0){
			 onlyEven.push(value);
		}
	});
	return onlyEven;
}
console.log(evens(arr3));
