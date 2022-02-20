const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

console.log(date);

const app = express();

let myNewItemArray = ["Buy food", "Cook food", "Eat food"];
let workItems = [];

app.use(bodyParser.urlencoded({ extended: true })); // this is needed to be able to pass form info to the back-end
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  // res.sendFile(__dirname + "/index.html");
  const dayOfWeek = date.getDate();
	// const dayOfWeek = date.getDay();
  const listTitle = dayOfWeek;

  res.render("list", { listTitle: listTitle, myNewItemArray: myNewItemArray });
});

app.post("/", function (req, res) {
  const query = req.body;
  const myNewItem = query.myNewItem;

  if (req.body.list === "Work") {
    workItems.push(myNewItem);
    res.redirect("/work");
  } else {
    myNewItemArray.push(myNewItem);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", myNewItemArray: workItems });
});

// app.post("/work", function(req,res){
// 	const query = req.body;
// 	let myNewItem = query.myNewItem;
// 	workItems.push(myNewItem);
// 	res.redirect("/work");
// })

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
