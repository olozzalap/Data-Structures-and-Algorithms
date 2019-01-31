const _Node = require('./_node.js');

class Stack {
	constructor() {
		this.top = null;
	}

	push(data) {
		let node = new _Node(data, this.top);
		this.top = node;
	}
	pop() {
		let top = this.top;
		this.top = this.top.next;
		return top;
	}
}