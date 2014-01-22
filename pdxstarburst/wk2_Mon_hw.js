
//Part 1 & 2 
var hello = function() {
   console.log("Saying Hello!");
};

hello(); 


//Part 3
var newsHeadline = function() {
	console.log("Wine makes you smarter!");
};

newsHeadline(); 


//Part 4
var petName = function(petNamehere) {
	console.log(petNamehere + " is the best pet in the whole wide world!");
};

petName("Buster");  


//Part 5  Don't know how to call outside of function

var  newGreeting = function(name) {
	console.log("Hi there " + name);
  
};

newGreeting("Lou");  




var vowelCount = function(word) {
	var output = "";
	
	for(var i = word.length - 1;  i >= 0;  i= i-1  ){  // or i--
		if(word[i] !== "a" && word[i] !== "e" && word[i] !== "i" &&
		   word[i] !== "o" && word[i] !== "u" && word[i] !== "y") {
			output = output + word[i]; //output += word[i];
	    	} 
	};
	
	return output;

};
	console.log(vowelCount("sanguine"));





