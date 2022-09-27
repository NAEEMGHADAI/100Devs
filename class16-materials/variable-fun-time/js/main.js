//--- Easy
//create a variable and assign it a number
var num = 12;
//minus 10 from that number
num -= 10;
//print that number to the console
console.log(num);

//--- Medium
//create a variable that holds a value from the input
var val = document.querySelector("#danceDanceRevolution");
val.addEventListener("keypress", fun1);

//add 25 to that number

// //alert that number
var intNum = 0;
function fun1(e) {
	if (e.key === "Enter") {
		// code for enter
		intNum = Number(e.target.value);
		if (intNum === NaN) {
			alert("please enter only a number");
		} else if (typeof intNum === "number") {
			intNum += 25;
			alert(intNum);
		}
	}
}

//--- Hard
//create a variable that holds the h1
var h1 = document.querySelector("h1");
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener("click", fun);

function fun() {
	console.log(intNum + num);
}
