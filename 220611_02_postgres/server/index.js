const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();

// middleware
app.use(cors());
app.use(express.json()); // this will allow the express server get json data from the frontend

// routes //

// create a todo item
app.post("/todos", async (req, res) => {
	try {
		// destructuring
		// description becomes a string, we are extracting the description key
		// and assigining it to a variable called description
		const { description } = req.body;

		// console.log("description:", description);
		// console.log("typeof(description):", typeof(description));
		const newTodo = await pool.query(
			"INSERT INTO todo (description) VALUES ($1) RETURNING *",
			[description]
		);
		// $1 is a place holder to include arguments
		// this is how the pg library mechanism to add dynamic data

		res.json(newTodo.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

// get all todo items
app.get("/todos", async (req, res) => {
	try {
		const allTodos = await pool.query("SELECT * FROM todo");
		res.json(allTodos.rows);
	} catch (err) {
		console.error(err.mesage);
	}
});

// get a todo item
// apply dynamic url
app.get("/todos/:id", async (req, res) => {
	try {
		// console.log(req.params);
		const aTodo = await pool.query("SELECT * FROM todo WHERE todo_id=($1)", [
			req.params.id,
		]);
		res.json(aTodo.rows);
	} catch (err) {
		console.error(err.message);
	}
});

// update a todo item

// delete a todo item

app.listen(5000, () => {
	console.log("Server started on port 5000.");
});
