// Create a calculator
// importance: 5
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
let calculator = {
	a: 0,
	b: 0,
	read() {
		this.a = prompt("a?", 0);
		this.b = prompt("b?", 0);
	},
	sum() {
		let add = Number(this.a) + Number(this.b);
		return add;
	},
	mul() {
		let multi = Number(this.a) * Number(this.b);
		return multi;
	},
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
