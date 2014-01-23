// Part 1: Declare a named function
console.log("\nPART 1:\n");

function orange() {
	console.log("\tAn orange a day keeps the coder awake!");
}
orange();

// Part 2: Declare a named function.
// Have the function console.log log a polite greeting.
// Call the function.
// translation: Hello! What's going on, friend!
console.log("\n\nPART 2:\n");

function polite() {
	console.log("\tSalut! Qu'est ce qui se passe ami?");
}
polite();

// Declare a function that logs a news headline to the console.
// Assign the function to a variable.
// Call the function.
console.log("\n\nPART 3:\n");

var headline = function() {
	console.log("\tJeff Stringer of Portland, OR is the first person to have successfully JavaScripted across the universe.")
}
headline();

// Declare a function and assign it to a variable.
// The function should accept a pet name as a parameter.
// Have the function log to the console "petNameHere is the best pet in the whole wide world".
// Call the function and pass in a pet's name.
console.log("\n\nPART 4:\n");

var tribute = function(petNameHere) {
	console.log(petNameHere + " the fish is the best pet in the whole wide world!")
}
tribute("\tSapphire");

// Declare a function and assign it to a variable.
// The function should accept a name and return a greeting plus the name in a string (e.g. "Hello there Sally").
// Console.log the result outside of the function.
console.log("\n\nPART 5:\n");

var greeting = function (name) {
	return "\tHello there " + name;
	}
console.log(greeting("Sally"));


// Declare a function and assign it to a variable.
// Have the function accept a string and return a version of the string that is reversed and has its vowels removed.
// Console.log the result outside of the function
console.log("\n\nPART 6:\n");

var str = "The rain in Alsace Lorraine falls mainly on the plain!\t";
var output = "";

var reversapalooza = function (phrase) {
    for (var i = str.length - 1; i >= 0; i--) {
        switch (str[i]) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
            case 'A': case 'E': case 'I': case 'O': case 'U':
                break;
            default:
                output += str[i];
        }
    }

    return output;
}
console.log(reversapalooza(str));

