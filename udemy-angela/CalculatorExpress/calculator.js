const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
	// __dirname will be the full path of the directory where this file is at
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
	// console.log(req.body);
	let num1 = Number(req.body.num1);
	let num2 = Number(req.body.num2);
	let result = num1 + num2;
	res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function(req, res) {
	res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
	// console.log(req.body);
	let weight = req.body.weight;
	let height = req.body.height;
	let bmiResult = (weight / Math.pow(height, 2)).toPrecision(3);
	res.send("Your BMI is " + bmiResult);
})


app.listen(3000, function () {
	console.log("Server started on port 3000.");
});

// npm install body-parser
