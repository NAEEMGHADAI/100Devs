document.querySelector("button").addEventListener("click", getFetch);
let body = document.querySelector("body");

function getFetch() {
	const source = document.querySelector(".source");
	const img = document.querySelector("img");
	const url = "https://api.waifu.im/random/";

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data);
			body.style.backgroundColor = data.images[0].dominant_color;
			img.removeAttribute("hidden");
			source.removeAttribute("hidden");
			img.src = data.images[0].url;
			source.href = data.images[0].source;
			// p.innerText = data.text;
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}
