import React from "react";
import ItemList from "./ItemList";

function List(props) {
	return (
		<ul>
			{props.todoItem.map((item) => (
				<ItemList key={item.key} inputText={item.inputText} />
			))}
		</ul>
	);
}

export default List;
