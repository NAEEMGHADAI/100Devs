//Create a dog object that has four properties and three methods

const dog = {};

dog.color = "brown";
dog.name = "doggy";
dog.favFood = "dog food";
dog.sleepTime = "12am";

dog.bark = function () {
	console.log("Bow Bow!!");
};
dog.care = function () {
	console.log("WowOwn");
};
dog.run = function () {
	console.log("He is lazy!!!!!");
};
console.log(dog);
