function pow(x, n) {
	let ans = 1;
	for (let index = 0; index < n; index++) {
		ans = ans * x;
	}
	return ans;
}
let x = prompt("x?");
let n = prompt("n?");
if (n < 1) {
	alert(`Power ${n} is not supported, use a positive integer`);
} else {
	alert(pow(x, n));
}
