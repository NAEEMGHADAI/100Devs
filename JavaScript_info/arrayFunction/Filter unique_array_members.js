function unique(arr) {
	let ansArr = [];
	arr.forEach((element) => {
		if (!ansArr.includes(element)) {
			ansArr.push(element);
		}
	});
	return ansArr;
	// let arrSet = new Set(strings);
	// let ansArr = Array.from(arrSet);
	// return ansArr;
}

let strings = [
	"Hare",
	"Krishna",
	"Hare",
	"Krishna",
	"Krishna",
	"Krishna",
	"Hare",
	"Hare",
	":-O",
];

let arrSet = new Set(strings);
console.log(Array.from(arrSet));

console.log(unique(strings));
