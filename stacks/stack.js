const _Node = require('./_node.js');

class Stack {
	constructor() {
		this.top = null;
	}

	push(data) {
		if (!this.top) {
			this.top = new _Node(data, null);
			return this.top;
		}
		let node = new _Node(data, this.top);
		this.top = node;
	}
	pop() {
		if (!this.top) {
			return null;
		}
		let node = this.top;
		this.top = this.top.next;
		return node.data;
	}
}