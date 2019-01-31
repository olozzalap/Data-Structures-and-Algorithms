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

// true, true, true
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
console.log(stack.peek());