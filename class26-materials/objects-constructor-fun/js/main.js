//Create a constructor with 4 properties and 3 methods
//Create a pizza object that has four properties and three methods

// const pizza = {};

function Pizza(shape, color, type, isVeg) {
	this.shape = shape;
	this.color = color;
	this.type = type;
	this.isVeg = isVeg;
	this.estDeliveryTime = function () {
		console.log("Calculating...");
	};
	this.burnMouth = function () {
		console.log("hvjvjhbl lknkjbkj ");
	};
	this.frisbee = function () {
		console.log("Yyyyeeeetttt");
	};
}

let pizzaThin = new Pizza("round", "red", "tomato", false);
console.log(pizzaThin);
