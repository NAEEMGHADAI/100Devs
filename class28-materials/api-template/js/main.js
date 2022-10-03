//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);
let h2 = document.querySelector("h2");
h2.innerText = localStorage.getItem("books");
function getFetch() {
	const number = document.querySelector("input").value;
	console.log(number);
	const url = `https://openlibrary.org/isbn/${number}.json`;

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data);
			console.log(data.title);
			if (!localStorage.getItem("books")) {
				localStorage.setItem("books", data.title);
			} else {
				let books = localStorage.getItem("books") + " ; " + data.title;
				localStorage.setItem("books", books);
			}
			let h2 = document.querySelector("h2");
			h2.innerText = localStorage.getItem("books");
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}
