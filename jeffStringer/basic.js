//Part 1: Declare an array containing the numbers '1', '2' and '3'.

console.log("PART 1:\n")

var basic = [1, 2, 3];
console.log("Created an array containing items " + basic);

// Part 2: Use the .push() method to add the number '4' to the end of the array

console.log("\nPART 2:\n")
basic.push(4);
console.log("After performing the .push method to add the number 4, the array returns " + basic);


// Part 3: Use the .shift() method to remove the number '1' from the beginning of the array
// Part 4: Use console.log() to verify that the array is now ['2', '3', '4']

console.log("\nPARTS 3 and 4:\n")
basic.shift();
console.log("After performing the .shift method, the array returns " + basic);


// Part 5: Use the unshift() method to add the number '0.5' to the beginning of the array

console.log("\nPART 5:\n")
basic.unshift(0.5);
console.log("After performing the .unshift method to add the number 0.5 to the beginning of the array, the array returns " + basic);


// Part 6: Use the pop() method to remove the number '4' from the end of the array
// Part 7: Use console.log to verify that the array is now ['0.5', '2', '3']

console.log("\nPARTS 6 and 7:\n")
basic.pop();
console.log("After performing the .pop method to remove the number 4, the array returns " + basic);


