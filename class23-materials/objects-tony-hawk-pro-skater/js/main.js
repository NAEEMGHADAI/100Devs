//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function Skater(name, clothColor, skateType, tatoo) {
	this.name = name;
	this.clothColor = clothColor;
	this.skateType = skateType;
	this.tatoo = tatoo;
	this.start = function () {
		console.log("Start skating");
	};
	this.jump = function () {
		console.log("Jummppp!!!");
	};
	this.stop = function () {
		console.log("Stooooop!!");
	};
}
let neo = new Skater("neo", "red", "goodOne", "horse");

neo.start();
neo.jump();
neo.stop();
