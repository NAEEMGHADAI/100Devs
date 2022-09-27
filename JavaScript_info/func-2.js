// function checkAge(age) {
// 	if (age > 18) {
// 		return true;
// 	} else {
// 		return confirm("Did parents allow you?");
// 	}
// }

// checkAge(2);

// function checkAge2(age) {
// 	return age > 18 ? true : confirm("Did parents allow you?");
// }

// checkAge2(2);

function checkAge3(age) {
	return age > 18 || confirm("Did parents allow you?");
}

console.log(checkAge3(2));
