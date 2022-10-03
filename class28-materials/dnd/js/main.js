//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener("click", getFetch);
let classes = document.querySelector("h3");
let subclasses = document.querySelector("ul");
function getFetch() {
	const choice = document.querySelector("input").value;
	const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data);
			classes.innerText = data.classes[0].name;
			// subclasses.forEach((element) => {
			// 	subclasses.removeChild(element);
			// });
			subclasses.innerHTML = "";
			data.subclasses.forEach((element) => {
				let li = document.createElement("li");
				li.textContent = element.name;
				subclasses.appendChild(li);
			});
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}
