function filterArr(arr, conditionFn) {
	let filteredArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (conditionFn(arr[i]) === true) {
			filteredArr.push(arr[i]);
		}
	}
	return filteredArr;
}

console.log(filterArr([1, 2, 3, 4, 5, 6, 7, 8], (num) => {
	return num > 4;
}));
console.log(filterArr([1, 2, 3, 4, 5, 6, 7, 8], (num) => {
	return num % 2 === 0;
}));
console.log(filterArr(["awd", "not", "hahahaha", "skydance", "d", "urgubble", "nonsensical"], (item) => {
	return item.length > 3;
}));