// Javascript Class - amanda houle
// Week 2, Monday assignment3

// Part 1.  Declare a named function:

function robot() {
	return (5 * 2);
}


// Part 2

function greeter() {
	console.log("Hey ya'll, this is a polite greeting.");
}

greeter()

// Part 3

var headline = "PCS Lab Hours 10am to 6pm weekdays."

function newsfeed() {
	console.log(headline);
}

var news = newsfeed()

news

// Part 4 //  Still need to understand this better. 

var petName = 'Rover' 

var pets = function (petNameHere) {   
	return (petNameHere + " is the best pet in the whole wide world.");
}


console.log(pets(petName))

// Part 5  // Oooh!  I'm starting to get it!

var name = 'Sally';
var nameFun = function (nameHere) {
	return ("Good evening there, " + nameHere + "!");
}

console.log(nameFun(name))

// Part 6

var revNoVowel = function (string) {
	var output = "";
	for (var i = string.length - 1; i >= 0; i = i - 1) {
		switch (string[i]) {
	  	case 'a' : case 'e' : case 'i' : case 'o' : case 'u':
	  		break;
	  	default:
	  		output += string[i];
	  	}
	}
	return output
}

//  var string2 = "Humpty Dumpty sat on a wall.";
console.log(revNoVowel("Humpty Dumpty sat on a wall, Humpty Dumpty had a great fall."))