// An anagram is any word or phrase that exactly reproduces the letters in another order. Write a function that creates an anagram (listing all the rearrangements of a word) of a given word. For example, if the user types east, the program should list all 24 permutations, including eats, etas, teas, and non-words like tsae.
// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given east, use e as a prefix and you would place e in front of all six permutations of ast — ast, ats, sat, sta, tas, and tsa. This will give you the words east, eats, esat, esta, etas, and etsa. Continue this way until you find all the anagrams for east. There should be 24 of them.

function anagram(word, matches=[]) {
	// console.log(word, matches);
	if (word.length === 0) {
		return matches;
	}
	else {
		let firstChar = word[0];
		word = word.slice(1);
		if (matches.length === 0) {
			matches.push(firstChar);
			return anagram(word, matches);
		}
		else {
			let currentAnagramsLength = matches[0].length;
			let newMatches = [];
			for (let i = 0; i < matches.length; i++) {
				for (let j = 0; j <= currentAnagramsLength; j++) {
					let newMatch = matches[i];
					newMatch = newMatch.substring(0, j) + firstChar + newMatch.substring(j);
					newMatches.push(newMatch);
				}
			}
			return anagram(word, newMatches);
		}
	}
}

console.log(anagram("grt"));
console.log(anagram("dance"));
console.log(anagram("bowser"));