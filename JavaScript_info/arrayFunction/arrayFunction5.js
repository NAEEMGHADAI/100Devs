let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (tempArr) => {
	let temp = tempArr.slice();
	return temp.sort();
};

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr);
