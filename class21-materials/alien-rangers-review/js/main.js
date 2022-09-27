//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = [
	"Friends",
	"Suits",
	"Game of Thrones",
	"Rings of Power",
	"She Hulk",
];

tvShows.forEach((element) => {
	console.log(element);
});

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let numArr = [1, 3, 4, 6, 7, 8, 10];

let evenArr = numArr.filter((ele) => ele % 2 === 0);
console.log(evenArr);

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function secondLowestHigest(arr) {
	arr.sort((a, b) => a - b);
	console.log(arr[1], arr[arr.length - 2]);
}

secondLowestHigest([1, 2, 5, 12, 2, 11, 10, 8]);
