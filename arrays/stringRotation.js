// Given two strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

function checkStrRotation(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	let matchingFirstCharsIndexes = [];
	str2.split("").filter((char, index) => {
		if (char === str1[0]) {
			matchingFirstCharsIndexes.push(index);
		}
	});
	console.log("matchingFirstCharsIndexes is: ", matchingFirstCharsIndexes);
	for (let i = 0; i < matchingFirstCharsIndexes.length; i++) {
		let matchingStr = "";
		console.log("i is: " + i);
		for (let j = 0; j < str1.length; j++) {
			let index = matchingFirstCharsIndexes[i] + j;
			if (index > str1.length - 1) {
				index = index - str1.length;
			}
			console.log(str2[index], str1[j]);
			if (str2[index] !== str1[j]) {
				break;
			}
			else {
				matchingStr += str2[index];
			}
		}
		console.log("matchingStr is " + matchingStr);
		if (matchingStr === str1) {
			return true;	
		}
	}
}

console.log(checkStrRotation("amazon", "azonma"));
console.log(checkStrRotation("amazon", "azonam"));
console.log(checkStrRotation("eben likes chocolate", " likes chocolateeben"));