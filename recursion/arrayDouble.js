// Write a function that takes an array as input which contains an unknown set of numbers, and outputs an array with each input value doubled. Test your solution by trying a handful of different arrays. For example,

function arrayDouble(arr) {
	// base case
	if (arr.length === 1) {
		return arr[0] * 2;
	}
	else {
		return [arr[0] * 2].concat(arrayDouble(arr.slice(1)));
	}
}
function arrayDoubleWithIndex(arr, index) {
	arr[index] = arr[index] * 2;

	// base case
	if (index === arr.length - 1) {

		return arr;
	}
	else {
		index++;
		return arrayDoubleWithIndex(arr, index)
	}
}

console.log(arrayDouble([1, 2, 3, 4]));
console.log(arrayDoubleWithIndex([27, 33, 39, 128], 0));