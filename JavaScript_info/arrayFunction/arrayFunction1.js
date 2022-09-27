const camelize = (str) => {
	let temp = str.split("-");
	temp.forEach((element, i) => {
		if (i !== 0) {
			let wordTemp = element[0].toUpperCase();
			let tempArr = element.slice(1);
			temp[i] = wordTemp + tempArr;
		}
	});
	temp = temp.join("");
	return temp;
};

console.log(camelize("background-color"));
