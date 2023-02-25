// Build a simple array sort function
// that will get the smallest integer in an array
// without using a system-defined function

const getMin = (arr) => {
	// Initialize the min value as the first element of the array
	let min = arr[0];

	for (let i = 1; i < arr.length; i++) {
		// check if the element is smaller than the min value and assign it to the min value
		if (arr[i] < min) {
			console.log(arr[i], min);
			min = arr[i];
		}
	}
	// return the minimum value
	return min;
};

const example = [2, 5, 8, 10, 33, 55, 1, 7, 100, 30];
const example1 = [2, 5, -8, 10, 3, 55, 1, 7, 10, 30];
console.log(getMin(example));
console.log(getMin(example1));
