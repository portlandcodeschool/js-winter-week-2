//sandra golden
//js-winter-assignment-3

//part 1
function partOne () {
	return true;
}

//part 2
console.log("\npart 2:");
function partTwo () {
	console.log("Hello from the part 2 function!");
}
partTwo();

//part 3
console.log("\npart 3:");
var partThree = function() {
	console.log("US, Russian forces hunt jihadist widow feared inside Olympic zone");
};
partThree();

//part 4
console.log("\npart 4:");
var partFour = function(petName) {
	console.log(petName + " is the best pet in the whole wide world");
};
partFour("Fluffy");

//part 5
console.log("\npart 5:");
var partFive = function(name) {
	return "Hello " + name + "! Have a great day.";
};
console.log(partFive("Ferdinand"));

//part 6
console.log("\npart 6:");
var partFive = function(arg1) {
	var output = "";

	for (var i = arg1.length - 1; i >= 0; i--) {
		switch(arg1[i].toLowerCase()){
			case "a": case "e": case "i": case "o": case "u":
				break;
			case "y":
				//because sometimes y
				if (includeY()) break;
			default:
				output += arg1[i];
				break;
		}
	}

	return output;

	function includeY (letter) {
		return	Math.random() > 0.5;
	}
};
var strPrint = "Becky's beagle barked and bayed, becoming bothersome for Billy";
console.log(strPrint + " printed backwards without vowels is: " + partFive(strPrint));