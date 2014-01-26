//Assignment 4 - Intermediate
//Paul Ogden

//Part 1
function stringChecker (array, string){
  var returnBoolean = false;
  array.forEach(function (value){
    if (value === string){
      returnBoolean = true;
    }
  })
  return returnBoolean
}

console.log(stringChecker(["stinky", "cheeses", "are", "stinky"], "stinky"))
console.log(stringChecker(["stinky", "cheeses", "are", "stinky"], "stunk"))

//Part 2
function arrayCopier (oldArray){
  var newArray = [];
  oldArray.forEach(function (value){
    newArray.push(value)
  })
  return newArray;
}
oldArray = [1, 2, 3, "four", "five", "six"];
newArray = arrayCopier(oldArray);
oldArray.push("7");
console.log(oldArray);
console.log(newArray);

//Part 3
function oddIntegerRemover (numArray){
  newArray = [];
  numArray.forEach(function (value){
    if (value % 2 === 0){
      newArray.push(value)
    }
  })
  return newArray
}

console.log(oddIntegerRemover([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))