const _Node = require('./_node.js');

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
	findFromLast(lastOffset) {
		if (!this.head) {
			return null;
		}
		let currNode = this.head;
		let nodes = [currNode.value];
		while (currNode.next) {
			currNode = currNode.next;
			nodes.push(currNode.value);
		}
		return nodes[nodes.length - 1 - lastOffset];
	}
	findMiddle() {
		if (!this.head) {
			return null;
		}
		let currNode = this.head;
		let nodes = [currNode.value];
		while (currNode.next) {
			currNode = currNode.next;
			nodes.push(currNode.value);
		}
		return nodes[Math.floor((nodes.length - 1) / 2)];	
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
	isCyclical() {
		if (!this.head) {
			return false;
		}
		let currNode = this.head;
		let nodes = [currNode];
		while (currNode.next) {
			console.log(currNode.value);
			if (nodes.indexOf(currNode.next) >= 0) {
				return "Yes this LL is cyclical, starting from: " + currNode.value;
			}
			currNode = currNode.next;
			nodes.push(currNode);
		}
		return false;
	}
	reverse() {
		// if no first or second item
		if (!this.head || !this.head.next) {
			return this.head;
		}
		// if only two items
		else if (!this.head.next.next) {
			this.head.next.next = this.head;
			this.head = this.head.next;
			this.head.next.next = null;
			return this.head;
		}
		// original is needed so we can keep that updated to point to newFirstNodeNext
		let originalFirstNode = this.head;
		while(originalFirstNode.next) {
			this.swapNodes(originalFirstNode.next, originalFirstNode, originalFirstNode.next.next);
			// Effectively iterates through the list as originalFirstNode is pushed further right, currNode will always be the 
		}
		return this.head;
		// Example LL state as it is reversed
		// 1, 2, 3, 4
		// 2, 1, 3, 4
		// 3, 2, 1, 4
		// 4, 3, 2, 1
		// Inputs to this.swapNodes() for each step
		// 2, 1, 3
		// 3, 1, 4
		// 4, 1, null
	}
	swapNodes(newFirstNode, originalFirstNode, newFirstNodesOriginalNext) {
		// first append newFirstNode to the front
		newFirstNode.next = this.head;
		// Keep the chain connected by connecting originalFirstNode and what was originalFirstNode.next.next
		originalFirstNode.next = newFirstNodesOriginalNext;
		// Set this.head to newFirstNode
		this.head = newFirstNode;
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

	console.log(SLL.display()); // Tauhida, Waluigi, whoa, Kat, Jones, Apollo, Athena, Helo, Toad, Hotdog, Husker
	// console.log(SLL.size()); // 11
	// console.log(SLL.isEmpty()); // false
	// console.log(SLL.findLast()); // Husker
	// console.log(SLL.reverse()); // Husker, Hotdog, Toad, Helo, Athena, Apollo, Jones, Kat, whoa, Waluigi, Tauhida
	// console.log(SLL.findMiddle()); // Apollo
	// SLL.head.next.next.next.next.next.next.next = SLL.head; // manually forces a cycles on the list
	// console.log(SLL.isCyclical()); true (be sure to uncomment the above line)
}
main();

