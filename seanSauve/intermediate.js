//Sean Sauve
//Intermediate Problems Week 2
//Javascript Winter Semester
//Portland Code School

//Part 1
function inArray(arr, str){
	for (i in arr) if (arr[i] === str) return true;
	return false;
}

var hungry = "captain crunch";
var breakfast = ["franken berry", "captain crunch", "count choculah"]; 
console.log("\n\nBREAKFAST:\nDoes " + hungry +" exist in our breakfast?\n");
console.log("Survey says..." + inArray(breakfast, hungry));

//Part 2 
function copyArray(arr){
	var copy = [];
	for (i in arr) 	copy [i] = arr[i];
	return copy;
}
var arr = [1,2,3,4,5];
var newArray = copyArray(arr);
newArray.push(6);
console.log ("\n\nARRAY COPYS:\noriginal array:\n" + arr);
console.log("\nnew array:\n" + newArray);

function pullEvens(arr){
	var evens = [];
	for (i in arr){
		if (arr[i] % 2 === 0) evens.push(arr[i]);
	}
	return evens;
}

var oddsAndEvens = [1,2,3,4,5,6,7,8,9,10,11,12];
var evenNumbers = pullEvens(oddsAndEvens);

console.log ("\n\nEVEN NUMBER EXTRACTING:\narray: with odds and evens\n" + oddsAndEvens);
console.log("\nnew array with only evens:\n" + evenNumbers);