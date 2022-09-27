//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = numArr.reduce((sum, ele) => sum + ele, 0);
console.log(sum);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const makeSquaredArr = (numArr) => {
	let squaredArr = numArr.map((ele) => ele * ele);
	return squaredArr;
};
let squaredArr = makeSquaredArr(numArr);
console.log(squaredArr);

//Create a function that takes string
//Print the reverse of that string to the console
function stringRev(str) {
	let arrStr = str.split("");
	let arrStrRev = arrStr.reverse();
	let revStr = arrStrRev.join("");
	return revStr;
}

console.log(stringRev("string"));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalindrome(str) {
	let revStr = stringRev(str);
	return revStr === str ? true : false;
}

console.log(isPalindrome("povvop"));
