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
		if (!this.head) {
			return this.insertFirst(newValue);
		}
		let newLastNode = new _Node(newValue, null);
		let nodeInList = this.head;
		while (nodeInList.next !== null) {
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
			if (!currNode.next) {
				return null;
			}
			else {
				prevNode = currNode;
				currNode = currNode.next;
			}
		}
		prevNode.next = new _Node(newValue, currNode);
	}
	insertAfter(newValue, nodeKey) {
		console.log("insertAfter");
		if (!this.head) {
			return this.insertFirst(newValue);
		}
		let currNode = this.head;
		let prevNode = this.head;
		while(prevNode.value !== nodeKey) {
			if (!prevNode.next) {
				return null;
			}
			else {
				prevNode = currNode;
				currNode = currNode.next;
			}
		}
		prevNode.next = new _Node(newValue, currNode);
	}
	insertAt(newValue, index) {
		console.log("insertAt");
		if (!this.head) {
			return this.insertFirst(newValue);
		}
		let currNode = this.head;
		let prevNode = this.head;
		for (let i = 0; i < index; i++) {
			if (!currNode.next && i < index - 1) {
				// Should we refer back to this.insertLast() here since the index is greater than the size of the LinkedList?
				return this.insertLast(newValue);
			}
			prevNode = currNode;
			currNode = currNode.next;
		}
		prevNode.next = new _Node(newValue, currNode);
	}
	find(nodeValue) {
		let currNode = this.head;
		if (!this.head) {
			return null;
		}

		while (currNode.value !== nodeValue) {
			if (!currNode.next) {
				return null;
			}
			else {
				currNode = currNode.next;
			}
		}
		return currNode;
	}
	findPrevious(nodeValue) {
		let currNode = this.head;
		let prevNode = this.head;
		if (!this.head) {
			return null;
		}

		while (currNode.value !== nodeValue) {
			if (!currNode.next) {
				return null;
			}
			else {
				prevNode = currNode;
				currNode = currNode.next;
			}
		}
		return prevNode;
	}
	findLast() {
		if (!this.head) {
			return null;
		}
		let currNode = this.head;
		while (currNode.next) {
			currNode = currNode.next;
		}
		return currNode;
	}
	remove(nodeValue) {
		if (!this.head) {
			return null;
		}
		if (this.head.value === nodeValue) {
			this.head = this.head.next;
			return;
		}
		let prevNode = this.head;
		let currNode = this.head;
		while (currNode !== null && currNode.value !== nodeValue) {
			prevNode = currNode;
			currNode = currNode.next;
		}
		if (!currNode) {
			console.log("nodeValue not found!");
			return "Error: nodeValue not found!";
		}
		prevNode.next = currNode.next;
	}
	display() {
		return this.head;
	}
	size() {
		let count;
		let currNode = this.head;
		if (!this.head) {
			return 0;
		}
		else {
			count = 1;
		}
		while (currNode && currNode.next) {
			count++;
			currNode = currNode.next;
		}
		return count;
	}
	isEmpty() {
		if (!this.head) {
			return true;
		}
		else return false;
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

	console.log(SLL.display());
	console.log(SLL.size());
	console.log(SLL.isEmpty());
	console.log(SLL.findLast());
}
// Tauhida, Waluigi, whoa, Kat, Jones Apollo, Athena, Helo, Toad, Hotdog, Husker
main();