class _Node {
    constructor(value, next) {
        this.value=value;
        this.next=next;
    }
}

class LinkedLink {
	constructor() {
		this.head = null;
	}

	insertFirst(item) {
		this.head = new _Node(item, this.head);
	}
	insertLast(item) {
		// list is empty
		if (this.head === null) {
			this.insertFirst(item);
		}
		newLastNode = new _Node(item, null);
		nodeInList = this.head;
		while (nodeInList.next !== null) {
			console.log(nodeInList);
			nodeInList = nodeInList.next;
		}
		nodeInList.next = newLastNode;
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