//Part 1
//Declare a named function 

function functionName() {

}

//Part 2
//Declare a named function. Have it console.log log a polite greeting. Call the function.

function anotherFunction() {
  console.log ("Hello");
}

anotherFunction();


//Part 3 
//Declare a function that logs a news headline to the console. Assign the function to a variable. Call the function.

var funkyFunction = function() {
  console.log("stuff happened in the world today")};

funkyFunction();

//Part 4 
//Declare a function and assign it to a variable. The function should accept a pet name as a parameter. Have the function log to the console "petNameHere is the best pet in the whole wide world". Call the function and pass in a pet's name. 

var petFunction = function(petName) {
  console.log(petName + " is the best pet in the whole wide world");
};

petFunction("Lucy");

//Part 5
// Declare a function and assign it to a variable. The function should accept a name and return a greeting plus the name in one string (e.g. Hello there Sally). Console.log the result outside of the function. 

var helloThere = function(name) {
  return "Hello there " + name;
}

console.log(helloThere("Sally"));

//Part 6 
// Declare a function and assign it to a variable. Have the function accept a string and `return` a version of the string that is reversed and has its vowels removed. Console.log the result outside of the function

var stringMixer = function(str) {
  var output = "";
  var c;
  for (var i = str.length - 1; i >= 0; i--) {
    c = str[i].toLowerCase();
    if (c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u') {
      output += str[i];
    }
  }
  return output;
}
console.log(stringMixer("Blah de da de da"));