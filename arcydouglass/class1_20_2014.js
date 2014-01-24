//Class 1/20/2014
//Arrays

// var dogs = ["Fido", "Rex", "Maggie", "Pumpkin"];

// for (var i = 0; i < dogs.length; i++) {
//   console.log(dogs[i]);
// }



// // push and pop are array methods that add
// // or remove elements from the end of an array

// var foo = [7, "eleven"];

// foo.pop(); // returns "eleven"
// console.log(foo); // prints [ 7 ]

// foo.push(11); // returns 2, the new length of the array
// console.log(foo); // prints [ 7, 11 ]




// // shift and unshift are like push and pop except they
// // add and remove elements from the beginning of the array

// var bar = ["circle", "K"];

// bar.shift(); // returns "circle"
// console.log(bar); // prints [ "K" ]

// bar.unshift("O"); // returns 2, the new length of the array
// console.log(bar); // prints [ "O", "K" ]




// var someStupidString = "I am the very model of a modern major general"

// var words = someStupidString.split(" ");
// console.log(words);

// // ["I", "am", "the", "very", "model", "of", 
// //  "a", "modern". "major", "general"]





// var sen = "Four score and seven years ago Winne-the-Pooh was first released!"
// console.log(sen.split(" "));


// var reversedSen = sen.split(" ").reverse().join(" ");

// console.log(reversedSen);

// // prints: 'released! first was Winne-the-Pooh ago years seven and score Four'

// // array.reverse() reverses the elements of the array returned by split()
// // array.join(" ") joins the elements of the array into a new String,
// // separated by a " "







// var testScores = [80, 82, 92, 67, 97, 73, 74];

// testScores.forEach(function (item, index) {
//   console.log("Test score at index #" + index + ": "+ item);
// });




// //Call back functions
// function doAThing (callback){
//   callback();
// }

// function makeMeASandwich (){
//   console.log("Make me a sandwich");
// }

// function pleaseMakeMeASandwich (){
//   console.log("Yes");
// }

// doAThing(makeMeASandwich);
// doAThing(pleaseMakeMeASandwich);






// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var sum = 0;

// arr.forEach(function (value, index, theArray) {
//   sum += value;
// });

// console.log("\nThe sum of the numbers is:  " + sum);


// arr.forEach(getTotal);
// console.log("\nThe sum of the numbers is:  " + sum);


// function getTotal (value ){
//    sum += value;
//    return sum;
// }


// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(getTotal);
// console.log("\nThe sum of the numbers is:  " + sum);




// var array=[];
// var sum = 0;

// for ( var i = 0; i < 100; i++){
//   //var randomNumber = Math.floor(Math.random() * 100); 
//   //array[i] = randomNumber;
//   array.push(Math.floor(Math.random() * 100));
//   //console.log(array[i]);
// }

// array.forEach(outputNumbers);
// array.forEach(getTotal);
// console.log("\nThe sum of the numbers is:  " + sum);

// function outputNumbers (value,index) {
//   console.log("The index is " + index + " with value " + value)
// }

// function getTotal (value ){
//    sum += value;
//    return sum;
// }

// array.sort();
// array.forEach(outputNumbers);

// array.sort(compareNumbers);


// function compareNumbers (a, b) {
//   console.log("A: "+ a + " B: " + b)
//   return a - b;
// }

// array.forEach(outputNumbers);









var array = [];
var countArray =[];
//var countArray = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
//var countArray = new Array (10);

for ( var i = 0; i < 10000; i++){
  array.push(Math.floor(Math.random() * 10));
}

for ( var i = 0; i < 10; i++){
  countArray[i] = 0;
}

for ( var i = 0; i < array.length - 1; i++){
  countArray[array[i]] += 1;
}

countArray.forEach(outputNumbers);

function outputNumbers (value, index) {
  console.log("The index is " + index + " with value " + value);
}


//Does not need a for loop to set array to zero:
// arr.forEach( function (item, index) {
//   counts[item] = counts[item] ? counts[item] + 1 : 1;
// });








