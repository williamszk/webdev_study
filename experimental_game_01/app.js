// this is an experimental game

const express = require("express");

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "index.html");
});

app.listen(3000, () => {
	console.log("Server started at port 3000.")
});

// some ideas:
// https://www.youtube.com/watch?v=iPsDJMVrz5Q&t=46s&ab_channel=VrTech
// The settlers 3?
// 