import "./App.css";

const name = "Mie";
const myLuckyNumber = 99;

const firstName = "Renata";
const lastName = "Mie";

function App() {
	return (
		<div>
			<h1>Hello {name}!</h1>

			<p>Your lucky number is {myLuckyNumber}.</p>

			<p>Here is some maths done in JSX: 3**4 = {3 ** 4}</p>

			<p>We can generate random numbers: {Math.floor(Math.random() * 10)}</p>

			<p>
				We can't include JS statements like if-else, but we can use terminary
				expressions
			</p>

			<p>{name == "Mie" ? "Free!" : "R$10,00"}</p>

			<h2>
				Hello {firstName} {lastName}{" "}
			</h2>

			{/* Template Literals = string interpolation */}
			<h2> Hello {`${firstName} ${lastName}`} </h2>
		</div>
	);
}

export default App;
