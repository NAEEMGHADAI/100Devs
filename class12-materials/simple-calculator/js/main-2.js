let total = 0;

document.querySelector("#pumpkin").addEventListener("click", changeToZero);
document.querySelector("#dominosPizza").addEventListener("click", addThree);
document.querySelector("#zebra").addEventListener("click", addNine);
document.querySelector("#plusTen").addEventListener("click", addTen);
document
	.querySelector("#cantThinkOfAnything")
	.addEventListener("click", subTwo);

function changeToZero() {
	total = 0;
	document.querySelector("#placeToPutResult").innerHTML = total;
}

function addThree() {
	total += 3;
	document.querySelector("#placeToPutResult").innerHTML = total;
}

function addNine() {
	total += 9;
	document.querySelector("#placeToPutResult").innerHTML = total;
}

function subTwo() {
	total -= 2;
	document.querySelector("#placeToPutResult").innerHTML = total;
}

function addTen() {
	total += 10;
	document.querySelector("#placeToPutResult").innerHTML = total;
}
