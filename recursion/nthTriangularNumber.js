// Calculates the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

function nthTriangularNumber(n, seq) {
	console.log(seq);
	// base case
	if (seq.length === n) {
		return seq[seq.length - 1]
	}
	else {
		let lastSeqNum = seq[seq.length - 1] || 0;
		let secondLastSeqNum = seq[seq.length - 2] || 0;
		let increment = (lastSeqNum - secondLastSeqNum) + 1;

		seq.push(increment + lastSeqNum);
		return nthTriangularNumber(n, seq);
	}
}

console.log(nthTriangularNumber(9, [])); //45