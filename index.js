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

const reduce = (arr, callback, init = arr[0]) => {
	if (arr.constructor !== Array || typeof callback !== 'function') {
		return "Incorrect arguments"
	}

	let result = init

	for (i = 0; i < arr.length; i++) {
		result = callback(result, arr[i])
	}

	return result
}

const myForEach = (arr, callback) => {
	if (arr.constructor !== Array || typeof callback !== 'function') {
		return
	}

	for (i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr)
	}
}

const num1 = 1
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arr2 = myFilter(arr1, (elem) => elem >= 5)
const arr3 = myFilter(arr1, arr2)
const num2 = myFilter(num1, (elem) => elem >= 5)

const sum = reduce(arr1, (acc, item) => acc + item, 0)

console.log('Sum:', sum)

console.log('Array 1:', arr1)
console.log('Array 2:', arr2)
console.log('Array 3:', arr3)
console.log('Number 2:', num2)

myForEach(arr2, (item, index, arr) => {
	console.log('Item:', item)
	console.log('Index:', index)
	console.log('Array:', arr)
})