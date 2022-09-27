// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let stringQuestion = "how are you?";
if (stringQuestion.endsWith("?")) {
	console.log(stringQuestion);
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multipleWords = "Naeem Ghadai jr. dev";
multipleWords = multipleWords.replace("jr. dev", "software engineer");
console.log(multipleWords);

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
	let num = Math.random() * 12;
	if (num <= 3) {
		return "rock";
	} else if (num >= 4 && num <= 6) {
		return "paper";
	} else {
		return "scissors";
	}
}

let userChoice = rockPaperScissors();
console.log(userChoice);

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function rockPaperScissorsGame(userChoice) {
	let botChoice = rockPaperScissors();
	if (
		(userChoice === "rock" && botChoice === "scissors") ||
		(userChoice === "paper" && botChoice === "rock") ||
		(userChoice === "scissors" && botChoice === "paper")
	) {
		return "You Won!!";
	} else if (userChoice === botChoice) {
		return "Its a tie";
	} else {
		return "You Lose";
	}
}

console.log(rockPaperScissorsGame(userChoice));
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playRPS(arrChoices) {
	console.log("in foreach");
	arrChoices.forEach((element) => {
		console.log(rockPaperScissorsGame(element));
	});
}
playRPS(["rock", "paper", "scissors"]);
