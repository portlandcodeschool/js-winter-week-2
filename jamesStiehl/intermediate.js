// Part 1
function hasString (str, strArray){
	var result = false;
	strArray.forEach(function(value){
		console.log(value, str);	
		if(value === str){
			result = true;
		} 
	});	
	return result;
}

if(hasString("Tom", ["Aaron", "James", "Seth"])){
	console.log("True");
} else{
	console.log("False");
}

// Part 2
var originalArr = [1,2,3,4];
var newArray = [];

function copyArray (randArray) {
	randArray.forEach(function(value){
		newArray.push(value);
	})
	randArray[0] = 100;
	return newArray;
}

copyArray(originalArr);

console.log(originalArr, newArray);

// Part 3
var ranInt = [];
var elements = 10; //How many elements do you want in your random integer array?
var mod2zero = [];
for (i=0;i<elements;i++){
	
	ranInt.push(Math.floor(Math.random()*100));

}

function evensOnly (vector) {
	vector.forEach(function (value){
		if (value%2 === 0){
			mod2zero.push(value);
		}
	});
	return mod2zero;
}

console.log(evensOnly(ranInt));












