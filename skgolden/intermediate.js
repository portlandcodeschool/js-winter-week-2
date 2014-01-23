//sandra golden

//***********
//part 1
//***********
function part1 (arr, string) {
	var foundMatch = false;

	arr.forEach(function (item) {
	  if(item.toLowerCase() === string.toLowerCase()){
	  	foundMatch = true;
	  }
	});

	return foundMatch
}

var part1Arr = ['apples', 'oranges', 'bananas'];
var part1Str = 'apples';

console.log('part 1:');
console.log(part1(part1Arr, part1Str));

//***********
//part 2
//***********
function returnExact (arr) {
	var thisArr = [];

	arr.forEach(function (item) {
	  thisArr.push(item);
	});

	return thisArr;
}

var firstArr = ['this', 'is', 'an', 'array'];
var secondArr = returnExact(firstArr);
firstArr.pop();

console.log('\npart 2:');
console.log('original array changed: ' + firstArr);
console.log('newly created array: ' + secondArr);

//***********
//part 3
//***********
function onlyEven (arr) {
	var evens = [];

	arr.forEach(function (value) {
		if(value % 2 === 0){
			evens.push(value);
		}
	});

	return evens;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('\npart 3:');
console.log('showing only even numbers: ' + onlyEven(numbers));