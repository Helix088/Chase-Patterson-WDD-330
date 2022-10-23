import ToDo from "./todo.js";

class ToDos {
  constructor(toDos) {
    this.toDos = toDos;
  }

  listToDos(all, active, completed) {
    const toDoList = document.getElementById("toDoList");
    toDoList.innerHTML = "";
    this.renderToDoList(this.toDos, toDoList, all, active, completed);
    this.countTasks();
  }

  renderToDoList(toDoList, parent, all, active, completed) {
    if (all == true) {
      toDoList.forEach((toDo) => {
        parent.appendChild(this.renderTodo(toDo));
        this.countTasks();
      });
    } else if (active == true) {
      toDoList.forEach((toDo) => {
        if (toDo.completed == false) {
          parent.appendChild(this.renderTodo(toDo));
          this.countTasks();
        }
      });
    } else if (completed == true) {
      toDoList.forEach((toDo) => {
        if (toDo.active == false) {
          parent.appendChild(this.renderTodo(toDo));
          this.countTasks();
        }
      });
    }
  }

  renderTodo(toDo) {
    const item = document.createElement("li");
    if (toDo.completed == true) {
      item.innerHTML = `<div>
            <div id="checked">
             <i class="fa fa-check-square-o"></i>
             </div>
             <div class="checked toDoItem">
             ${toDo.content}
             </div>
             <div id="delete">
             <input type="hidden" value=${toDo.id}>
             <i class="fa-solid fa-trash-can"></i>            
             </div>
             </div>`;
      return item;
    } else {
      item.innerHTML = `<div>
            <div id="checked">
             <i class="fa fa-check-square-o" ></i>
             </div>
             <div class="toDoItem">
             ${toDo.content}
             </div>
             <div id="delete">
             <input type="hidden" value=${toDo.id}>
             <i class="fa-solid fa-trash-can"></i>            
             </div>
             </div>`;
      return item;
    }
  }

  addTodo(all, active, completed) {
    let content = document.getElementById("input").value;
    if (content == "") {
      alert("You cannot enter a blank task.");
    } else {
      let id = Date.now();
      let completed = false;
      let newToDo = new ToDo(id, content, completed);
      this.writeToLS(newToDo);
      this.listToDos(all, active, completed);
      this.countTasks();
    }
  }

  writeToLS(newToDo, all, active, completed) {
    localStorage.setItem("toDos", newToDo);
    this.toDos.push(newToDo);
    let newToDoString = JSON.stringify(this.toDos);
    localStorage.setItem("toDos", newToDoString);
    this.countTasks();
  }

  completeTodo(event, all, active, completed) {
    event.target.classList.toggle("checked");
    event.target.previousSibling.previousSibling.firstChild.nextSibling.classList.toggle(
      "displayed"
    );
    let itemId =
      event.target.nextSibling.nextSibling.firstChild.nextSibling.value;
    for (let i = 0; i < this.toDos.length; i++) {
      if (this.toDos[i].id == itemId) {
        this.toDos[i].completed =
          this.toDos[i].completed == false ? true : false;
      }
    }
    let newToDosString = JSON.stringify(this.toDos);
    localStorage.setItem("toDos", newToDosString);
    this.listToDos(all, active, completed);
    this.countTasks();
  }

  deleteTodo(event, all, active, completed) {
    let deleteTodoId = event.target.previousSibling.previousSibling.value;
    for (let i = 0; i < this.toDos.length; i++) {
      if (this.toDos[i].id == deleteTodoId) {
        this.toDos.splice(i, 1);
        let newToDosString = JSON.stringify(this.toDos);
        localStorage.setItem("toDos", newToDosString);
        this.listToDos(all, active, completed);
        this.countTasks();
      }
    }
  }

  countTasks() {
    let uncompletedTasks = 0;
    for (let i = 0; i < this.toDos.length; i++) {
      if (this.toDos[i].completed == false) {
        uncompletedTasks++;
      }
    }
    document.getElementById(
      "uncompleted"
    ).innerHTML = `${uncompletedTasks} tasks left`;
  }
}

export default ToDos;