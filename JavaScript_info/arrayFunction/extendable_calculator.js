function Calculator() {
	this.methods = {
		"-": (a, b) => a - b,
		"+": (a, b) => a + b,
	};

	this.calculate = function (operation) {
		let operationArr = operation.split(" ");
		console.log(operationArr);
		a = +operationArr[0];
		op = operationArr[1];
		b = +operationArr[2];

		if (!this.methods[op] || isNaN(a) || isNaN(b)) {
			return NaN;
		}
		return this.methods[op](a, b);
	};
	this.addMethod = function (operator, operation) {
		this.methods[operator] = operation;
	};
}

let calc = new Calculator();

console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

// console.log(powerCalc);
let result = powerCalc.calculate("2 % 3");
console.log(result); // 8
