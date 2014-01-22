//Part 1
function myRocknFunctionThatDoesNuthin () {

}

//Part 2
function politeGreeting () {
  console.log("Well, hello, and thank you for asking for my polite greeting.");
}

politeGreeting()

//Part 3
function newsHeadline () {
  console.log("Fighting fires with the help of Google Glass");
}

x = newsHeadline();

x;

//Part4
var superPet = function bestPet (pet_name) {
  console.log(pet_name + " is the best pet in the whole wide world!");
}

superPet("Mufasa");

//Part5
var greeting = function hello (name) {
  return "Hello there " + name + ".";
}

console.log(greeting("Franklin Delano Roosevelt"));

//Part6
var devowel = function deVoweller (str) {

var output = "";
var c;
 
 
for (var i = str.length - 1; i >= 0; i--) {
  c = str[i].toLowerCase();
  if (c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u' && c !== 'y') {
    output += str[i]; 
    }
  }
  return output;
}

var sentence = "You're gonna lose your vowels, sucker!";

console.log(devowel(sentence));