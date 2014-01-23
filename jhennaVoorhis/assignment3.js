//Part 1
function part1(){
	//empty function
}

//Part 2
function part2(){
	console.log("Top o the mornin to you good sir!");
}
part2();

//Part 3
function newsHead(){
	console.log("Breaking news! Angry Snails Dance.");
}
newsHead();

//Part 4
var printPet = function(pet){
	console.log(pet + " is the best pet in the whole wide world!");
}
printPet("Scruffy");

//Part 5
var greetMe = function(name){
	return "Hello there " + name +"!";
}
console.log(greetMe("Liz"));

//Part 6
var arb = "yyyyYYYyyyyXWVNioucsae"
var revNoVowel = function(string){
	var reved = "";
	for(var j = (string.length-1); j>=0; j--){
		var c = string[j].toLowerCase();
		if (c==="y") {
			if (Math.random() < .2){ //case where will treat y as consonant 20% of time
				reved += string[j];
			}	
		} else if (c!=="a" && c!=="e" && c!=="i" && c!=="o" && c!=="u" && c!=="y"){
			reved += string[j];
		}
	}
	return reved;
}
console.log(revNoVowel(arb));