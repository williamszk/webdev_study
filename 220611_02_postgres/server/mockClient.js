// https://www.mariokandut.com/how-to-make-an-API-request-in-Node-javascript/#3-axios
// we use axios, although there are other alternatives
// https://axios-http.com/docs/intro
const axios = require("axios");

// IIFE = Immediatly Invoked Function Expression
(() => {
	const URL = "http://localhost:5000/todos";

	const body = {
		description: "I need to clean my room.",
	};

	axios
		.post(URL, body)
		.then((res) => {
			console.log(">>> POST request");
			console.log(res.data);
		})
		.catch((err) => {
			console.error(err);
		});
})();

// console.log(">>> Message from mockClient: I ran here!");

(() => {
	const URL = "http://localhost:5000/todos";

	axios
		.get(URL)
		.then((res) => {
			console.log(">>> GET request get all todos");
			console.log(res.data);
		})
		.catch((err) => {
			console.error(err);
		});
})();

(() => {
	const URL = "http://localhost:5000/todos/2";

	axios
		.get(URL)
		.then((res) => {
			console.log(">>> GET request get just one todo item with specific id");
			console.log(res.data);
		})
		.catch((err) => {
			console.error(err);
		});
})();

(() => {
	const URL = "http://localhost:5000/todos/2";

	axios
		.put(URL, { description: "This is a changed description" })
		.then((res) => {
			console.log(">>> PUT request to change just 1 object");
			console.log(res.data);
		})
		.catch((err) => {
			console.error(err);
		});
})();

(() => {
	const URL = "http://localhost:5000/todos/3";

	axios
		.delete(URL)
		.then((res) => {
			console.log(">>> DELETE request");
			console.log(res.data);
		})
		.catch((err) => {
			console.error(err.message);
		});
})();
