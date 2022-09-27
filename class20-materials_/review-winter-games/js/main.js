//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function createEvenArray(arr) {
	let evenArray = [];
	arr.forEach((element) => {
		if (element % 2 === 0) {
			evenArray.push(element);
		}
	});
	return evenArray;
}

console.log(createEvenArray([1, 2, 4, 5, 8, 9, 10]));

function createEvenArrayFilter(arr) {
	let evenArray = arr.filter((element) => {
		return element % 2 === 0;
	});

	return evenArray;
}
console.log(createEvenArrayFilter([1, 2, 4, 5, 8, 9, 10]));

function createEvenArrayMap(arr) {
	let evenArray = arr.map((element) => {
		if (element % 2 === 0) {
			return element;
		}
	});
	return evenArray;
}
console.log(createEvenArrayMap([1, 2, 4, 5, 8, 9, 10]));
