import React from "react";
import Note from "./Note";

function Notes(props) {
	return (
		<>
			{props.notes.map((note) => (
				<Note key={note.key} id={note.id} title={note.title} content={note.content} handleDelete={props.handleDelete}/>
			))}
		</>
	);
}

export default Notes;
