//Write a recursive function that counts how many sheep jumps over the fence. Your program should take a number as an input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jump over the fence" until no more sheep are left.


function countingSheep(num) {

	// base case
	if (num === 1) {
		formatSheepText(num);
	}
	else {
		formatSheepText(num) + countingSheep(--num);
	}
}

function formatSheepText(num) {
	console.log(num + " - Another sheep jumps over the fence");
}

countingSheep(28);