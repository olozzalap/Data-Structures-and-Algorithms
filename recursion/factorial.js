// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120

function factorial(num) {
	// base case
	if (num === 1) {
		return num;
	}
	else {
		return num * factorial(num - 1);
	}
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(9));
console.log(factorial(15));
console.log(factorial(19));
console.log(factorial(28));