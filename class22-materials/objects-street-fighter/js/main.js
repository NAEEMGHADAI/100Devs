//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function Characters(name, specialMove, style, clothColor) {
	(this.name = name), (this.specialMove = specialMove), (this.style = style);
	(this.clothColor = clothColor),
		(this.rightKick = function () {
			console.log("RIGHT KICKK!!!!");
		});
	this.leftKick = function () {
		console.log("LEFT KICCKK!!!");
	};
	this.specialMoveActive = function () {
		console.log(`This is a special Move: ${specialMove}`);
	};
}

let neo = new Characters("neo", "kameha", "leg Fight", "Red");
console.log(neo);
console.log(neo.specialMoveActive());
