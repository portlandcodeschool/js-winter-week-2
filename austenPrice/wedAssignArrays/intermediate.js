//Part 1
console.log("Part 1")

var teaPot = "I'm a little teapot short and stout here is my handle here is my spout";
var testArray = teaPot.split(" ");

stringFinder = function (arr, search) {
        for (i = 0; i < arr.length; i++) {
                if (arr[i] == search) {
                        return true;
                        } 
        }
        return false;
}

console.log("Test for \"short\" returns:\n" + stringFinder (testArray, "short"))
console.log("Test for \"spaghetti\" returns:\n" + stringFinder (testArray, "spaghetti"))

//Part 2 
console.log("Part 2");

//Variables
var iLoveYouMan = "I will see you then or";
var iLoveYouManTwo = "I will see you on another time";
//Splitting individual words in array
var inputOne = iLoveYouMan.split(" ");
var inputTwo = iLoveYouManTwo.split(" ");
var quoteNew = [];

var arrayCopy = function (x, y) {
        x.forEach (function (value) {
                y.push(value);
                }
        )
        return y;
}
arrayCopy (inputOne, quoteNew)

console.log("original array")
console.log(quoteNew.join(" "))

// joins one quote array with the other.
for (i=0; i<inputTwo.length; i++) {
        inputOne.push(inputTwo[i]);
}

console.log("modified")
console.log(inputOne.join(" "))


//Part 3
console.log("Sans Part 3")