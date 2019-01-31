const _Node = require('./_node.js');

class DoublyLinkedList {
	constructor() {
		this.head = null;
	}
	insertFirst(newValue) {
		let nextValue = (this.head && this.head.next) ? this.head.next : null;
		this.head = new _Node(newValue, nextValue, null)
	}
	insertLast(newValue) {
		if (!this.head) {
			return this.insertFirst(newValue)
		}
		let currNode = this.head;
		while (currNode.next) {
			currNode = currNode.next;
		}
		currNode.next = new _Node(newValue, null, currNode)
	}
	insertBefore(newValue, nodeValue) {
		if (!this.head) {
			return null;
		}
		let prevNode = this.head;
		let currNode = this.head;
		while(currNode.value !== nodeValue) {
			if (!currNode.next) {
				return null;
			}
			prevNode = currNode;
			currNode = currNode.next;
		}
		let newNode = new _Node(newValue, currNode, prevNode);
		prevNode.next = newNode;
		currNode.prev = newNode;
	}
	insertAfter(newValue, nodeValue) {
		if (!this.head) {
			return null;
		}
		let prevNode = this.head;
		let currNode = this.head;
		while(prevNode.value !== nodeValue) {
			if (!prevNode.next) {
				return null;
			}
			prevNode = currNode;
			currNode = currNode.next;
		}
		let newNode = new _Node(newValue, currNode, prevNode);
		prevNode.next = newNode;
		currNode.prev = newNode;
	}
	insertAt(newValue, index) {
		if (!this.head) {
			return this.insertFirst(newValue);
		}
		let currNode = this.head;
		let prevNode = this.head;
		for (let i = 0; i < index; i++) {
			if (!currNode.next && i < index - 1) {
				return this.insertLast(newValue)
			}
			prevNode = currNode;
			currNode = currNode.next;
		}
		let newNode = new _Node(newValue, currNode, prevNode);
		prevNode.next = newNode;
		currNode.prev = newNode;
	}
	remove(nodeValue) {
		if (!this.head) {
			return null;
		}
		let prevNode = this.head;
		let nodeToRemove = this.head;
		let nextNode = this.head;
		while(nodeToRemove.value !== nodeValue) {
			if (!nodeToRemove.next) {
				console.log("nodeValue not found!");
				return "Error: nodeValue not found!";
			}
			prevNode = nodeToRemove;
			nodeToRemove = nextNode;
			nextNode = nextNode.next;
		}

		prevNode.next = nextNode;
		nextNode.prev = prevNode;
	}
	find(nodeValue) {
		if (!this.head) {
			return null;
		}
		let currNode = this.head;
		while(currNode.value !== nodeValue) {
			if (!currNode.next) {
				return null;
			}
			currNode = currNode.next;
		}
		return currNode;
	}
	reverse() {
		if (!this.head || !this.head.next) {
			return this.head;
		}
		else if (!this.head.next.next) {
			this.head.next.next = this.head;
			this.head.next.prev = null;
			this.head.prev = this.head.next;
			this.head.next = null;
			this.head = this.head.next;
			return this.head;
		}
		let originalFirstNode = this.head;
		while (originalFirstNode.next) {
			this.swapNodes(originalFirstNode.next, originalFirstNode, originalFirstNode.next.next);
		}
		return this.head;
	}
	swapNodes(newFirstNode, originalFirstNode, newFirstNodesOriginalNext) {
		// first append newFirstNode to the front
		newFirstNode.next = this.head;
		newFirstNode.prev = null;
		// Keep the chain connected by connecting originalFirstNode and what was originalFirstNode.next.next
		originalFirstNode.next = newFirstNodesOriginalNext;
		if (newFirstNodesOriginalNext) {
			newFirstNodesOriginalNext.prev = originalFirstNode;
		}
		this.head.prev = newFirstNode;
		// Set this.head to newFirstNode
		this.head = newFirstNode;
	}
}

function main() {
	list = new DoublyLinkedList();
	list.insertLast("Aquaria")
	list.insertLast("Caprica")
	list.insertLast("Gemenon")
	list.insertLast("Picon")
	list.insertLast("Sagittaron")
	list.insertLast("Tauron")
	list.remove("Picon")

	console.log(list.head); // Aquaria, Caprica, Gemenon, Sagittaron, Tauron
	console.log(list.reverse()); // Tauron, Sagittaron, Gemenon, Caprica, Aquaria
}
main();