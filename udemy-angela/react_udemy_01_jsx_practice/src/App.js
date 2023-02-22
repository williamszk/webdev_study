import "./App.css";

const author = "William Suzuki";
const currentYear = new Date().getFullYear();

function App() {
	return (
		<div>
			<h1>Hello World!</h1>

			<p>Created by {author}.</p>

			<p>Copyright {currentYear}.</p>
		</div>
	);
}

export default App;
