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

	insertFirst(item) {
		this.head = new _Node(item, this.head);
	}
	insertLast(item) {
		// list is empty
		console.log(this.head);
		if (this.head === null) {
			return this.insertFirst(item);
		}
		let newLastNode = new _Node(item, null);
		let nodeInList = this.head;
		while (nodeInList.next !== null) {
			// console.log(nodeInList);
			nodeInList = nodeInList.next;
		}
		nodeInList.next = newLastNode;
		console.log(nodeInList, newLastNode);
	}
	insertBefore(nodeKey, newItem) {
		if (!this.head) {
			return null;
		}

		let currNode = this.head;
		let prevNode = this.head;
		while(currNode.item !== nodeKey) {
			if (currNode.next === null) {
				return null;
			}
			else {
				prevNode = currNode;
				currNode = currNode.next;
			}
		}
		prevNode.next = new _Node(newItem, currNode);
	}
	insertAfter(nodeKey, newItem) {
		if (!this.head) {
			return null;
		}

		let currNode = this.head;
		let prevNode = this.head;
		while(prevNode.item !== nodeKey) {
			if (prevNode.next === null) {
				return null;
			}
			else {
				prevNode = currNode;
				currNode = currNode.next;
			}
		}
		prevNode.next = new _Node(newItem, currNode);
	}
	insertAt(index, item) {
		if (!this.head) {
			return null;
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
		prevNode.next = new _Node(item, currNode);
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

	SLL.insertLast("Apollo");
	SLL.insertLast("Boomer");
	SLL.insertLast("Helo");
	SLL.insertLast("Husker");
	SLL.insertLast("Starbuck");

	SLL.insertFirst("Tauhida");
	SLL.remove("squirrel");
	console.log(JSON.stringify(SLL));
}
main();