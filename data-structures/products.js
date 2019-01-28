// Given an array of numbers, write an algorithm to find out the products of every number, except the one at that index.

function products(arr) {
	let products = [];
	let totalProduct = arr.reduce((acc, val) => acc * val);
	console.log(totalProduct);
	for (let i = 0; i < arr.length; i++) {
		products.push(totalProduct / arr[i]);
	}
	return products;
}

console.log(products([1, 3, 9, 4]));
console.log(products([1, 7, -3, 4, 5]));
console.log(products([-2, -3, 5, -6]));
console.log(products([2, 4, 6, 8, 2, 4, 6, 8, 2, 10]));