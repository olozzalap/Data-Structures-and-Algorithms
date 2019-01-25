const Memory = require('./memory.js');

class Array {
	constructor() {
		this.memory = new Memory();
		this.length = 0;
		this._capacity = 0;
		this.ptr = this.memory.allocate(this.length);
		console.log();
		console.log("ptr is: " + this.ptr);
	}

	_resize(size) {
        const oldPtr = this.ptr;
        this.ptr = this.memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        this.memory.copy(this.ptr, oldPtr, this.length);
        this.memory.free(oldPtr);
        this._capacity = size;
    }
    _addNewBlock() {
    	if (this.length >= this._capacity) {
    		this._resize((this.length + 1) * 3);
    	}
    }
	push(value) {
		this._addNewBlock();
        this.memory.set(this.ptr + this.length, value);
        this.length++;
    }
    get(index) {
    	if (index < 0 || index >= this.length) {
    		throw new Error("index error");
    	}
    	return this.memory.get(this.ptr + index);
    }
    pop() {
    	if (this.length === 0) {
    		throw new Error("index error");
    	}
    	const value = this.memory.get(this.ptr + this.length - 1);
    	this.length--;
    	return value;
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        this._addNewBlock();

        this.memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        this.memory.set(this.ptr + index, value);
        this.length++;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        this.memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}

let arr = new Array();