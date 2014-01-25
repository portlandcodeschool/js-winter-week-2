////////////////////////////////////////// PART 1 //////////////////////////////////////////
console.log("\n--- Part 1: Testing Lyrics from '99 Problems' ---")

var jayZ ="If youre having girl problems I feel bad for you son Ive got 99 problems but a bitch aint one";
var testArray = jayZ.split(" ");

stringFinder = function (arr, search) {
	for (i = 0; i < arr.length; i++) {
		if (arr[i] == search) {
			return true;
			} 
	}
	return false;
}

console.log("Testing the lyrics array for \"problems\" returns:\n" + stringFinder (testArray, "problems"))
console.log("Test the lyrics array for \"people\" returns:\n" + stringFinder (testArray, "people"))


////////////////////////////////////////// PART 2 //////////////////////////////////////////
console.log("\n--- Part 2: Arrays in the Flavor of Shakespeare ---")

var shakespeareOne = "Better a witty fool";
var shakespeareTwo = "than a foolish wit.";
var quoteOne = shakespeareOne.split(" ");
var quoteTwo = shakespeareTwo.split(" ");
var quoteNew = [];

var arrayCopy = function (arrIn, arrOut) {
	arrIn.forEach (function (value) {
		arrOut.push(value);
		}
	)
	return arrOut;
}
arrayCopy (quoteOne, quoteNew)

console.log("Original array, copied, returned as a string with .join:")
console.log(quoteNew.join(" "))

// joins one quote array with the other.
for (i=0; i<quoteTwo.length; i++) {
	quoteOne.push(quoteTwo[i]);
}

console.log("\nOriginal array, modified with a new array and .join:")
console.log(quoteOne.join(" "))


////////////////////////////////////////// PART 3 //////////////////////////////////////////
console.log("\n--- Part 3: Even Numbers Only, no Odds allowed!")

var arrayOfDoom = [];
var arrayOfEven = [];

for (i=0; i<15; i++) {
	arrayOfDoom.push(Math.floor(Math.random()*10+1));
}

arrayOfDoom.sort(function (a, b) {
	return a - b;
});

theEvener = function (arrIn, arrOut) {
	for (i = 0; i < arrIn.length; i++) {
		if (arrIn[i] % 2 === 0) {
			arrOut.push(arrIn[i])
		}
	}
}

theEvener (arrayOfDoom, arrayOfEven);

console.log("Array in:")
console.log(arrayOfDoom)

console.log("Array out:")
console.log(arrayOfEven);