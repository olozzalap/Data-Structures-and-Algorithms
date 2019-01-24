// Split a string based upon a separator (similar to String.prototype.split).

function stringSplitter(str, separator) {
	console.log(str);
	// base case
	if (str.indexOf(separator) === -1) {
		return [str]
	}
	else {
		return [str.slice(0, str.indexOf(separator))]
			.concat(
				stringSplitter(str.slice(str.indexOf(separator) + separator.length), separator)
			)
	}
}

console.log(stringSplitter("i want to break free", " "));
console.log(stringSplitter("and, whence he came, to the barrows den, I would always dine, upon him then, again, again, when, nay again!", ","));