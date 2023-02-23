// Build a simple array sort function
// that will get the smallest integer in an array
// without using a system-defined function

const getMin = (arr) => {
	// Initialize the min value as the first element of the array
	let min = arr[0];
	// Map over the arry
	arr.forEach((el) => {
		// check if the element is smaller than the min value and assign it to the min value
		if (el < min) min = el;
	});
	// return the minimum value
	return min;
};

const example = [2, 5, 8, 10, 33, 55, 1, 7, 100, 30];
const example1 = [2, 5, -8, 10, 3, 55, 1, 7, 10, 30];
console.log(getMin(example));
console.log(getMin(example1));
