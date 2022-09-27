// *Variables*
// Create a variable and console log the value
let a = "String";
console.log("1: ", a);

// Create a variable, add 10 to it, and alert the value
let b = 10;
b = b + 10;
alert(`2: ${b}`);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtracts(a, b, c, d) {
	alert(`3 sub4: ${a - b - c - d}`);
}

subtracts(9, 1, 2, 4);

// Create a function that divides one number by another and returns the remainder
function divides(a, b) {
	return a % b;
}
console.log("4:", divides(5, 4));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo(a, b) {
	let sum = a + b;
	if (sum > 50) {
		alert(`5: Jumanji`);
	} else {
		alert(`5: ${sum}`);
	}
}

addTwo(10, 41);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplys3(a, b, c) {
	let prod = a * b * c;
	if (prod % 3 === 0) {
		alert(`6: ZEBRA`);
	} else {
		alert(`6: ${prod}`);
	}
}

multiplys3(1, 4, 4);
