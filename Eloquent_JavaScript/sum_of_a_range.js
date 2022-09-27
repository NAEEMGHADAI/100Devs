// Your code here.

const range = (start, end, reverse) => {
	let rangeArray = [];
	for (let index = start; index <= end; index++) {
		rangeArray.push(index);
	}
	if (reverse === -1) {
		for (let index = start; index >= end; index--) {
			rangeArray.push(index);
		}
	}
	return rangeArray;
};

const sum = (arr) => {
	let sumAns = 0;
	for (let index = 0; index < arr.length; index++) {
		sumAns += arr[index];
	}
	return sumAns;
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
