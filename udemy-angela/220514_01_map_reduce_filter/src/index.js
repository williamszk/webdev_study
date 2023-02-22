import emojipedia from "./emojipedia";


var numbers = [3, 56, 2, 48, 5];

// ========================================================================= //
// Map -Create a new array by doing something with each item in an array.

function double(x) {
	return x * 2;
}

numbers.map(double);

console.log("numbers.map(double):\t", numbers.map(double));

let newNumbers = [];

function double2(x) {
	newNumbers.push(x * 2);
}

numbers.forEach(double2);

console.log("newNumbers:\t\t", newNumbers);

let newNumbers2 = [];

// here we use the function notation as an anonimous function
numbers.forEach(function (x) {
	newNumbers2.push(x * 2);
});

console.log("newNumbers2:\t\t", newNumbers2);

// using map with anonymous function
const newNumbers3 = numbers.map(function (x) {
	return x * 2;
});

console.log("newNumbers3:\t\t", newNumbers3);

// ========================================================================= //
// Filter - Create a new array by keeping the items that return true.
var numbers2 = [3, 56, 2, 48, 5];
const numbers2out = numbers2.filter(function (num) {
	return num > 10;
});

console.log("numbers2out:\t\t", numbers2out);

let numbers2out2 = [];
numbers2.forEach(function (num) {
	if (num > 10) {
		numbers2out2.push(num);
	}
});

console.log("numbers2out2:\t\t\t", numbers2out2);

// ========================================================================= //
//Reduce - Accumulate a value by doing something to each item in an array.
const numbers3 = [3, 56, 2, 48, 5];

// sum all items in the numbers3 array using foreach
let total = 0;
numbers3.forEach(function (num) {
	total += num;
});

console.log("total:\t\t", total);

const numbers3out = numbers3.reduce(function (acc, num) {
	return acc + num;
});

console.log("numbers3out:\t\t", numbers3out);

// ========================================================================= //
// Find - find the first item that matches from an array.

const numbers4 = [3, 56, 2, 48, 5];

const myNum1 = numbers4.find(function (num) {
	return num > 10;
});

console.log("myNum1:\t\t", myNum1);

// ========================================================================= //
// FindIndex - find the index of the first item that matches.

const myNum2 = numbers4.findIndex(function (num) {
	return num > 10;
});

console.log("myNum2:\t\t", myNum2);

// ========================================================================= //
// Challenge

// substring()

const meaning = emojipedia.map(function (elem) {
	return elem.meaning.substring(0, 100);
});

console.log("meaning:\t\t", meaning);
