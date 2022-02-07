const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {
	const query = req.body.cityName
	const apiKey = "55be9c12e582c70a186b66653977b6ee"
	const units = "metric"
	const urlHolder = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;
	https.get(urlHolder, function (response) {
		console.log(response.statusCode);

		response.on("data", function (data) {
			const weatherData = JSON.parse(data);
			// console.log(weatherData);

			const temperature = weatherData.main.temp;

			const weatherDescription = weatherData.weather[0].description;

			res.write("<p>The weather is currently " + weatherDescription + "</p>");
			res.write(
			"<h1>The temperature in " + query + " is " +
				temperature +
				" degrees Celcius.</h1>"
			);
			res.write(
			'<img src="http://openweathermap.org/img/wn/' +
				weatherData.weather[0].icon +
				'@2x.png" alt="weather_image">'
			);
			res.send();
		});
	});
});



app.listen(3000, function () {
	console.log("Server is running on port 3000.");
});
