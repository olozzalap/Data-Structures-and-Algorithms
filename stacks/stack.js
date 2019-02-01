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
	size() {
		let node = this.top
		let count = 0
		while(node) {
			count++;
			node = node.next;
		}
		return count;
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

// Sorts a given stack from smallest to largest by iterating through stack.size() times to find the next largest element and pushes that into a new sortedStack, accounts for duplicate values
function sortStackAsc(stack) {
	let unsortedStack = Object.assign( Object.create( Object.getPrototypeOf(stack)), stack);
	let sortedStack = new Stack();
	let largest = null;
	let nextLargest = null;
	let size = stack.size();
	let dupCount = 0;
	let prevDupCount = 1;
	for (let i = 0; i < size; i++) {
		console.log(i);
		while (unsortedStack.peek() !== null) {
			let node = unsortedStack.pop();
			if (largest === node) {
				dupCount++;
				console.log(node, dupCount, prevDupCount);
			}
			// If we have atleast two duplicates and this is one more duplicate than the last one we found
			if (dupCount >= 2 && prevDupCount + 1 === dupCount) {
				nextLargest = node;
				prevDupCount = dupCount;
				break;
			}
			// if we have a largest (not the first iteration), that largest is larger than this node and the node is larger than the nextLargest OR (first iteration) if we don't have a largest value yet (null) than assign if node is greater than nextLargest
			else if ((largest && largest > node && node > nextLargest) || (!largest && node > nextLargest)) {
				nextLargest = node;
			}
		}
		sortedStack.push(nextLargest);
		largest = nextLargest;
		unsortedStack = Object.assign( Object.create( Object.getPrototypeOf(stack)), stack);
		nextLargest = null;
		// If we didn't find atleast two duplicates (their will always be one) than set prevDupCount back to 1
		if (dupCount < 2) {
			prevDupCount = 1;
		}
		dupCount = 0;
	}
	return sortedStack;
}
let unsortedStack = new Stack();
unsortedStack.push(7);
unsortedStack.push(1);
unsortedStack.push(9);
unsortedStack.push(3);
unsortedStack.push(4);
unsortedStack.push(1);
unsortedStack.push(15);
unsortedStack.push(8);
unsortedStack.push(7);
unsortedStack.push(2);
unsortedStack.push(10);
unsortedStack.push(5);
console.log(sortStackAsc(unsortedStack)); // 1, 1, 2, 3, 4, 5, 7, 7, 8, 9, 10, 15