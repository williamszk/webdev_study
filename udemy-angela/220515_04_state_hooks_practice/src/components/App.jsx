import React, { useState } from "react";

function App() {
	let time = new Date().toLocaleTimeString("pt-BR");

	const [timeNow, setTimeNow] = useState(time);

	function updateTime() {
		const time = new Date().toLocaleTimeString("pt-BR");
		setTimeNow(time);
	}

	setInterval(updateTime, 1000);

	return (
		<div className="container">
			<h1>{time}</h1>
			<button onClick={updateTime}>Get Time</button>
		</div>
	);
}

export default App;
