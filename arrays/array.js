const Memory = require('./memory.js');

class Array {
	constructor() {
		this.memory = new Memory();
		this.length = 0;
		this._capacity = 0;
		this.ptr = this.memory.allocate(this.length);
		console.log();
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
        console.log(this._capacity);
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
    	console.log(this.memory.get(this.ptr + index)  + " is at ptr: " + (this.ptr + index));
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

function main(){

    //create an instance of the array class
    let arr = new Array();

    //add an item to the array
    // for (let i = 0; i < Math.floor(Math.random() * 298); i++) {
    // 	arr.push(Math.floor(Math.random() * 1277))
    // }
    arr.push(777);
    arr.push(5);
	arr.push(15);
	arr.push(19);
	arr.push(45);
	arr.push(10);
	arr.push(19);
	arr.push(20);
	arr.push(10);
	arr.push(30);
	arr.push(60);
	arr.push(17);
	arr.push(11231231230);


    arr.pop();
    arr.pop();
    arr.pop();

    let arrLength = arr.length;
    for (let i = arrLength - 1; i >= 0; i--) {
    	arr.remove(i);
    }

    arr.push(9182);
    console.log(arr);

    arr.get(0);
}
main();