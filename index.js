const myFilter = (arr, callback) => {
	let newArr = []

	if (arr.constructor !== Array || typeof callback !== 'function') {
		return "Incorrect arguments"
	}

	for (i = 0; i < arr.length; i++) {
		const result = callback(arr[i])

		if (result === true) {
			newArr.push(arr[i])
		}
	}

	return newArr
}

const num1 = 1
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arr2 = myFilter(arr1, (elem) => elem >= 5)
const arr3 = myFilter(arr1, arr2)
const num2 = myFilter(num1, (elem) => elem >= 5)

console.log('Array 1:', arr1)
console.log('Array 2:', arr2)
console.log('Array 3:', arr3)
console.log('Number 2:', num2)
