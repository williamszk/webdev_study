// https://www.youtube.com/watch?v=q28lfkBd9F4&ab_channel=MarioSouto-DevSoutinho

// we need to run on the browser
// I don't know why
fetch("https://api.github.com/users/omariosouto");

// the function fetch will return a Promise object
// the Promisse object has a method called
// then()

fetch("https://api.github.com/users/omariosouto").then((res) => {
	console.log(res);
});
// only when we run then() is that the request is made

function getData() {
	const result = fetch("https://api.github.com/users/omariosouto").then(
		(res) => {
			// this one here is ran second
			console.log(res);
		}
	);
	// return result;
	// this one here is ran first
	console.log(result);
	// in here the result is a promise
	// it has some methods
}

getData();

// in this case the fetch will produce a Promise
// and in console.log below it will not show the result properly
function getData2() {
	const result = fetch("https://api.github.com/users/omariosouto");
	console.log(result);
}

getData2();

// if we want to make the Process wait for the return of the Promise
// we need to include a await right before the Promise

async function getData3() {
	const result = await fetch("https://api.github.com/users/omariosouto");
	console.log(result);
}

getData3();
// note that the function getData3 is now a Promise
// this happens with any async function?

getData3().then(() => {
	console.log("ran here inside the then after getData3");
});

async function getData4() {
	const result = await fetch("https://api.github.com/users/omariosouto");
	const result2 = await result.json();
	// this second await will wait for the other result to arrive
	console.log(result2);
}

getData4();

async function getData5() {
	// this is an alternative way to have the same result
	// as in the getData4 function
	const result = await fetch("https://api.github.com/users/omariosouto").then(
		(res) => res.json()
	);
	console.log(result);
}

getData5();

// explanation for the async
function myfunc() {
	return "hi there!";
}

myfunc();

// if we include an async in front of the function
// the function will return a promise
async function myfunc2() {
	return "hi there!";
}

myfunc2();

// why this only works on the browser?
