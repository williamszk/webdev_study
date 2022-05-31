import React, { useState } from "react";

function CreateArea(props) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	return (
		<div>
			<form
				onSubmit={(event) => {
					props.handleAddNote(title, content);
          event.preventDefault();
          setTitle("");
          setContent(""); 
				}}
			>
				<input
					name="title"
					placeholder="Title"
					value={title}
					onChange={(event) => {
						setTitle(event.target.value);
					}}
				/>
				<textarea
					name="content"
					placeholder="Take a note..."
					rows="3"
					value={content}
					onChange={(event) => {
						setContent(event.target.value);
					}}
				/>
				<button>Add</button>
			</form>
		</div>
	);
}

export default CreateArea;
