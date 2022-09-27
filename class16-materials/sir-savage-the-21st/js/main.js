//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function loop21() {
	for (let index = 0; index < 21; index++) {
		console.log("21");
	}
}
loop21();

//Bonus can you make it print '21' 21 times to the dom?
function printToDom() {
	let h2 = document.querySelector("#savageSays");
	for (let index = 0; index < 21; index++) {
		let p = document.createElement("p");
		p.innerText = "21" + " " + index;
		h2.appendChild(p);
	}
}
printToDom();
