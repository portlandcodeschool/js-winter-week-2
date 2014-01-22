//Week 2 Assignment 3 (Monday)
// James Stiehl 1/21/2104


// Part 1
function jamesFunc() {};


// Part 2
console.log("\nPart 2:");

politeGreet();

function politeGreet(){
	console.log("Well good day to you, sir!");
}


// Part 3
console.log("\nPart 3:");
var news = function () {
	console.log("Breaking News:  Dennis Rodman becomes North Korean citizen!");
}

news();

// Part 4
console.log("\nPart 4:");

var petName = function (name) {
	console.log(name + " is the best pet in the whole wide world!");
}

petName("Martha");


// Part 5
console.log("\nPart 5:");

var genGreet = function (name) {
	return "Hello there " + name +"!";
}

console.log(genGreet("Mojambo"));

// Part 6
console.log("\nPart 6:");

var revString = function (phrase) {
	var output = "";
	for (var i = phrase.length-1; i >= 0; i--){
		switch (phrase[i].toLowerCase()){
			case "a":
			case "e":
			case "i":
			case "o":
			case "u":
			break;
			case "y":
				if (Math.random() > 0.5){
					break;
				}
			default:
				output += phrase[i];

		}
	}

	return output;
}

var arbString = "You yearn yearly for yard and eyeball work!"

console.log(revString(arbString));
console.log("\n");










