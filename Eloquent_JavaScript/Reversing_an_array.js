// Your code here.
function reverseArray(arr) {
	arr = arr.reverse();
	return arr;
}

function reverseArrayInPlace(arr) {
	let len = arr.length;
	for (let index = 0; index < arr.length / 2; index++) {
		[arr[index], arr[len - index - 1]] = [arr[len - index - 1], arr[index]];
	}
	return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
