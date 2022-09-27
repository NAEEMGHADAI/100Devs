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
		let slideIndex = 0;
		showSlides();

		function showSlides() {
			let i;
			let slides = document.getElementsByClassName("mySlides");
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			slideIndex++;
			if (slideIndex > slides.length) {
				slideIndex = 1;
			}
			slides[slideIndex - 1].style.display = "block";
			setTimeout(showSlides, 2000); // Change image every 2 seconds
		}
	})
	.catch((err) => {
		console.log(`error ${err}`);
	});
