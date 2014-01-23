js-winter-week-2
================

JS Winter 2014: Week 2: Assignment 3 (Mon) &amp; Assignment 4 (Wed)
(for more help with git and github, see the bottom of this document)

## Wednesday Assignment
Please put this assignment in the same working directory as Monday's. 

### Basic Assignment
All these go in the same file. Call the file `basic.js`.

### Part 1
- Declare an array containing the numbers '1', '2' and '3'.

### Part 2
- Use the `.push()` method to add the number '4' to the end of the array

### Part 3
- Use the `.shift()` method to remove the number '1' from the beginning of the array

### Part 4
- Use `console.log()` to verify that the array is now `['2', '3', '4']`

### Part 5
- Use the `unshift()` method to add the number '0.5' to the beginning of the array

### Part 6
- Use the `pop()` method to remove the number '4' from the end of the array

### Part 7
- Use `console.log` to verify that the array is now `['0.5', '2', '3']`

### Intermediate Assignment
All these should go in a file called `intermediate.js`

### Part 1
- Write a function that accepts an array and a string. Have it return true if the string is in the array, otherwise it should return false.

### Part 2
- Write a function that returns an exact copy of an existing array
- Demonstrate that the newly created array is different from the original array by changing a value in the first array and observing that the second array is unaffected.

### Part 3
- Write a function that accepts an array of numbers and returns an array containing only the even integers from the original array.

### Advanced Assignment

### Roman Numeral Parser
For this assignment, copy romnum.js into your working directory and follow the instructions in the code comments.

This assignment is significantly more challenging. You need to implement two functions. One will convert a decimal number (Number type) to a roman numeral string. The other will convert a roman numeral string to a decimal number (Number type).

Pay close attention to the comments in the file about where to put things. I've included some code for me to use to test your work. You shouldn't need to change it.

## Monday Assignment

### Part 1
- Declare a named function 

### Part 2
- Declare a named function. 
- Have the function console.log log a polite greeting. 
- Call the function.

### Part 3 
- Declare a function that logs a news headline to the console. 
- Assign the function to a variable. 
- Call the function.

### Part 4
- Declare a function and assign it to a variable. 
- The function should accept a pet name as a parameter. 
- Have the function log to the console "petNameHere is the best pet in the whole wide world". 
- Call the function and pass in a pet's name. 

### Part 5
- Declare a function and assign it to a variable. 
- The function should accept a name and return a greeting plus the name in a string (e.g. "Hello there Sally"). 
- Console.log the result outside of the function. 

### Part 6 
- Declare a function and assign it to a variable. 
- Have the function accept a string and return a version of the string that is reversed and has its vowels removed.
- Console.log the result outside of the function

## Git and Github help/ Our Assignment Worflow From Start to Finish
1. Make sure you are in the directory where you want your homework project directory to be stored
2. Git clone 'urlGoesHere'
3. cd to the project directory
4. git checkout -b branchWithYourNameOnIt
5. mkdir dirWithYourNameOnIt
6. touch assignmentName.js to create the file with your homework in it.
7. Do the exercises below (don't forget to save)
8. git add assignmentName.js to add changes
9. git commit -m "commit message here"
10. git push (make sure you are still on the branch with your name on it before you push)
11. Submit a pull request on github
12. Look at feedback
13. Make changes
14. Git add, then commit, then push (There is no need to get rid of the previous pull request and make a new one. Just push your new changes. The pull request will automatically update). Make sure you are on the branch with your name on it when you push. 
