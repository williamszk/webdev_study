const PI = 3.1415;

function func1() {
	return <p>The return of func1</p>;
}

const func2 = () => {
	return <p>The return of func2.</p>
};

export default PI; // this is the default export
// we can name it in anyway that we want
export { func1, func2 }; // those are other exports
// for those we need to use exactly the names that are specified here

// ES6 is something related to browser javascript
// but React is a NodeJS library
// and Babel is responsible to transform React code
// into the classical html, css and javascript code
