import React from "react";
import Login from "./Login";

let isLoggedIn = true;

const currentTime = new Date().getHours();

console.log(currentTime);

function App() {
	return (
		<div className="container">
			{/* Ternary Operator */}
			{isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/* Below is an alternative to using a ternary operator where one of the returns is null
        The && will not make the program not evaluate the expression next to it, if the first condition
        is false.*/}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
		</div>
	);
}

export default App;
