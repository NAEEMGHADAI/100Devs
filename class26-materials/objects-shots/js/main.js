//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

let input = document.querySelector("input");
let button = document.querySelector("button");
let h2 = document.querySelector("h2");
let img = document.querySelector("img");
let h3 = document.querySelector("h3");

button.addEventListener("click", (e) => {
	let val = input.value;
	val = change(val);
	let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${val}`;

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			addElement(data.drinks[0]);
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
});

function addElement(data) {
	h2.innerText = data.strDrink;
	h2.innerHTML += "</br>";
	img.src = data.strDrinkThumb;
	h3.innerHTML = data.strInstructions;
}
function change(val) {
	let valArr = val.split(" ");
	let ans = valArr[0];
	valArr.forEach((element, i) => {
		if (i !== 0) {
			ans = ans + "_" + element;
		}
	});
	return ans;
}
