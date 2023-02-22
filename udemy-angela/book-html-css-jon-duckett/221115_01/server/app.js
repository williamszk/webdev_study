const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
  // __dirname will be the full path of the directory where this file is at
  res.sendFile(path.join(__dirname, "../client", "index.html"));
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
