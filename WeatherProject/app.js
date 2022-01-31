const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {

	const urlHolder = "https://api.openweathermap.org/data/2.5/weather?q=Sao Paulo&appid=f428395adc097581d6a93ff833e8eb32&units=metric"
	https.get(urlHolder, function(response) {
		console.log(response.statusCode);

		response.on("data", function(data) {
			const weatherData = JSON.parse(data);
			// console.log(weatherData);

			const temperature = weatherData.main.temp;
			const weatherDescription = weatherData.weather[0].description;
			
			res.write("<p>The weather is curretnly " + weatherDescription + "</p>");
			res.write("<h1>The temperature in Sao Paulo is "+temperature+ " degrees Celcius.</h1>");
			res.write('<img src="http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png" alt="weather_image">');
			res.send();
		});
	});
});

app.listen(3000, function () {
	console.log("Server is running on port 3000.");
});
