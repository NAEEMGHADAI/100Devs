document.querySelector("#check").addEventListener("click", check);

function check() {
	const day = document.querySelector("#day").value.toLowerCase();

	console.log(day);
	if (day === "tuesday" || day === "thrusday") {
		document.querySelector("#placeToSee").innerHTML = "Class Day";
	} else if (day === "saturday" || day === "sunday") {
		document.querySelector("#placeToSee").innerHTML = "Weekend";
	} else if (day === "monday" || day === "wednesday" || day === "friday") {
		document.querySelector("#placeToSee").innerHTML = "Boring Day";
	} else {
		document.querySelector("#placeToSee").innerHTML = "Not A day: ERROR 404";
	}
}
