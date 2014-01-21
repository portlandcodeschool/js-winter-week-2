//Paul Ogden
//Assignment 3

//Part 1
function namedFunction(){
}

//Part 2
function politeGreeting(){
  console.log("Top o' the mornin' to yah!")
}

politeGreeting()

//Par(t 3
newsHeadline = function(){
  console.log("Aliens invade earth just to attack Rod Stewart.")
}

newsHeadline()

//Part 4
myPet = function(petNameHere){
  console.log(petNameHere + " is the best pet in the whole wide world!")
}
myPet("Maeby")

//Part 5
nameGreeting = function(name){
  return "Good morning, " + name + "."
}

console.log(nameGreeting("Tom Sawyer"))

//Part 6
devowelReverser = function(string){
var output = "";
var c;

for (var i = string.length - 1; i >= 0; i--) {
  var chance = Math.floor(Math.random()*10); 
  c = string[i].toLowerCase();
  if (c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u' && c !== 'y') {
    output += string[i];
    }
  else if (chance >= 5 && c === 'y') {
    output += string[i];
    }
  }
  return output
}
console.log(devowelReverser("Is this stupid function working yet?"))