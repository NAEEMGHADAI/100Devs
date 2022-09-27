//Create a function that grabs the number of snacks from the input and tells you to stop that many times
let help = document.querySelector("#help");
let stops = document.querySelector("#stops");

help.addEventListener("click", stopSnacking);

function stopSnacking() {
	let value = Number(document.querySelector("input").value);
	stops.innerText = "";
	console.log(value);
	for (let index = 0; index < value; index++) {
		stops.innerText = stops.innerText + " " + "STOP!";
	}
}
