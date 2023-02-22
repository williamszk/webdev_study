// need to install nodejs in ubuntu
// sudo apt update
// sudo apt install nodejs -y
// sudo apt install npm

// how to initialize npm in a new directory
// npm init

// npm install express

const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1> Hello, world! </h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: williamsuzuki@this.com")
});

app.get("/about", function(req, res) {
    res.send("This is my about page. I tell about myself.")
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Live</li><li>Code</li><li>Rest</li></ul>")
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});








// use, for the server to capture changes in code:
// nodemon server.js






