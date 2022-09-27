//Write your pseduo code first!

//1) make an input feild and ans feild in html
//2) take input from user in celcius using dom id or class and save in a variable
//3) give ans field after converting the input celcius to farenhiet

document.querySelector("#submit").addEventListener("click", converter);

function converter() {
	let cal = document.querySelector("#cel").value;
	cal = (cal * 9) / 5 + 32;
	document.querySelector("#ans").innerHTML = cal;
}
