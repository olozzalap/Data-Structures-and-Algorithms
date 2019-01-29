// Write an algorithm which searches through a 2D array, and whenever it finds a zero should set the entire row and column to zero.

function arrayZeroParser(arr) {
	let ticks = 1;
	let parsedArr = arr.map(subArr => subArr.slice());
	for (let i = 0; i < arr.length; i++) {
		let rowSetToZeros = false;
		for (let j = 0; j < arr[i].length; j++) {
			ticks++;
			if (arr[i][j] === 0) {
				if (!rowSetToZeros) {
					parsedArr[i] = parsedArr[i].map(item => {
						ticks++;
						return 0;
					});
					rowSetToZeros = true;
				}
				for (let x = 0; x < arr.length; x++) {
					ticks++;
					parsedArr[x][j] = 0;
					console.log(x, j, parsedArr[x][j]);
				}
				// console.log("parsedArr is: ", parsedArr);
				// console.log("arr is: ", arr);
				
			}
		}
	}
	console.log("ticks: " + ticks);
	return parsedArr;
}

console.log(arrayZeroParser([
	[1,0,1,1,0],
	[0,1,1,1,0],
	[1,1,1,1,1],
	[1,0,1,1,1],
	[1,1,1,1,1]
]));
console.log(arrayZeroParser([
	[0,8,1,1,0],
	[9,1,1,1,7],
	[1,1,1,1,1],
	[1,1,1,1,4],
	[1,1,1,9,0]
]));