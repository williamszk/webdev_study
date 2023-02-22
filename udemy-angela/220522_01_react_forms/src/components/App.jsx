import React, { useState } from "react";

function App() {
	const [name, setName] = useState("");
	const [nameDisplay, setNameDisplay] = useState("");

	function handleChange(event) {
		setName(event.target.value);
	}

	function handleClick(event) {
		setNameDisplay(name);

		event.preventDefault();
	}

	return (
		<div className="container">
			<h1>Hello {nameDisplay}</h1>
			<form onSubmit={handleClick}>
				<input
					onChange={handleChange}
					type="text"
					value={name}
					placeholder="What's your name?"
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default App;
