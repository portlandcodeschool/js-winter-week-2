//Part 1

function add (number) {
	return number + 1;
}

//Part 2

function greeting (name) {
	console.log("Hello, " + name + ", it is nice to see you today.");
}

greeting("Abby");

//Part 3

var headline = function (city) {
	console.log("Winter Storm Slams " + city + ", Disrupting Travel");
}

headline("New York");

//Part 4
var petName = function (name) {
	console.log(name + " is the best pet in the whole world.");
}

petName("Barkley");

//Part 5
var hello = function (name) {
	return "Hello, " + name + ", how are you today?";
}
console.log(hello("Trevor"));

//Part 6

var reverseStr = function (str) {
var rStr = "";	

	for (var i = str.length - 1; i >= 0; i--) {
		x = str[i].toLowerCase();
		if (x !== 'a' && x !== 'e' && x !== 'i' && x !== 'o' && x !== 'u') {
			rStr += str[i];
		}
	}
	return rStr;
}
console.log(reverseStr("What's going on?"));
