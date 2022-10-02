//Create a button that adds 1 to a botScore stored in localStorage

document.querySelector("button").addEventListener("click", increaseCount);
const h2 = document.querySelector("h2");
if (!localStorage.getItem("botScore")) {
	localStorage.setItem("botScore", 0);
} else {
	h2.innerText = localStorage.getItem("botScore");
}

function increaseCount() {
	let botScoreVal = localStorage.getItem("botScore");
	botScoreVal = Number(botScoreVal) + 1;
	h2.innerText = botScoreVal;
	localStorage.setItem("botScore", botScoreVal);
}
