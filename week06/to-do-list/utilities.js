import ToDos from "./todos2.js";

import todos from "./todo-list.js";

let toDoList = new ToDos(todos);
let all = true;
let active = false;
let completed = false;

window.addEventListener("load", () => {
  toDoList.listToDos(all, active, completed);
  document.getElementById("filter");
});

document.getElementById("filter").addEventListener("click", () => {
    event.target.classList.toggle("active");
    if (event.target.textContent == "All") {
    event.target.style.border = "2px solid black";
    event.target.nextSibling.style.border = "none";
    event.target.nextSibling.nextSibling.style.border = "none";
    all = true;
    active = false;
    completed = false;
    toDoList.listToDos(all, active, completed);
    } else if (event.target.textContent == "Active") {
    event.target.previousSibling.style.border = none;
    event.target.style.border = "2px solid black";
    event.target.nextSibling.style.border = "none";
    all = false;
    active = true;
    completed = false;
    toDoList.listToDos(all, active, completed);
    } else {
    event.target.previousSibling.previousSibling.style.border =
        "none";
    event.target.previousSibling.style.border = "none";
    event.target.style.border = "2px solid black";
    all = false;
    active = false;
    completed = true;
    toDoList.listToDos(all, active, completed);
    }
});

document.getElementById("add-task").addEventListener("click", () => {
  toDoList.addTodo(all, active, completed);
});

document.getElementById("toDoList").addEventListener("click", () => {
  toDoList.completeTodo(event, all, active, completed);
});

document.getElementById("toDoList").addEventListener("click", () => {
  toDoList.deleteTodo(event, all, active, completed);
});

document.getElementById("toDoList").addEventListener("click", (event) => {
  toDoList.countTasks(event, all, active, completed);
});