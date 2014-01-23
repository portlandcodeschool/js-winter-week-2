// Full Stack JavaScript, Winter 2014, Assignment 3 by Ian Forrest
// Part 1

function steveNovick () {
}


// Part 2
function limaPeru () {
	console.log("Buenos dias, mis amigos.");
}
limaPeru();


// Part 3
var newsHeadline = "Sir Stuffington the one-eyed pirate kitten rescued from storm drain";
var catFancyMag = function catFancy () {
		console.log(newsHeadline);
		};
catFancyMag();


// Part 4
var petLove = function dogNamer (petName) {
	console.log(petName + " is the best pet in the world.");
};
petLove("Odie");


// Part 5
var drugLord = "Pablo Escobar";
var greeting = "What's up, ";
var greetOutput = colombia();

function colombia () {
	return greeting + drugLord + "?";
}
console.log(greetOutput);


// Part 6
var goodAdvice = "Functions can be called before they are declared.";
var c;
var endResult = "";
console.log(ultimateVowelJunker(goodAdvice));

function ultimateVowelJunker () {
	 for (var i = goodAdvice.length - 1; i >= 0; i--) {
	  c = goodAdvice[i].toLowerCase();
	  if (c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u') {
	    	endResult += goodAdvice[i];
	    }
	  }
	
		  return endResult;
} 
