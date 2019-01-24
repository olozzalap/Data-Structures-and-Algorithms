// Write a recursive function that prints out the binary representation of a given integer. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

function intToBinary(int, binaryStr="", binaryStrIndex=0) {
	let nextValToCheck = 2 ** (binaryStr.length - (binaryStrIndex) - 1);
	console.log(int, binaryStr, binaryStrIndex);
	// base case
	if (int === 0 || (binaryStr.length > 0 && binaryStrIndex >= binaryStr.length)) {
		if (binaryStr.length === 0) {
			return "0";
		}
		else {
			return binaryStr;
		}
	}
	// First we construct the max size of the binary string
	// is int greater than the max possible value expressed by the current binary string length ie: 2, 4, 8, 16, 32 (minus one for zero-indexing)
	else if (int > (2 ** binaryStr.length) - 1) {
		binaryStr = binaryStr + "0";
		return intToBinary(int, binaryStr, binaryStrIndex);
	}
	else if (int >= nextValToCheck) {
		console.log("Setting value at index: " + binaryStrIndex + "to 1!!");
		int = int - nextValToCheck;
		// binaryStr[binaryStrIndex] = "1";
		binaryStr = binaryStr.substring(0, binaryStrIndex) + "1" + binaryStr.substring(binaryStrIndex + 1);
	}
	binaryStrIndex++;
	return intToBinary(int, binaryStr, binaryStrIndex);
}

console.log("0 in BINARY is: " + intToBinary(0))
console.log("1 in BINARY is: " + intToBinary(1))
console.log("2 in BINARY is: " + intToBinary(2))
console.log("3 in BINARY is: " + intToBinary(3))
console.log("6 in BINARY is: " + intToBinary(6))
console.log("7 in BINARY is: " + intToBinary(7))
console.log("9 in BINARY is: " + intToBinary(9))
console.log("14 in BINARY is: " + intToBinary(14))
console.log("25 in BINARY is: " + intToBinary(25))
console.log("28 in BINARY is: " + intToBinary(28))
console.log("59 in BINARY is: " + intToBinary(59))
console.log("127 in BINARY is: " + intToBinary(127))