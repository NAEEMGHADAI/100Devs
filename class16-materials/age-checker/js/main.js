//Create a conditonal that checks their age

let h1 = document.querySelector("h1");
h1.addEventListener("click", fun);
let p = document.querySelector("p");
//If under 16, tell them they can not drive
function fun() {
	let stringAge = document.querySelector("#danceDanceRevolution");
	let age = Number(stringAge.value);
	if (age < 16) {
		alert("you can not drive");
		p.innerText = "you can not drive";
	} else if (age < 18) {
		alert(
			" you can't hate from outside the club, because you can't even get in"
		);
		p.innerText =
			"you can't hate from outside the club, because you can't even get in";
	} else if (age < 21) {
		alert("you can not drink");
		p.innerText = "you can not drink";
	} else if (age < 25) {
		alert("You can not rent cars affordably");
		p.innerText = "You can not rent cars affordably";
	} else if (age < 30) {
		alert("You can not rent fancy cars affordably");
		p.innerText = "You can not rent fancy cars affordably";
	} else {
		alert(" there is nothing left to look forward too");
		p.innerText = "there is nothing left to look forward too";
	}
}
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
