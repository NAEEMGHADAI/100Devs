// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = " Coca-Cola ";
console.log(favDrink.trim());
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let fruits = "mango apple orange";
console.log(fruits.search("apple"));
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor() {
	let num = Math.random() * 12;
	if (num < 5) {
		return "rock";
	} else if (num > 4 && num < 9) {
		return "paper";
	} else {
		return "scissor";
	}
}
let choice = rockPaperScissor();
console.log(choice);

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playRPS(choice) {
	// let num = Math.random() * 12;
	// console.log(num);
	// if (num <= 4) {
	// 	if (choice === "paper") {
	// 		return ["You won", "rock"];
	// 	} else if (choice === "rock") {
	// 		return ["Its a tie", "rock"];
	// 	} else {
	// 		return ["Bot won", "rock"];
	// 	}
	// } else if (num >= 5 && num <= 8) {
	// 	if (choice === "scissor") {
	// 		return ["You won", "paper"];
	// 	} else if (choice === "paper") {
	// 		return ["Its a tie", "paper"];
	// 	} else {
	// 		return ["Bot won", "paper"];
	// 	}
	// } else {
	// 	if (choice === "rock") {
	// 		return ["You won", "scissor"];
	// 	} else if (choice === "scissor") {
	// 		return ["Its a tie", "scissor"];
	// 	} else {
	// 		return ["Bot won", "scissor"];
	// 	}
	// }

	let botChoice = rockPaperScissor();

	if (
		(choice === "rock" && botChoice === "scissor") ||
		(choice === "paper" && botChoice === "rock") ||
		(choice === "scissor" && botChoice === "paper")
	) {
		return "You Won !!";
	} else if (choice === botChoice) {
		return "Its a Tie";
	} else {
		return "You lost";
	}
}

console.log(playRPS(choice));
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playRPSXTimes(arr) {
	arr.forEach((elem) => console.log(playRPS(elem)));
}

let arr = ["rock", "paper", "scissor"];
playRPSXTimes(arr);
