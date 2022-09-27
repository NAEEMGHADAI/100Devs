function myFunction() {
	var x = document.querySelector(".nav-main");
	if (x.classList.contains("laptop")) {
		x.classList.add("mobile");
		x.classList.remove("laptop");
	} else {
		x.classList.remove("mobile");
		x.classList.add("laptop");
	}
}
