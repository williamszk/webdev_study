import React, { useState } from "react";

function App() {
	const [contact, setContact] = useState({
		fName: "",
		lName: "",
		email: "",
	});

	function handleChange(event) {
		const { value, name } = event.target;

		setContact((prev) => {
			if (name === "fName") {
				return {
					...prev,
					fName: value,
				};
			} else if (name === "lName") {
				return {
					...prev,
					lName: value,
				};
			} else if (name === "email") {
				return {
					...prev,
					email: value,
				};
			}
		});
	}

	return (
		<div className="container">
			<h1>
				Hello {contact.fName} {contact.lName}
			</h1>
			<p>{contact.email}</p>
			<form>
				<input
					onChange={handleChange}
					value={contact.fName}
					name="fName"
					placeholder="First Name"
				/>
				<input
					onChange={handleChange}
					value={contact.lName}
					name="lName"
					placeholder="Last Name"
				/>
				<input
					onChange={handleChange}
					value={contact.email}
					name="email"
					placeholder="Email"
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default App;
