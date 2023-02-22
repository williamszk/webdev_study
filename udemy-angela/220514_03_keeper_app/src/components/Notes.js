import React from "react";
import Note from "./Note";
import notes from "../notes";

function Notes() {
	return (
		<>
			{notes.map((note) => (
				<Note key={note.key} title={note.title} content={note.content} />
			))}
		</>
	);
}

export default Notes;
