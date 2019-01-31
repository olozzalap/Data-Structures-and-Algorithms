const _Node = require('./_node.js');

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
	}

	enqueue(data) {
		if (!this.first) {
			this.first = new _Node(data, null, null);
		}
		else if (!this.last) {
			this.last = new _Node(data, null, this.first);
		}
		else {
			this.last = new _Node(data, null, this.last);	
		}
	}
	dequeue() {
		if (!this.first) {
			return null;
		}
		const node = this.first;
		this.first = node.prev;
		this.first.next = null;
		if (node === this.last) {
			this.last = null;
		}
		return node.data;
	}
}