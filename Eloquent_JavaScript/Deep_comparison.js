// Your code here.

function deepEqual(a, b) {
	if (a === b) {
		return true;
	}
	if (a == null || typeof a != "object" || b == null || typeof b != "object") {
		return false;
	}

	var propsInA = 0,
		propsInB = 0;
	//for-in loop counts the number of properties in a and b
	for (var prop in a) {
		console.log("propsA: ", prop);
		propsInA += 1;
	}
	for (var prop in b) {
		propsInB += 1;
		console.log("propsInB: ", prop);
		console.log("(prop in a)", prop in a);
		if (!(prop in a) || !deepEqual(a[prop], b[prop])) return false;
	}
	console.log(propsInA, propsInB);
	return propsInA == propsInB;
}

let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
