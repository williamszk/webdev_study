// this is an experimental game

const express = require("express");

const app = express();
app.use(express.static("public"));

app.get("/220320", (req, res) => {
	res.sendFile(__dirname + "/public/220320/index.html");
});


app.get("/220407", (req, res) => {
	res.sendFile(__dirname + "/public/220320/index.html");
});



app.listen(3000, () => {
	console.log("Server started at port 3000.")
});

