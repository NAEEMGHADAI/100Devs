document.getElementById("purple").onclick = changeColorToPurple;
document.getElementById("green").onclick = changeColorToGreen;
document.getElementById("blue").onclick = changeColorToBlue;
document.getElementById("yellow").onclick = changeColorToYellow;

function changeColorToBlue() {
	document.querySelector("body").style.background = "rgba(0, 254, 255)";
	document.querySelector("body").style.color = "white";
}

function changeColorToGreen() {
	document.querySelector("body").style.backgroundColor = "rgba(0, 253, 81, 1)";
	document.querySelector("body").style.color = "white";
}

function changeColorToPurple() {
	document.querySelector("body").style.backgroundColor =
		"rgba(241, 63, 247, 1)";
	document.querySelector("body").style.color = "white";
}
function changeColorToYellow() {
	document.querySelector("body").style.backgroundColor = "yellow";
	document.querySelector("body").style.color = "white";
}
