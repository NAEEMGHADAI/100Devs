// function loadJson(url) {
// 	return fetch(url).then((response) => {
// 		if (response.status == 200) {
// 			return response.json();
// 		} else {
// 			throw new Error(response.status);
// 		}
// 	});
// }

async function loadJson(url) {
	let response = await fetch(url);
	console.log(response);
	if (response.status == 200) {
		return response.json();
	} else {
		throw new Error(response.status);
	}
}

loadJson("https://javascript.info/no-such-user.json").catch(alert); // Error: 404
