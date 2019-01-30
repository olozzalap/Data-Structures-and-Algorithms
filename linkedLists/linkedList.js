class _Node {
    constructor(value, next) {
        this.value=value;
        this.next=next;
    }
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(value) {
		console.log("insertFirst");
		this.head = new _Node(value, this.head);
	}
	insertLast(newValue) {
		console.log("insertLast");
		// list is empty
		if (this.head === null) {
			return this.insertFirst(newValue);
		}
		let newLastNode = new _Node(newValue, null);
		let nodeInList = this.head;
		while (nodeInList.next !== null) {
			console.log(nodeInList.value);
			nodeInList = nodeInList.next;
		}
		nodeInList.next = newLastNode;
	}
	insertBefore(newValue, nodeKey) {
		console.log("insertBefore");
		if (!this.head) {
			return this.insertFirst(newValue);
		}
		let currNode = this.head;
		let prevNode = this.head;
		while(currNode.value !== nodeKey) {
			if (currNode.next === null) {
				console.log(currNode);
				return null;
			}
			else {
				prevNode = currNode;
				currNode = currNode.next;
			}
		}
		prevNode.next = new _Node(newValue, currNode);
		// console.log(this.head);
	}
	insertAfter(newValue, nodeKey) {
		console.log("insertAfter");
		if (!this.head) {
			return this.insertFirst(newValue);
		}
		let currNode = this.head;
		let prevNode = this.head;
		while(prevNode.value !== nodeKey) {
			if (prevNode.next === null) {
				console.log(currNode);
				return null;
			}
			else {
				prevNode = currNode;
				currNode = currNode.next;
			}
		}
		prevNode.next = new _Node(newValue, currNode);
		// console.log(this.head);
	}
	insertAt(newValue, index) {
		console.log("insertAt");
		if (!this.head) {
			return this.insertFirst(newValue);
		}
		let currNode = this.head;
		let prevNode = this.head;
		for (let i = 0; i < index; i++) {
			if (currNode.next === null) {
				return null;
			}
			prevNode = currNode;
			currNode = currNode.next;
		}
		prevNode.next = new _Node(newValue, currNode);
	}
	find(item) {
		let currNode = this.head;
		if (!this.head) {
			return null;
		}

		while (currNode.value !== item) {
			if (currNode.next === null) {
				return null;
			}
			else {
				currNode = currNode.next;
			}
		}
		return currNode;
	}
	remove(item) {
		if (!this.head) {
			return null;
		}
		if (this.head.value === item) {
			this.head = this.head.next;
			return;
		}
		let prevNode = this.head;
		let currNode = this.head;
		while (currNode !== null && currNode.value !== item) {
			prevNode = currNode;
			currNode = currNode.next;
		}
		if (currNode === null) {
			console.log("item not found!");
			return false;
		}
		prevNode.next = currNode.next;
	}
}


function main() {
	SLL = new LinkedList()

	SLL.insertAfter("whoa", null);
	SLL.insertLast("Apollo");
	SLL.insertLast("Boomer");
	SLL.insertFirst("Waluigi");
	SLL.insertLast("Helo");
	SLL.insertAt("Jones", 2);
	SLL.insertLast("Husker");
	SLL.insertLast("Starbuck");
	SLL.insertFirst("Tauhida");
	SLL.insertBefore("Athena", "Boomer");
	SLL.remove("Starbuck");
	SLL.insertAfter("Hotdog", "Helo");
	SLL.insertAt("Kat", 3);
	SLL.insertBefore("Toad", "Hotdog");
	SLL.remove("Boomer");

	console.log(SLL);
}
// Tauhida, Waluigi, whoa, Kat, Jones Apollo, Athena, Helo, Toad, Hotdog, Husker
main();