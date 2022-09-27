//Write your pseduo code first!

document.querySelector("#button").addEventListener("click", celToFarKel);

function celToFarKel() {
	let cel = document.querySelector("#input").value;
	var Fer = "Fahrenheit  is ";
	var Kel = "Kelvin is ";
	document.querySelector("#Fer").innerText = Fer + (cel * 9) / 5 + 32;
	var val = Number(cel) + 273.15;
	document.querySelector("#Kel").innerHTML = Kel + val;
}
