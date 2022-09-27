//---Easy
//create a function that subtracts two numbers and alerts the difference

// function subsTwo(a, b) {
// 	let diff = a - b;
// 	alert(diff);
// }

// subsTwo(9, 3);
//create a function that divides three numbers and console logs the quotient

function divides(a, b, c) {
	console.log(a / b / c);
}

divides(12, 4, 3);

//create a function that multiplys three numbers and returns the product

function multiplyThree(a, b, c) {
	return a * b * c;
}
console.log(multiplyThree(3, 4, 5));

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function Medium(a, b, c) {
	let sumTwo = a + b;
	let remainder = sumTwo % c;
	return remainder;
}

console.log(Medium(3, 3, 2));
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function Hard(a, b, c, d) {
	let prodTwo = a * b;
	if (prodTwo > 100) {
		console.log(prodTwo + c + d);
	} else {
		console.log(prodTwo - c - d);
	}
}

Hard(12, 4, 5, 8);
