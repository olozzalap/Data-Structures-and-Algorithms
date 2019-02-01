const _Node = require('./_node.js');

class Stack {
	constructor() {
		this.top = null;
	}
	// accepts one to many arguments for items to push, in order
	push() {
		// console.log(arguments);
		for ( let i = 0; i < arguments.length; i++) {
			if (!this.top) {
				this.top = new _Node(arguments[i], null);
			}
			else {
				let node = new _Node(arguments[i], this.top);
				this.top = node;
			}
		}
		return this.top;
	}
	pop() {
		if (!this.top) {
			return null;
		}
		let node = this.top;
		this.top = this.top.next;
		return node.data;
	}
	peek() {
		return this.top;
	}
}

let stack = new Stack();
// stack.push("Kirk", "Spock", "McCoy", "Scotty");
// stack.push("Welschy");
// stack.pop();
// stack.pop();
// stack.pop();

function is_palindrome(s) {
	let stack = new Stack();
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // your code goes here
    let chars = s.split("");
    let middleIndex = (chars.length - 1) / 2;
	console.log(chars, middleIndex, chars[middleIndex]);
	let firstHalf = "";
	let secondHalf = "";
    for (let i = 0; i < chars.length; i++) {
    	if (i < middleIndex) {
    		stack.push(chars[i]);
    		firstHalf += chars[i];
    	}
    	else if (i > middleIndex) {
    		let char = stack.pop();
    		if (char !== chars[i]) {
    			return false;
    		}
    		secondHalf += char;
    	}
    	console.log(firstHalf, secondHalf);
    }
    return true;
}

// console.log(is_palindrome("dad")); // true
// console.log(is_palindrome("A man, a plan, a canal: Panama")); //true
// console.log(is_palindrome("1001")); // true
// console.log(is_palindrome("Tauhida")); //false

// Parses for matching (), [], {}, '' and "". Returns true if the str is all valid and returns the {index, char} if error
function checkMatchingBrackets(str) {
	const brackets = {
		openParentheses: "(",
		closeParentheses: ")",
		openBrackets: "[",
		closeBrackets: "]",
		openBraces: "{",
		closeBraces: "}"
	}
	let chars = str.split("");
	let bracketsStack = new Stack();
	let quotesStack = new Stack();
	let inSingleQuote = false;
	let inDoubleQuote = false;
	for (let i = 0; i < chars.length; i++) {
		if (chars[i] === "'") {
			inSingleQuote = !inSingleQuote;
		}
		else if (chars[i] === '"') {
			inDoubleQuote = !inDoubleQuote;
		}
		// console.log(inSingleQuote, inDoubleQuote);

		if (!inSingleQuote && !inDoubleQuote) {
			if (chars[i] === brackets.openParentheses) {
				bracketsStack.push({index: i, char: chars[i]})
			}
			else if (chars[i] === brackets.closeParentheses) {
				let lastOpen = bracketsStack.pop();
				if (lastOpen === null || lastOpen.char !== brackets.openParentheses) {
					return lastOpen || {index: i, char: chars[i]};
				}
			}
			else if (chars[i] === brackets.openBrackets) {
				bracketsStack.push({index: i, char: chars[i]})
			}
			else if (chars[i] === brackets.closeBrackets) {
				let lastOpen = bracketsStack.pop();
				if (lastOpen === null || lastOpen.char !== brackets.openBrackets) {
					return lastOpen || {index: i, char: chars[i]};
				}
			}
			else if (chars[i] === brackets.openBraces) {
				bracketsStack.push({index: i, char: chars[i]})
			}
			else if (chars[i] === brackets.closeBraces) {
				let lastOpen = bracketsStack.pop();
				if (lastOpen === null || lastOpen.char !== brackets.openBraces) {
					return lastOpen || {index: i, char: chars[i]};
				}
			}
		}
	}
	let lastOpen = bracketsStack.pop();
	if (lastOpen !== null) {
		console.log("open bracket remained unclosed!");
		return lastOpen;
	}
	return true;
}

// console.log(checkMatchingBrackets("2133()(adnad(awdad8ad(adand)adnwad)ankawd)")); // true 
// console.log(checkMatchingBrackets("61(()")); // { index: 2, char: '(' }
// console.log(checkMatchingBrackets("61)(()")); // { index: 2, char: ')' }
// console.log(checkMatchingBrackets("{oye: [1, 2, 3], a: (1 + 2+ (1, 2,3 )), c: {1: 1, 2: blergh}, d: ()}")); // true
// console.log(checkMatchingBrackets("{oye: [1, 2, 3], a: ((1 + 2+ (1, 2,3 )), c: {1: 1, 2: blergh}, d: ()}")); // { index: 20, char: '(' }
// console.log(checkMatchingBrackets("{oye: [1, 2, 3], a: (1 + 2+ (1, 2,3 )), c: {1: 1, 2: blergh}}, d: ()}")); // { index: 68, char: '}' }
// console.log(checkMatchingBrackets("61{('(}[{}[(0(0)(0()()()}}{}{)(][][)(}{)(][][')[ohno]}")); // true
// console.log(checkMatchingBrackets("61{(('}[{}[(0(0)(0()()()}}{}{)(][][)(}{)(][][')[ohno]}")); // { index: 3, char: '(' }
// console.log(checkMatchingBrackets('[{a: "}{)(][}{)(}{{}{HOTFRESHCODE", b: ({1:[a, b, c]})}]')); // true
// console.log(checkMatchingBrackets('[{a: }"{)(][}{)(}{{}{HOTFRESHCODE", b: ({1:[a, b, c]})}]')); // { index: 0, char: '[' }