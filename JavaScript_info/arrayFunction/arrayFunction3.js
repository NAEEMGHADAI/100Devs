let arr = [5, 3, 8, 1];

const filterRangeInPlace = (arr, a, b) => {
	for (let index = 0; index < arr.length; index++) {
		if (a <= arr[index] && arr[index] <= b) {
			continue;
		} else {
			arr.splice(index, 1);
			console.log(arr);
			index--;
		}
	}
};

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr);
