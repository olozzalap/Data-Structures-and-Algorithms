// A common mistake users make when they type in an URL is to put spaces between words or letters. One solution that developers can use to solve this problem is to replace any spaces with a '%20'. Write a method that takes in a string and replaces all its empty spaces with a '%20'. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

function urlify(str) {
	let strArr = str.split("");
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i] === " ") {
			strArr[i] = "%20";
		}
	}
	return strArr.join("");
}

console.log(urlify("tauhida parveen"));
console.log(urlify("www.thinkful.com /tauh ida parv een"));
console.log(urlify("it is not but for the light of dawn till we   are  to       be seen"));