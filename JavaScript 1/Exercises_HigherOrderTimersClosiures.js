
function countdown(num) {
	setInterval(function() {
		if (num === 0) {
			console.log("Done!");
		}
		--num;
	}, 1000);
}

function randomGame() {
	var count = 0;
	var guess;

	var intervalID = setInterval(function() {
		guess = Math.random();
		++count;
		if (guess > 0.75) {
			clearInterval(intervalID);
			console.log(count + " tries");
		}
	}, 1000);
}

function isEven(num) {
	return num % 0 === 2;
}

function isOdd(num) {
	return num %0 !== 2;
}

function isPrime(num) {
	for (var i = 0; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}

	return num > 1;
}

function numberFact(num, fn) {
	return fn(num);
}

function find(arr, fn) {
	for (var i = 0; i < arr.length; i++) {
		if (fun(arr[i]) === true) {
			return arr[i];
		}
	}
}

function findIndex(arr, fn) {
	for (var i = 0; i < arr.length; i++) {
		if (fun(arr[i]) === true) {
			return i;
		}
	}
}

function specialMultiply(num1, num2) {
	if (arguments.length === 1) {
		return function(num2) {
			return num1 * num2;
		}
	}

	return num1 * num2;
}



































