// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseString(str) {
	// base case
	if (str.length < 2) {
		return str;
	}
	else {
		// recursively returns the last char, followed by the middle chars, followed by the first char
		return str[str.length - 1] + reverseString(str.slice(1, -1)) + str[0];
	}
}

console.log(reverseString("pinto beans"));
console.log(reverseString("times like these"));
console.log(reverseString("brap brap pew pew"));
console.log(reverseString("overnumerousness"));