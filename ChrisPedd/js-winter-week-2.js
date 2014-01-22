////////////////////////////////////// PART 1
console.log("\nPart 1");

function superSeriousFunction () {

}

////////////////////////////////////// PART 2
console.log("\nPart 2");
function politeGreeting () {
	return "Top of the day to you, good sir!";
}

console.log (politeGreeting() );

////////////////////////////////////// PART 3
console.log("\nPart 3");
var headliner = function (headline) {
	console.log(headline);
}

headliner("BEER SHORTAGE IN PORTLAND, MASS RIOTS ENSUE!");

////////////////////////////////////// PART 3.1 DONE PROPER MAYBE
console.log("\nPart 3.1");
var headlined = function () {
	console.log("DOES LOVE LEAD TO WEIGHT GAIN? CLICK THIS GODDAMN LINK TO FIND OUT MORE.");
}

var callHeadlined = headlined();
callHeadlined;


////////////////////////////////////// PART 4
console.log("\nPart 4");
var petNamePraise = function(petNameHere) {
	console.log(petNameHere + " is the world's greatest ball of fur to ever walk the earth.");
}

petNamePraise("Dorothy Van Der Kat");

////////////////////////////////////// PART 5
console.log("\nPart 5");
var hello = function (name, user) {
	return user + ": " + name + ". I need you to make me a sandwich.\n" + name + ": what? make it yourself, " + user +".\n" + user + ": sudo make me a sandwich.\n" + name + ": okay.";
}

console.log( hello("Tiffany", "Burt") );

////////////////////////////////////// PART 6
console.log("\nPart 7");
function stringer (stringGoesHere) {
  var stringReversed = "",
      coinFlip = function() {
        return Math.random() > 0.5;
      };

  for (var i = stringGoesHere.length - 1; i >= 0; i--) {
    c = stringGoesHere[i].toLowerCase();
    if (c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u' && (c !== 'y' || coinFlip() ) ) {
      stringReversed += stringGoesHere[i];
    }
  }
  return stringReversed;
}

console.log(stringer("But every song's like gold teeth, grey goose, trippin' in the bathroom\nBlood stains, ball gowns, trashin' the hotel room,\nWe don't care, we're driving Cadillacs in our dreams.\nBut everybody's like Cristal, Maybach, diamonds on your timepiece.\nJet planes, islands, tigers on a gold leash.\nWe don't care, we aren't caught up in your love affair.\nAnd we'll never be royals.\nIt don't run in our blood,\nThat kind of luxe just ain't for us.\nWe crave a different kind of buzz.\nLet me be your ruler,\nYou can call me queen Bee.\nAnd baby I'll rule, I'll rule, I'll rule, I'll rule.\nLet me live that fantasy."));