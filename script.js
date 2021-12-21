//selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list") //ul
const filterOption = document.querySelector(".filter-todo")
const document = document.querySelector(".getTodos")
//functions
const addTodo = (event) => {
    //prevents button from submitting the form
    event.preventDefault()
    //creating todoDiv
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todoDiv")
    //create LI
    const newTodo = document.createElement("li")
    newTodo.classList.add("todo-item")
    newTodo.innerText = todoInput.value
    todoDiv.appendChild(newTodo)
    saveLocalTodos(todoInput.value)
    //creating completed button
    const completedButton = document.createElement("button")
    completedButton.classList.add("completed-btn")
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    todoDiv.appendChild(completedButton)
    //creating delete button
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-btn")
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    todoDiv.appendChild(deleteButton)
    //append todoDiv to UL
    todoList.appendChild(todoDiv)
    //clearing input
    todoInput.value = ""
}

const deleteComplete = (event) => {
    const item = event.target
    if (item.classList.contains("delete-btn")) {
        const todo = item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener("transitionend", () => {
            todo.remove()
        })
    } else if (item.classList.contains("completed-btn")) {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}

const filterTodo = (event) => {
    const todos = todoList.childNodes; //all DIVs inside UL
    todos.forEach((todo) => {
        switch (event.target.value) {
            case "all": 
                todo.style.display = "flex"
                break;
            case "completed": 
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
                break; 
        }
    })
}

//creating filter option func
const filterTodo = (event) => {
}

const saveLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}

const getItem = () => {
    let todos = [];
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.forEach(function(todo) {
        const todoDiv = document.createElement("div")
        todoDiv.classList.add("todoDiv")
        //create LI
        const newTodo = document.createElement("li")
        newTodo.classList.add("todo-item")
        newTodo.innerText = todoInput.value
        todoDiv.appendChild(newTodo)
        saveLocalTodos(todoInput.value)
        //creating completed button
        const completedButton = document.createElement("button")
        completedButton.classList.add("completed-btn")
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        todoDiv.appendChild(completedButton)
        //creating delete button
        const deleteButton = document.createElement("button")
        deleteButton.classList.add("delete-btn")
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
        todoDiv.appendChild(deleteButton)
        //append todoDiv to UL
        todoList.appendChild(todoDiv)
    })
}

const removeLocalTodos = (todo) => {
    //splice(startIndex, deleteCount)
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    const tetx = todo.children[0].innerText
    const index = todos.indexOf(tetx)
    todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(todos))
}
//event-listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteComplete)
filterOption.addEventListener("click", filterTodo)
document.addEventListener("DOMContentLoaded", getTodos)