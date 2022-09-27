// *Variables*
// Create a variable and console log the value

let val = 100;
console.log(val);

// Create a variable, add 10 to it, and alert the value
let val2 = 1000;
val2 += 10;

// alert(val2);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subsFourNum(a, b, c, d) {
	alert(a - b - c - d);
}
// subsFourNum(5, 4, 3, 2);
// Create a function that divides one number by another and returns the remainder
function dividesAndRem(a, b) {
	return a % b;
}

console.log(dividesAndRem(12, 3));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function sumTwo(a, b) {
	let sum = a + b;
	if (sum > 50) {
		alert("Jumanji");
	}
}
sumTwo(40, 1);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function dividedByThree(a, b, c) {
	let prod = a * b * c;
	if (prod % 3 === 0) {
		alert("ZEBRA");
	}
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function Looop(word, number) {
	for (let index = 0; index < number; index++) {
		console.log(word, index);
	}
}
