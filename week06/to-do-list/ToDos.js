import ToDo from "./ToDo.js";

class ToDos {
  constructor(todos) {
    this.todos = todos;
  }

  showToDos(all, active, completed) {
    const todosList = document.getElementById("todolist");
    todosList.innerHTML = "";
    this.renderTodolist(this.todos, todosList, all, active, completed);
    this.countLeftTasks();
  }

  renderTodolist(todoList, parent, all, active, completed) {
    if (all == true) {
      todoList.forEach((todo) => {
        parent.appendChild(this.renderTodoItem(todo));
        this.countLeftTasks();
      });
    } else if (active == true) {
      todoList.forEach((todo) => {
        if (todo.completed == false) {
          parent.appendChild(this.renderTodoItem(todo));
          this.countLeftTasks();
        }
      });
    } else if (completed == true) {
      todoList.forEach((todo) => {
        if (todo.active == false) {
          parent.appendChild(this.renderTodoItem(todo));
          this.countLeftTasks();
        }
      });
    }
  }

  renderTodoItem(todo) {
    const li = document.createElement("li");
    if (todo.completed == true) {
      li.innerHTML = `<div>
            <div id="checked">
             <i class="fa fa-check-square-o"></i>
             </div>
             <div class="checked">
             ${todo.todoName}
             </div>
             <div id="delete">
             <input type="hidden" value=${todo.id}>
             <i class="material-icons">clear</i>             
             </div>
             </div>`;
      return li;
    } else {
      li.innerHTML = `<div>
            <div id="checked">
             <i class="fa fa-check-square-o displayed" ></i>
             </div>
             <div>
             ${todo.todoName}
             </div>
             <div id="delete">
             <input type="hidden" value=${todo.id}>
             <i class="material-icons">clear</i>             
             </div>
             </div>`;
      return li;
    }
  }

  countLeftTasks() {
    let uncompletedTasks = 0;
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed == false) {
        uncompletedTasks++;
      }
    }
    document.getElementById(
      "uncompleted"
    ).innerHTML = `${uncompletedTasks} tasks left`;
  }

  addItem(all, active, completed) {
    let todoName = document.getElementById("todo_value").value;
    if (todoName == "") {
      document.getElementById("message").innerHTML =
        "Sorry, input cannot be blank. Please, " + "specify an item";
    } else {
      document.getElementById("message").innerHTML = "";
      let id = Date.now();
      let completed = false;
      let newTodo = new ToDo(id, todoName, completed);
      //todoList.addToDo(newTodo);
      //todoList.showToDos();
      this.addToDo(newTodo);
      this.showToDos(all, active, completed);
      this.countLeftTasks();
    }
  }

  addToDo(newTodo, all, active, completed) {
    localStorage.setItem("todos", newTodo);

    this.todos.push(newTodo);
    let todosArrayString = JSON.stringify(this.todos);
    localStorage.setItem("todos", todosArrayString);
    this.countLeftTasks();
  }

  checkItem(event, all, active, completed) {
    event.target.classList.toggle("checked");

    event.target.previousSibling.previousSibling.firstChild.nextSibling.classList.toggle(
      "displayed"
    );
    let itemId =
      event.target.nextSibling.nextSibling.firstChild.nextSibling.value;
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == itemId) {
        this.todos[i].completed = this.todos[i].completed == false ? true : false;
      }
    }
    let todosArrayString = JSON.stringify(this.todos);
    localStorage.setItem("todos", todosArrayString);
    this.showToDos(all, active, completed);
    this.countLeftTasks();
  }

  deleteItem(event, all, active, completed) {
    let deleteItemId = event.target.previousSibling.previousSibling.value;
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == deleteItemId) {
        this.todos.splice(i, 1);
        let todosArrayString = JSON.stringify(this.todos);
        localStorage.setItem("todos", todosArrayString);
        this.showToDos(all, active, completed);
        this.countLeftTasks();
      }
    }
  }
}

export default ToDos;
