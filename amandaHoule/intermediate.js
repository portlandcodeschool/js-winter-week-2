// Javascript Winter Class - amanda houle
//  Week 2 - Wed, Intermediate Assignment

// Part 1

// Write a function that accepts an array and a string. Have it return true if the string is in the 
// array, otherwise it should return false.

var weatherConditions = ["sunny", "cloudy", "rainy", "hot", "humid", "dry", "clear" , "cold" , "snowy"];
var weatherToday = "poopy";
var weatherYesterday = "sunny";

function displayWeather (arr, str) {
	for(var i = 0; i < arr.length; i++) {
		if (arr[i] === str)
			return true; 
		} //else {                     // ** If I leave out the "else," a falsey outcome returns "undefined" instead of "false"
			//(arr[i] !== str)     //**If I leave this in, I get an error "unexpected token else"
			//return false;
		//}
	}

console.log(displayWeather(weatherConditions, weatherToday));
console.log(displayWeather(weatherConditions, weatherYesterday));

// Part 2
    // Write a function that returns an exact copy of an existing array
    // Demonstrate that the newly created array is different from the original array by changing a 
    // value in the first array and observing that the second array is unaffected.
console.log("Part 2");

var part2Arr = ["a", "e", "i", "o", "u"];

function copyArr (originalArr) {
	var copy = originalArr;
	return copy;            
}

console.log("Copy:  " + copyArr(part2Arr));
part2Arr.push("aa");
console.log("Original with an addition:  " + part2Arr);
copyArr(part2Arr);


console.log("Part 3");
// Write a function that accepts an array of numbers and returns
// an array containing only the even integers from the original array.

var part3Arr = [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
var oddNumArr = []; 

part3Arr.forEach(function (item, i) {
            if (item % 2 === 0) {
             	oddNumArr.push(i);
            }
            });

console.log(oddNumArr);











