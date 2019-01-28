// Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

function removeChars(string, chars) {
	let returnString = "";
	for (let i = 0; i < string.length; i++) {
		if (chars.indexOf(string[i]) === -1) {
			returnString += string[i];
		}
	}
	return returnString;
}

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))
console.log(removeChars('Eben is spelt Evan dontcha know?!?!', 'ea'))
console.log(removeChars("I really just don't care for spaces, we totally don't need them :)", ' '))