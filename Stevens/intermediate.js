//Part 1 

function isStringTrue (array, string) {

  array.forEach(match);

    function match (value) {
	  if (value === string) {
		console.log("true")
		} else {
		console.log("false");
		} 
	}
}

isStringTrue(["one", "two", "three"], "one");
isStringTrue([1, 2, 3], "one")


//Part 2 

var array = [1, 2, 3];
var newArray = [];

array.forEach(function (item) {
  	newArray.push(item);
  
});

array.push(4);

console.log(newArray);
console.log(array);



//Part 3 

var array = [1, 2, 3, 4, 5];
var evenArray = [];


array.forEach(function (item) {
  if (item % 2 === 0) {
  	evenArray.push(item);
  }
});

console.log(evenArray);
console.log(array);















