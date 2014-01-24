//Assignment 03: js-winter-week-2
//Javascript class
//Arcy Douglass
//January 21, 2014

//Part 1
console.log("\nPart 1:\n");
function firstFunction(){
  //stuff
}

//Part 2
console.log("Part 2:\n");
function greeting(){
  console.log("Hello, this is a greeting!\n");
}

greeting(); 


//Part 3
console.log("Part 3:\n");
var addHeadline = function (){
  console.log("Logging new headline to console\n");
}

addHeadline();


//Part 4
console.log("Part 4:\n");
var petName = function (name){
  console.log(name + " is the best pet in the whole world!\n");
}

petName("Rama");
petName("Sita");


//Part 5
console.log("Part 5:\n");
var addGreeting = function (name){
  return name + ", this is a greeting message!";
}

console.log (addGreeting("Martin"));
console.log (addGreeting("Luther"));
console.log (addGreeting("King"));


//Part 6
console.log("\nPart 6:\n");

function stringReverse(str){
  var reversedString = "";

  for (var i = str.length - 1; i >= 0; i-- ){
    reversedString += str[i];
  }
  return removeVowels(reversedString);
}

function removeVowels(str2){
  var noVowelString= "";

  str2.toLowerCase();

  for (var i = 0; i <= str2.length - 1; i++ ){
    switch(str2[i]){
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        break;
      default: noVowelString += str2[i];
    }
  }
  return noVowelString;
}

console.log(stringReverse("This is a test\n"));
console.log(stringReverse("This string has no vowels!\n"));







