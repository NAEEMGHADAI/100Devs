let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge(arr) {
	let avg = 0;
	let n = arr.length;
	arr.forEach((element) => {
		avg += element.age;
	});

	avg = avg / n;
	return avg;
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
