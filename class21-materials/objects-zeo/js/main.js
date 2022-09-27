//Create a stopwatch object that has four properties and three methods
let stopWatch = {};

stopWatch.color = "Black";
stopWatch.currentTime = 12;
stopWatch.shape = "Round";
stopWatch.brand = "nike";

stopWatch.showTime = function (time) {
	console.log(`current time is ${time}`);
};

stopWatch.addCount = function () {
	stopWatch.currentTime += 1;
};

stopWatch.stop = function (time) {
	console.log(`Stoped at ${time}`);
};

stopWatch.showTime(stopWatch.currentTime);
console.log(stopWatch);
stopWatch.addCount();
console.log(stopWatch);
stopWatch.stop(stopWatch.currentTime);
console.log(stopWatch);
