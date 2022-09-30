document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
	const p = document.querySelector(".fact");
	const url = "https://uselessfacts.jsph.pl/random.json?language=en";

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data);
			p.innerText = data.text;
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}
