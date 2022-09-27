let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
	let tempArr = arr.filter((n) => (a <= n ? (n <= b ? true : false) : false));
	// console.log(tempArr);
	return tempArr;
};

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
