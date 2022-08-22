const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();

// middleware
app.use(cors());
app.use(express.json()); // this will allow the express server get json data from the frontend

// routes //

// create a todo item
app.post("/todos", (req, res) => {
	try {
		const { description } = req.body;

		const newTodo = pool.query(
			"INSERT INTO todo (description) VALUES ($1) RETURNING *",
			[description]
		);

		res.json(newTodo.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

// get all todo items
app.get("/todos", (req, res) => {
	try {
		const allTodos = pool.query("SELECT * FROM todo");
		res.json(allTodos.rows);
	} catch (err) {
		console.error(err.mesage);
	}
});

// get a todo item
// apply dynamic url
app.get("/todos/:id", (req, res) => {
	try {
		// console.log(req.params);
		const { id } = req.params;
		const aTodo = pool.query("SELECT * FROM todo WHERE todo_id=$1", [id]);
		res.json(aTodo.rows);
	} catch (err) {
		console.error(err.message);
	}
});

// update a todo item
app.put("/todos/:id", (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const updateTodo = pool.query(
			"UPDATE todo SET description=$1 WHERE todo_id=$2",
			[description, id]
		);

		res.json("Todo was updated");
	} catch (err) {
		console.error(err.message);
	}
});

// delete a todo item
app.delete("/todos/:id", (req, res) => {
	try {
		const { id } = req.params;
		const deleteTodo = pool.query("DELETE FROM todo WHERE todo_id=$1", [id]);
		res.json("Todo was deleted");
	} catch (err) {
		console.error(err.message);
	}
});

app.listen(5000, () => {
	console.log("Server started on port 5000.");
});
