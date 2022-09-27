// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = "Chicken65";
food = "Burger";
alert(food);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let string = "naeem";
alert(string[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divide2AndMultiply1(a, b, c) {
	alert((a / b) * c);
}
divide2AndMultiply1(12, 3, 4);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(a) {
	console.log(Math.cbrt(a).toFixed(4));
}
cubeRoot(27);
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function summerOrNot(mon) {
	let sumMonth = ["march", "april", "may", "june"];
	if (sumMonth.includes(mon.toLowerCase())) {
		alert("YAY");
	} else {
		alert("Booo");
	}
}
summerOrNot("arch");

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function loopToNum(num) {
	for (let index = 1; index <= num; index++) {
		if (index % 5 !== 0) {
			console.log(index);
		}
	}
}
loopToNum(10);
