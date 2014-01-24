//Part 1
var myArray = [ "one", "two", "three" ]

function stringInArray (array, string) {
  var value = false;
  for ( var i = array.length; i >= 0; i-- ) {
    if ( string === array[i] ) {
      value = true;
    }
  }
  return value
}

console.log(stringInArray(myArray, "one")) //true
console.log(stringInArray(myArray, "seventeen")) //false


//Part 2
var array1 = [ 1, 2, 3, 4 ]

function copyArray (array) {
  var array2 = array.slice(0);
  return array2;
}

console.log(array1) //original array
copiedArray = copyArray(array1); //run the function and set copied array to 'copiedArray'
array1.pop(); //delete last value in array1
console.log(array1); //show that original array has changed
console.log(copiedArray); //copiedArray is still set to original array

//Part 3
var numberArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function evenIntegers (array) {
  var evenArray = [];
  for (var i = array.length; i >= 0; i--) {
    if (array[i] % 2 == 0) {
      evenArray.unshift(array[i]);
    }
  }
    return evenArray
}

var resultArray = evenIntegers(numberArray) //assigning a variable to the array that runs through the 'evenIntegers' function
console.log(resultArray) //printing the array 
console.log(evenIntegers([12, 13, 14, 15, 16, 17, 222])); //running another random array through evenIngeters