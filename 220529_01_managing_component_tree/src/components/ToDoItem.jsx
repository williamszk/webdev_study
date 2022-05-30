import React, { useState } from "react";

function ToDoItem(props) {
	// const [isDone, setIsDone] = useState(false);

	// function handleClick() {
	// 	setIsDone((prevValue) => {
	// 		return !prevValue;
	// 	});
	// }

	return (
		<div
			onClick={() => {
				props.deleteItem(props.id);
			}}
		>
			<li>{props.todoItem}</li>
		</div>

		// <div
		// 	onClick={handleClick}
		// 	style={{ textDecoration: isDone ? "line-through" : "none" }}
		// >
		// 	<li>{props.todoItem}</li>
		// </div>
	);
}

export default ToDoItem;
