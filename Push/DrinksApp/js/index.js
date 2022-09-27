let slideshowCont = document.querySelector(".slideshow-container");

let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin`;

fetch(url)
	.then((res) => res.json()) // parse response as JSON
	.then((data) => {
		for (let index = 0; index < data.drinks.length; index++) {
			console.log(data.drinks[index]);
			console.log(data.drinks[index].strDrink);

			let divMain = document.createElement("div");
			divMain.classList.add("mySlides");
			divMain.classList.add("fade");
			slideshowCont.appendChild(divMain);

			let imgSrc = document.createElement("img");
			imgSrc.src = data.drinks[index].strDrinkThumb;
			imgSrc.style.width = "100%";
			divMain.appendChild(imgSrc);

			let divText = document.createElement("div");
			divText.innerText = data.drinks[index].strDrink;
			divText.classList.add("text");
			divMain.appendChild(divText);
		}
		function showSlides(n) {
			let i;
			let slides = document.getElementsByClassName("mySlides");
			let dots = document.getElementsByClassName("dot");
			if (n > slides.length) {
				slideIndex = 1;
			}
			if (n < 1) {
				slideIndex = slides.length;
			}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			slides[slideIndex - 1].style.display = "block";
			dots[slideIndex - 1].className += " active";
		}
		let slideIndex = 1;
		showSlides(slideIndex);

		// Next/previous controls
		function plusSlides(n) {
			showSlides((slideIndex += n));
		}

		// Thumbnail image controls
		function currentSlide(n) {
			showSlides((slideIndex = n));
		}
	})
	.catch((err) => {
		console.log(`error ${err}`);
	});

// button.addEventListener("click", (e) => {
// 	let val = input.value;
// 	let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${val}`;

// 	fetch(url)
// 		.then((res) => res.json()) // parse response as JSON
// 		.then((data) => {
// 			for (let index = 0; index < data.drinks.length; index++) {
// 				console.log(data.drinks[index]);
// 				console.log(data.drinks[index].strDrink);
// 				let divMain = document.createElement("div");
// 				divMain.classList.add("mySlides");
// 				divMain.classList.add("fade");
// 				slideshowCont.appendChild(divMain);
// 				let imgSrc = document.createElement("img");
// 				imgSrc.src = data.drinks[index].strDrinkThumb;
// 				imgSrc.style.width = "100%";
// 				divMain.appendChild(imgSrc);
// 				let divText = document.createElement("div");
// 				divText.innerText = data.drinks[index].strDrink;
// 				divText.classList.add("text");
// 				divMain.appendChild(divText);
// 				h2.innerText = data.drinks[index].strDrink;
// 				h2.innerHTML += "</br>";
// 				img.src = data.drinks[index].strDrinkThumb;
// 				h3.innerHTML = data.drinks[index].strInstructions;
// 			}
// 		})
// 		.catch((err) => {
// 			console.log(`error ${err}`);
// 		});
// });
