let todos;
let storedTodos = localStorage.getItem("todos");
if (storedTodos == null) {
  todos = [];
} else {
  todos = JSON.parse(storedTodos);
}

export default todos;