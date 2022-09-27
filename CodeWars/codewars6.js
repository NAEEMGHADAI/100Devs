// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(integer) {
	let ansStr = "";
	for (let index = 0; index < integer; index++) {
		for (let index2 = 0; index2 < integer; index2++) {
			ansStr += "+";
		}
		if (index !== integer - 1) {
			ansStr += "\n";
		}
	}
	return ansStr;
}

console.log(generateShape(4));
