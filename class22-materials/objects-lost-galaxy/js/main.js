//Create a mouse object that has four properties and three methods
let mouse = {
	color: "black",
	size: 12,
	haveTail: true,
	healthy: true,

	eat: function () {
		console.log("It Eats cheese");
	},
	walk: function () {
		console.log("It walks vey fast");
	},
	jump: function () {
		console.log("It jumps when its life is on line");
	},
};

console.log(mouse);
