const customStyle = {
	color: "red",
	fontSize: "20px",
	border: "1px solid black",
};

customStyle.color = "blue";
// eventhough the customStyle was declared as a const
// we can change its internal data...

function App() {
	return (
		<div>
			<h1 style={customStyle}>Hello World!</h1>
		</div>
	);
}

export default App;
