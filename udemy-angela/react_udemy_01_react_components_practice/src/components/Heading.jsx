import "./Heading.css";

function Heading() {
	const customStyle = {
		color: "",
	};

	const hourOfDay = new Date().getHours();

	let greeting;
	if (hourOfDay >= 0 && hourOfDay <= 12) {
		greeting = "Good Morning";
		customStyle.color = "red";
	} else if (hourOfDay > 12 && hourOfDay <= 18) {
		greeting = "Good Afternoon";
		customStyle.color = "green";
	} else if (hourOfDay >= 18 && hourOfDay <= 24) {
		greeting = "Good Evening";
		customStyle.color = "blue";
	}

	return (
		<h1 style={customStyle} className="heading">
			{greeting}
		</h1>
	);
}

export default Heading;
