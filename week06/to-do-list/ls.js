export function writeToLS(newToDo) {
  localStorage.setItem("toDos", newToDo);
  this.toDos.push(newToDo);
  let newToDoString = JSON.stringify(this.toDos);
  localStorage.setItem("toDos", newToDoString);
}

export function readFromLS(key) {
  let storedTodos = localStorage.getItem("todos");
  if (storedTodos == null) {
    key = [];
  } else {
    key = JSON.parse(storedTodos);
  }
}
