
function showTodo(todo: {title: string, text: string}){
    console.log(todo.title + ": " + todo.text);
}

showTodo({title:"Study TypeScript", text:"on progress"});


interface Todo {
    title: string;
    text: string;
}

function showTodo2(todo: Todo){
    console.log(todo.title + ": " + todo.text);
}

showTodo2({title:"Study TypeScript", text:"on progress"});
// showTodo2({title:true, text:"on progress"});

