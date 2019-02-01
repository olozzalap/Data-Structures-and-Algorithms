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
		if (this.first) {
			this.first.next = null;
		}
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

// const queue = new Queue();
// queue.enqueue("Kirk");
// queue.enqueue("Spock");
// queue.enqueue("Uhura");
// queue.enqueue("Sulu");
// queue.enqueue("Checkov");
// console.log(queue.peek());
// console.log(queue.peekLast());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

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

// const queueStacks = new QueueViaStacks();
// queueStacks.enqueue(1);
// queueStacks.enqueue(2);
// queueStacks.enqueue(3);
// queueStacks.enqueue(4);
// console.log(queueStacks.display());
// console.log(queueStacks.dequeue());
// console.log(queueStacks.display());
// console.log(queueStacks.dequeue());
// console.log(queueStacks.display());
// console.log(queueStacks.dequeue());
// console.log(queueStacks.dequeue());

class PairingQueues {
	constructor(firstQueueName, secondQueueName) {
		this[firstQueueName] = new Queue();
		this[secondQueueName] = new Queue();

		this.firstQueue = firstQueueName;
		this.secondQueue = secondQueueName;
	}

	enqueue(data, queueName) {
		if (!this[queueName]) {
			return "That queue doesn't exist!";
		}
		this[queueName].enqueue(data);
		return this.checkPairs();
	}
	checkPairs() {
		if (this[this.firstQueue].first && this[this.secondQueue].first) {
			console.log(this.firstQueue, this[this.firstQueue].first);
			console.log(this.secondQueue, this[this.secondQueue].first);
			let pairSuccessText = "Paired " + this.firstQueue + ": " + this[this.firstQueue].dequeue() + " with " + this.secondQueue + ": " + this[this.secondQueue].dequeue();
			return pairSuccessText;
		}
		else {
			console.log(this.firstQueue, this[this.firstQueue].first);
			console.log(this.secondQueue, this[this.secondQueue].first);
			return "No one paired with this entry!";
		}
	}
}

// let pairs = new PairingQueues("female dancer", "male dancer");
// console.log(pairs.enqueue("John", "male dancer"));
// console.log(pairs.enqueue("Arnold", "male dancer"));
// console.log(pairs.enqueue("Esmerelda", "female dancer"));
// console.log(pairs.enqueue("Johanes", "male dancer"));
// console.log(pairs.enqueue("Lizzo", "female dancer"));
// console.log(pairs.enqueue("Sophia", "female dancer"));

class OphidianBank {
	// invalidChance must be a decimal representing the probability of any node being invalid and needing a requeue
	constructor(invalidChance) {
		this.line = new Queue();
		this.invalidChance = invalidChance;
	}
	enqueue(name) {
		let isValid = (Math.random() > this.invalidChance) ? true : false;
		this.line.enqueue({
			name,
			isValid
		})
		return this.line.first;
	}
	dequeue() {
		const node = this.line.first;
		if (!node) {
			return null;
		}
		this.line.dequeue();
		console.log(node.data);
		if (!node.data.isValid) {
			this.enqueue(node.data.name);
		}
		return this.line.first;
	}
}

// let bank = new OphidianBank(.33);
// console.log(bank.enqueue("1"));
// console.log(bank.enqueue("2"));
// console.log(bank.enqueue("3"));
// console.log(bank.dequeue());
// console.log(bank.enqueue("4"));
// console.log(bank.dequeue());
// console.log(bank.dequeue());
// console.log(bank.enqueue("5"));
// console.log(bank.dequeue());
// console.log(bank.enqueue("6"));
// console.log(bank.enqueue("7"));
// console.log(bank.dequeue());
// console.log(bank.enqueue("8"));
// console.log(bank.dequeue());
// console.log(bank.dequeue());
// console.log(bank.enqueue("9"));
// console.log(bank.dequeue());