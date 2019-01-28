// Imagine you have two arrays which have already been sorted. Write an algorithm to merge the two arrays into a single array, which should also be sorted.

function mergeSortedArraysBrute(arr1, arr2) {
	let lowestValue = Math.min(arr1[0], arr2[0]);
	let highestValue = Math.max(arr1[arr1.length - 1], arr2[arr2.length - 1]);
	console.log(lowestValue, highestValue);
	for (let i = lowestValue; i <= highestValue; i++) {
		while (arr1.indexOf(i) > -1) {
			mergedArr.push(i);
			arr1.splice(arr1.indexOf(i), 1);
		}
		while (arr2.indexOf(i) > -1) {
			mergedArr.push(i);
			arr2.splice(arr2.indexOf(i), 1);
		}
	}
}

function mergeSortedArrays(arr1, arr2) {
	let mergedArr = [];
	while(arr1.length || arr2.length) {
		if (arr1[0] < arr2[0] || typeof arr2[0] === 'undefined') {
			mergedArr.push(arr1[0]);
			arr1.splice(0, 1);
		}
		else {
			mergedArr.push(arr2[0]);
			arr2.splice(0, 1);	
		}
	}
	return mergedArr;
}

console.log(mergeSortedArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10, 17]));