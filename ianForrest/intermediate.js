// JS WINTER 2014, WEEK 2, ASSIGNMENT 4 by Ian Forrest
// intermediate.js

// Part 1
var famousMayors = ["Rob Ford", "Sam Adams", "Bob Filner", "Marion Berry"];
var sanDiegoMayor = "Bob Filner";
var mayorCheck = mayorWatch();

function mayorWatch() {
	famousMayors.forEach(function (item) {
		if (item === sanDiegoMayor) {
			console.log(sanDiegoMayor + " is a famous mayor.");
			return true;
		} else {
			return false;
		} 
	});
}
mayorCheck;

// Part 2
var leadingScorersMarch = ["Diego Valeri", "Darlington Nagbe", "Will Johnson"];
var leadingScorersApril = timbersGoals();
function timbersGoals () {
	var timbersMidfielders=leadingScorersMarch.slice(0);
	return timbersMidfielders;
}

leadingScorersMarch.shift();
leadingScorersMarch.unshift("Khalif Alhassan");

console.log("The first array is " + leadingScorersMarch);
console.log("The second array is " + leadingScorersApril);


// Part 3
var numberArray = [];
var evensArray = [];

for (var i = 0; i < 51; i++) {
	numberArray.push(i);
}
function evenNumberMachine () {
	numberArray.forEach (function (num) {
		if (num % 2 === 0) {
			evensArray.push(num);
		} else {
		}
	});	
	console.log(evensArray);
}

evenNumberMachine();


