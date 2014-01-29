//////////////////////////////////////////
//Basic assignment  basic.js
//////////////////////////////////////////


//Part 1
//Declare an array containing the numbers '1','2' and '3'.

var superArray = [1,2,3];

//Part 2

superArray.push(4); 

//Part 3

superArray.shift();

//Part 4

console.log("\n" + superArray);

//Part 5 

superArray.unshift(0.5);

//Part 6

superArray.pop();

//Part 7 

console.log("\n" + superArray);


//////////////////////////////////////////
//Intermediate Assignment  intermediate.js
//////////////////////////////////////////


//Part 1


var anArray = ["Peter", "Susan", "Lucy", "Edmund"],
    aString = "Stuart";  

function arrayTester (myArray, myString) {
  var result;
  for (var i = myArray.length - 1; i >= 0; i--) {
    if (myArray[i] !== myString){
      myArray.pop();
    }
  };
  return myArray.length >= 1 ? true : false
};

console.log("\nIs the string in the array? True or false?")
console.log("\t===> " + arrayTester(anArray, aString) + "\n");


//Part 2
var testArray = [1,2,3,4,5];
console.log("Original array: " + testArray);
function arrayDuplicator (arrayIn) {
  var arrayOut = arrayIn.slice(0,5);
  return arrayOut; 
}

var newArray = arrayDuplicator(testArray);  
testArray.push(99);
console.log("\nThis is the copied array: " + newArray + "\n\tIt is unaffected by the changes to the original array\n");
console.log("This is the first, changed, array: " + testArray + "\n\tIt is changed and is different\n");


//Part 3


var fancyArray = [1,2,3,4,5,6,7,8,9,10]; 

function evenSorter (myArray){
  var newArray = [];
  for (var i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 === 0){
      newArray.push(myArray[i]); 
    }
  }
  return newArray; 
}

console.log(evenSorter(fancyArray));