//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["Terminator", "Harry Potter", "Back To the Future"];

let h2 = document.querySelector("h2");

movies.forEach((element) => {
	// let p = document.createElement("p");
	// p.innerText = element;
	// h2.appendChild(p);
	h2.innerText += element;
});

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let arrNum = [1, 2, 3, 4];

arrNum.forEach((ele, i) => {
	arrNum[i] = ele + 3;
});
console.log(arrNum);

//Find the average of all the numbers from question three
let avg = 0;
arrNum.forEach((ele) => {
	avg += ele;
});

console.log(avg);
avg = avg / arrNum.length;
console.log(avg);
