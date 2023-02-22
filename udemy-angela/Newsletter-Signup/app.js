const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");



const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const query = req.body;
    console.log(query);
});







app.listen(3000, function() {
    console.log("Server started on port 3000.");
});

