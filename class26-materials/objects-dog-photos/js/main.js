//Get a dog photo from the dog.ceo api and place the photo in the DOM
let img = document.querySelector("img");

fetch("https://dog.ceo/api/breeds/image/random")
	.then((res) => res.json()) // parse response as JSON
	.then((data) => {
		console.log(data);
		img.setAttribute("src", data.message);
	})
	.catch((err) => {
		console.log(`error ${err}`);
	});
