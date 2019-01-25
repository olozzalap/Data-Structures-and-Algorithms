//Write a recursive function that prints the nth fibonacci number. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers. For this problem, if you were asked to find the 7th fibonacci number, it would be 13. The whole sequence looks as follows: 1 1 2 3 5 8 13. As a bonus, see if you can print the whole sequence including the nth fibonacci.

function fibonacci(num, seq=[1, 1]) {
	// base case
	if (seq.length === num) {
		return {
			nth: seq[seq.length - 1],
			seq
		}
	}
	else {
		seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
		return fibonacci(num, seq);
	}
}

console.log(JSON.stringify(fibonacci(7)));
console.log(JSON.stringify(fibonacci(4)));
console.log(JSON.stringify(fibonacci(14)));
console.log(JSON.stringify(fibonacci(49)));