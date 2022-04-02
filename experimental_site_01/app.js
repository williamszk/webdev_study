const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/", (req, res) => {
  console.log(req.body.searchBar);
});

app.listen(3000, () => {
  console.log("Server started successfully in port 3000.");
});
