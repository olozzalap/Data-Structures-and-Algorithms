// Split a string based upon a separator (similar to String.prototype.split).

function stringSplitter(str, separator) {
	console.log(str);
	// base case
	if (str.indexOf(separator) === -1) {
		return [str]
	}
	else {
		// Gets first part of string up till the separator
		return [str.slice(0, str.indexOf(separator))]
		// Combined with the next separated chunk(s) including an offset so the separator itself is not included
			.concat(
				stringSplitter(str.slice(str.indexOf(separator) + separator.length), separator)
			)
	}
}

console.log(stringSplitter("i want to break free", " "));
console.log(stringSplitter("and, whence he came, to the barrows den, I would always dine, upon him then, again, again, when, nay again!", ","));