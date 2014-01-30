// Part 1: Write a function that accepts an array and a string. Have it return true if the string is in the array, otherwise it should return false.

console.log("PART 1:\n");
var myArray = ["frog", "hare", "toad"];
var myString = "toad"; 

function stringHere(array, string) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === string){
			return true;
		} 
	};
	return false;
};
console.log(stringHere(myArray, myString)); 
// the if statement must be completed (true?) before checking return false.


// Part 2: Write a function that returns an exact copy of an existing array. Demonstrate that the newly created array is different from the original 
// array by changing a value in the first array and observing that the second array is unaffected.

console.log("\nPART 2:\n");

num = ["un", "deux", "trois"];
console.log("The original array is: " + num);
function diff(para) {
	console.log("The exact copy of the array is: " + para);
	para.reverse();
  console.log("The changed copy of the original array is: " + para);
}
diff(num);

// Part 3: Write a function that accepts an array of numbers and returns an array containing only the even integers from the original array. 

console.log("\nPART 3:\n");

var trois = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
console.log("The original array is: " + trois);
var even = trois.filter(function (num) {
	return num % 2 == 0;
});
console.log("The new array with only the even numbers returned is: " + even);