import {add, subtract, divide, multiply} from "./calculator";

function App() {
	return (
		<div>
			<h1>Hello World</h1>
			<ul>
				<li>{add(1,2)}</li>
				<li>{multiply(2,3)}</li>
				<li>{subtract(7,2)}</li>
				<li>{divide(5,2)}</li>
			</ul>
		</div>
	);
}

export default App;
