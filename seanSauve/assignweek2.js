// Sean Sauve 
// Week 2 Assignment
// Javascript Winter Course
// Portland code school

// Part 1 + 2
console.log("Part 1 + 2:\n");
function functionOne(){
};

function greeting(){
	console.log("Good day to you!\n");
};
greeting();

// Part 3
console.log("Part 3:\n");
var headline = function(){
	console.log("Typhoon Rips Through Cemetery; Hundreds Dead\n");
};
headline();

// Part 4
console.log("Part 4:\n");
var printPet = function(petname){
	console.log(petname, "is the best pet in the whole wide world\n");
};
printPet("Nacho Cheese");
printPet("Cat Stevens")

// Part 5
console.log("Part 5:\n");
var greetName = function(name){
	return("I am not " + name +". You're " + name +". I'm the Dude... So that's what you call me.\n");	
};
console.log(greetName("Mr. Lebowski"));

// Part 6
console.log("Part 6:\n");
var devoweler = function(somestring){
	var DevowelReversed = "";
	for (i in somestring){
		var vowel = somestring[i].toLowerCase();
		if (vowel != 'a' && vowel != 'e' && vowel != 'i' && vowel != 'o' && vowel != 'u' && vowel != 'y') DevowelReversed = somestring[i] + DevowelReversed; 
	}
	return DevowelReversed;
};
console.log(devoweler("A long string with CAPITAL LETTERS and vowels"), '\n');
