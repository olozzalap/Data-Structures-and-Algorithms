const _Node = require('./_node.js');
const Stack = require('../stacks/stack.js');

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
			this.first.prev = this.last;
		}
		else {
			let newNode = new _Node(data, null, this.last);
			this.last.prev = newNode;
			this.last = newNode;	
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
	peek() {
		return this.first;
	}
	peekLast() {
		return this.last;
	}
	display() {

	}
}


const queue = new Queue();
queue.enqueue("Kirk");
queue.enqueue("Spock");
queue.enqueue("Uhura");
queue.enqueue("Sulu");
queue.enqueue("Checkov");
// console.log(queue.peek());
// console.log(queue.peekLast());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());


class QueueViaStacks {
	constructor() {
		this.values = new Stack();
		this.nextOut = new Stack();
	}

	enqueue(data) {
		if (!this.nextOut.top) {
			this.nextOut.push(data)
		}
		else {
			const originalValues = Object.assign( Object.create( Object.getPrototypeOf(this.values)), this.values);
			while (this.values.top) {
				this.nextOut.push(this.values.pop());
			}
			this.values.push(data);
			while (this.nextOut.top.next) {
				this.values.push(this.nextOut.pop());
			}
		}
	}
	dequeue() {
		if (!this.nextOut.top) {
			return null;
		}
		let node = this.nextOut.pop();
		this.nextOut.push(this.values.pop());
		return node;
	}
	display() {
		return {
			values: this.values,
			nextOut: this.nextOut
		}
	}
}

const queueStacks = new QueueViaStacks();
queueStacks.enqueue(1);
queueStacks.enqueue(2);
queueStacks.enqueue(3);
queueStacks.enqueue(4);
console.log(queueStacks.display());
console.log(queueStacks.dequeue());
console.log(queueStacks.display());
console.log(queueStacks.dequeue());
console.log(queueStacks.display());
console.log(queueStacks.dequeue());
console.log(queueStacks.dequeue());