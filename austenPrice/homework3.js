//Part1
function named () {
    console.log("works")
} 
named()

//Part2

function alsoNamed (){
    console.log("Good day Sir!")
}
alsoNamed()

//part 3
var breakingNews = function (story) {
        console.log(story);
}

breakingNews("I am awesome!");
// Part 4

var petNameFunc = function(petName) {
    console.log(petName + "=Supercool pet of the year!");
}
petNameFunc("Spike");

//Part 5

var salutations = function(nameHere) {
    return nameHere;
}
    console.log(salutations("Barbara") + " you look great today!");

//Part 6

var phrase = "Austen Price is tired";
function refactor (myName) {


    var output = "";

    for (var i = myName.length - 1; i >= 0; i--) {
        switch (myName[i]) {
            case 'a': case 'e': case 'i': case 'o': case 'u': case 'y':
            case 'A': case 'E': case 'I': case 'O': case 'U': case 'Y':
                break;
            default:
                output += myName[i];
        }   
}
    
return output; 
}

console.log(refactor(phrase));