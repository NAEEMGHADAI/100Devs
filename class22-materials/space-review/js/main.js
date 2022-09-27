//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
// arr.forEach((element) => {
// 	sum += element;
// });

sum = arr.reduce((sum, ele) => {
	// sum += ele;
	return sum + ele;
	// return sum;
}, 0);

console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function createSqArr(arr) {
	let sqArr = arr.map((ele) => {
		return ele * ele;
	});
	return sqArr;
}
console.log(createSqArr(arr));

//Create a function that takes string
//Print the reverse of that string to the console
function rever(str) {
	let splitStr = str.split("");
	splitStr.reverse();
	let ansStr = splitStr.join("");
	return ansStr;
}
console.log(rever("string"));

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindromeOrNot(str) {
	for (let index = 0; index < str.length; index++) {
		if (str[index] != str[str.length - index - 1]) {
			return false;
		}
	}
	return true;
}

console.log(palindromeOrNot("avvaq"));
