//Create an a class and extend it - Can be anything you would like it to be!

class Animal {
	constructor(name) {
		this._name = name;
	}
	get name() {
		return this._name;
	}
	speak() {
		console.log(`${this.name} makes a sound`);
	}
}

class wildAnimal extends Animal {
	constructor(name, origin) {
		super(name);
		this.origin = origin;
	}
	roar() {
		console.log("ROAAAARR");
	}
}
class Dog extends wildAnimal {
	constructor(name, origin, breed) {
		super(name, origin);
		this.breed = breed;
	}
}

class Cat extends Animal {
	constructor(name, breed, isCasterd) {
		super(name);
		this.breed = breed;
		this.isCasterd = isCasterd;
	}
}

let simba = new Dog("Simba", "Australia", "Sheperd");
let sunShine = new Cat("SunShine", "Neko", false);
console.log(simba.origin);
console.log(simba.name);
console.log(simba.breed);
console.log(simba.roar());
