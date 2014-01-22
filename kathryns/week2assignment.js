//JavaScript Week 2 Assignment

//Part 1
function newFunction() {

};

//Part 2
function greeting() {
	console.log("Hello, what a beautiful day!");
};
greeting();

//Part 3
function newsHeadline() {
	console.log("Broncos and Seahawks head for Super Bowl");
};

var headline = newsHeadline();

console.log(headline);


//Part 4
// Declare a function and assign it to a variable.
// The function should accept a pet name as a parameter.
// Have the function log to the console "petNameHere is the best pet in the whole wide world".

var petName = function (petNameHere) {
	 return console.log(petNameHere + " is the best pet in the whole wide world.");
};

// Call the function and pass in a pet's name.
petName('Sadie');

//Part 5
// Declare a function and assign it to a variable.
// The function should accept a name and return a greeting plus the name in a string (e.g. "Hello there Sally").
// Console.log the result outside of the function.

var greeting = function (name) {
	return console.log("Hi " + name + ". How are you?");
};

greeting('Jess');

//Part 6
// Declare a function and assign it to a variable.
// Have the function accept a string and return a version of the string that is reversed and has its vowels removed.
// Console.log the result outside of the function

var string = "On the beach in hawaii";

var newWord = function () {
	var output = "";

	for (var i = string.length - 1; i>= 0; i = i - 1) {
		switch(string[i].toLowerCase()) {
			case 'a': case 'e': case 'i': case 'o': case 'u': break;
			case 'y': 
				if (yisAVowel()) break;
			default:
			output += string[i];
		}

	function yisAVowel() {
		return math.random > .25;
	}
	}

	return output;

};

console.log(newWord());








