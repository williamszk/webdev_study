import React, { useState } from "react";
import List from "./List";

function App() {
	const [inputText, setInputText] = useState("");
	const [todoItem, setTodoItem] = useState([{ key: 0, inputText: "A Item" }]);

	function handleChange(event) {
		setInputText(event.target.value);
	}

	function handleClick(event) {
		const lastItem = todoItem[todoItem.length - 1];

		const newObj = {
			key: lastItem.key + 1,
			inputText: inputText,
		};

		setTodoItem([...todoItem, newObj]);
		event.preventDefault();
		setInputText("");
	}

	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<div className="form">
				<form onSubmit={handleClick}>
					<input type="text" onChange={handleChange} value={inputText} />
					<button type="submit">
						<span>Add</span>
					</button>
				</form>
			</div>
			<div>
				<List todoItem={todoItem} />
			</div>
		</div>
	);
}

export default App;
