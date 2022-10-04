//Create an espresso machine class that makes machines with 4 properties and 3 methods
class expresso {
	constructor(size, typeOfDrinks, color, brand) {
		this.size = size;
		this.typeOfDrinks = typeOfDrinks;
		this.color = color;
		this.brand = brand;
	}
	startPouring() {
		console.log("Zuuuupppp!!!");
		this.playMusic();
	}
	stop() {
		console.log("Stoooop!!!");
	}
	playMusic() {
		console.log("Playing Music");
	}
}

let Gaggia = new expresso(
	"big",
	["cappecino", "simple coffee"],
	"red",
	"Gaggia"
);
console.log(Gaggia);
Gaggia.startPouring();
