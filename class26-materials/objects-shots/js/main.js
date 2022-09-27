//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

let input = document.querySelector("input");
let button = document.querySelector("button");
let h2 = document.querySelector("h2");
let img = document.querySelector("img");
let h3 = document.querySelector("h3");

button.addEventListener("click", (e) => {
	let val = input.value;
	let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${val}`;

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data);
			console.log(data.drinks[0]);
			console.log(data.drinks[0].strDrink);
			h2.innerText = data.drinks[0].strDrink;
			h2.innerHTML += "</br>";
			img.src = data.drinks[0].strDrinkThumb;
			h3.innerHTML = data.drinks[0].strInstructions;
			// for (let index = 0; index < data.drinks.length; index++) {
			// 	console.log(data.drinks[index]);
			// 	console.log(data.drinks[index].strDrink);
			// 	h2.innerText = data.drinks[index].strDrink;
			// 	h2.innerHTML += "</br>";
			// 	img.src = data.drinks[index].strDrinkThumb;
			// 	h3.innerHTML = data.drinks[index].strInstructions;
			// }
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
});
