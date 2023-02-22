import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Notes from "./Notes";

function App() {
	const [notes, setNotes] = useState([]);

	function handleAddNote(title, content) {
		const key = notes.length === 0 ? 0 : notes[notes.length - 1].key + 1;
		const id = key;

		setNotes((prevValue) => {
			return [
				...prevValue,
				{
					id,
					key,
					title,
					content,
				},
			];
		});
	}

	function handleDelete(id) {
		setNotes((prevValue) => prevValue.filter((val) => val.id !== id));
	}

	return (
		<div>
			<Header />
			<CreateArea handleAddNote={handleAddNote} />
			<Notes notes={notes} handleDelete={handleDelete} />
			<Footer />
		</div>
	);
}

export default App;
