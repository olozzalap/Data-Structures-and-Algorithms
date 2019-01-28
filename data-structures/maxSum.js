// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

function maxSum(arr) {
	let ticks = 1;
	let currentMax = 0;
	let currentStartIndex = 0;
    let max = {
    	sum: 0,
    	start: 0,
    	end: 0
    };
    for (let i = 0; i < arr.length; i++) {
    	ticks++;
    	// console.log(currentMax + arr[i]);
    	// Either subArray up till i is above zero (so adds to a total sum) or it can be discarded if negative
    	if (currentMax + arr[i] > 0) {
    		currentMax = currentMax + arr[i];
    	}
    	else {
    		currentMax = 0;
    		currentStartIndex = i + 1;
    	}
    	
    	if (currentMax > max.sum) {
    		max = {
    			sum: currentMax,
    			start: currentStartIndex,
    			end: i
    		}	
    	}
    }

	console.log("input length: " + arr.length + " & total ticks: " + ticks + " for a ticks-to-input ratio of: " + (ticks / arr.length));
	return max;
}

console.log(maxSum([8, -5, -3, 7]));
console.log(maxSum([8, -8]));
console.log(maxSum([9, -4, 6, 3]));
console.log(maxSum([4,6,-3,5,-2,1]));
console.log(maxSum([4,6,-3,5,-2,1,  6, 7, 1, 2, 6, 3, -6, -3, 8,]));
console.log(maxSum([8, -2, 1, 9, -4, -4, 6, 7, 1, 2, 6, 3, -6, -3, 8, -10, -1, -8, 12, -10, 7, 7, -2, 2, 3, 4, -2, 4, 6, 8, -3, 7, -4, 5, -3, 7, -7, 8, -5, -1, 1, 2, -2, 3, -3]));
console.log(maxSum([8, -2, 1, 9, -4, -4, 6, 7, 1, 2, 6, 3, -6, -3, 8, -10, -1, -8, 12, -10, 7, 7, -2, 2, 3, 4, -2, 4, 6, 8, -3, 7, -4, 5, -3, 7, -7, 8, -5, -1, 1, 2, -2, 3, -3, 8, -2, 1, 9, -4, -4, 6, 7, 1, 2, 6, 3, -6, -3, 8, -10, -1, -8, 12, -10, 7, 7, -2, 2, 3, 4, -2, 4, 6, 8, -3, 7, -4, 5, -3, 7, -7, 8, -5, -1, 1, 2, -2, 3, -3, 8, -2, 1, 9, -4, -4, 6, 7, 1, 2, 6, 3, -6, -3, 8, -10, -1, -8, 12, -10, 7, 7, -2, 2, 3, 4, -2, 4, 6, 8, -3, 7, -4, 5, -3, 7, -7, 8, -5, -1, 1, 2, -2, 3, -3]));