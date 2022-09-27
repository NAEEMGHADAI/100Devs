// Your code here.

function arrayToList(arr) {
	let list = null;
	let ans = null;
	for (let index = arr.length - 1; index >= 0; index--) {
		ans = {
			value: arr[index],
			rest: list,
		};
		list = ans;
	}
	return ans;
}

function listToArray(list) {
	// for (let node = list; node; node = node.rest) {}
	let node = list;
	let ansArr = [];
	while (node != null) {
		ansArr.push(node.value);
		node = node.rest;
	}
	return ansArr;
}

function prepend(num, list) {
	let ansObj = {
		value: num,
		rest: list,
	};
	return ansObj;
}

function nth(obj, val) {
	let node = obj;
	count = 0;
	while (node !== null) {
		if (count === val) {
			return node.value;
		}
		count++;
		node = node.rest;
	}
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
