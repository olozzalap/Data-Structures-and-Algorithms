class _Node {
    constructor(value, next, prev) {
        this.value = value;
        if (prev !== undefined) {
        	this.prev = prev;
        }
        this.next = next;
    }
}

module.exports = _Node;