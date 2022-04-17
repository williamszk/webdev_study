import React, { useState } from "react";
// useState is called a Hook, one type of them
import TodoList from "./TodoList";

function App() {
	// we need to return just 1 html element
	// so we include a <></> this is an empty element
	// and is called a fragment
	const [todos, setTodos] = useState([
		{ id: 1, name: "Todo 1", complete: false },
		{ id: 2, name: "Todo 2", complete: false },
	]);
	// [] is the initial state of the app
	// useState returns an array
	// the todos object is actually [] what we passed as argument
	// to useState and setTodos is a function
	// that is created to chage the state of todos
	return (
		<>
			{/* This is how we pass javascript object into a componenet 
			Those are called "props", and all react components have props
			
			*/}
			<TodoList todos={todos} />
			<input type="text" />
			<button>Add Todo</button>
			<button>Clear Completed</button>
			<div>0 left to do</div>
		</>
	);
}

export default App;
