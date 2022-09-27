// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let day = "Monday";
day = "SATURDAY";
console.log(day);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = "String";
// let Stringlength = str.length;
// let lastThree = "";
// for (let index = Stringlength - 1; index > Stringlength - 4; --index) {
// 	lastThree = lastThree + str[index];
// }
// lastThree = lastThree.split("");
// lastThree = lastThree.reverse();
// lastThree = lastThree.join("");

let lastThree = str.slice(-3);
console.log(lastThree);
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function absoluteOf5(a, b, c, d, e) {
	console.log(Math.abs(100 - a - b - c - d - e));
}
absoluteOf5(2, 4, 6, 8, 10);
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function highestLowest(a, b, c) {
	console.log(Math.max(a, b, c));
	console.log(Math.min(a, b, c));
}
highestLowest(2, 4, 10);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function HeadOrTail() {
	let num = Math.random();
	num *= 10;
	if (num > 5) {
		return "Heads";
	}
	return "Tails";
}

console.log(HeadOrTail());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function printHeadsTailsXTimes(x) {
	for (let index = 0; index < x; index++) {
		console.log(HeadOrTail());
	}
}
printHeadsTailsXTimes(10);
