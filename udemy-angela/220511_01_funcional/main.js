// https://www.youtube.com/watch?v=y97WSB4GRdA&ab_channel=BrazilJS

const compose = (f, g) => (x) => f(g(x));

function compose2(f, g) {
	function inner(x) {
		return f(g(x));
	}
	return inner;
}

const toUpperCase = (x) => x.toUpperCase();

const exclaim = (x) => `${x}!`;

const scream = compose(toUpperCase, exclaim);

// const scream = compose(exclaim, toUpperCase)
const myMessage = "stop";
console.log("Original message: ", myMessage);

console.log("After scream function: ", scream(myMessage));
