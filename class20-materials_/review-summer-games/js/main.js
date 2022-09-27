//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

function multiplyThree(arr) {
	let product = 1;
	for (let index = 0; index < arr.length; index++) {
		product *= arr[index];
		console.log(product);
	}
	console.log(product);
}
multiplyThree([1, 4, 7, 10, 13]);
