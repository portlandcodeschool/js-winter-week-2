// Colin Lebens
// Week 2 - Monday Assignment

// Part 1

console.log("\nPart 1\n"); 

function myFunction1() {

}

// Part 2

console.log("\nPart 2\n"); 

function simpleGreeting() {
	console.log("Hi there!");
}

simpleGreeting();

// Part 3

console.log("\nPart 3\n"); 

var printHeadline = function() { 
	console.log("Extra! Extra!");
}

printHeadline();

// Part 4

console.log("\nPart 4\n"); 

var printPetPraise = function(petNameHere) {
	console.log(petNameHere + " is the best pet in the whole wide world.");
}

printPetPraise("Howard");

// Part 5

console.log("\nPart 5\n"); 

var parseNamedGreeting = function(name) {
	return "Hello there " + name;
}

console.log(parseNamedGreeting("Colin"));

// Part 6

console.log("\nPart 6\n"); 

var reverseAndRemoveVowels = function(str) {
	var outputStr = "";
	var i;

	for (i=str.length - 1; i >= 0; i--) {
		if (!isVowel(str[i])) { outputStr += str[i]; }
	}

	return outputStr;
}

function isVowel(character) {
	switch(character.toLowerCase()) {
		case 'a': case 'e': case 'i': case 'o': case 'u':
			return true;
		default:
			return false;
	}
}

console.log(reverseAndRemoveVowels("aabeedoo"));