const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(event) {
//Prevent form from submitting
event.preventDefault();
 //Todo DIV
 const todoDiv = document.createElement('div');
 todoDiv.classList.add("todo");

 //Create LI
 const newTodo = document.createElement('li');
 newTodo.innerText = todoInput.value;
 newTodo.classList.add('todo-item');
 newTodo.id = "todo-item";
 todoDiv.appendChild(newTodo);
 //CHECKMARK BUTTON
 const completedButton = document.createElement('button');
 completedButton.innerHTML = '<i class="fa-solid fa-check-double"></i>';
 completedButton.classList.add('complete-btn');
 todoDiv.appendChild(completedButton);
 //DELETE BUTTON
 const deleteButton = document.createElement('button');
 deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
 deleteButton.classList.add('delete-btn');
 todoDiv.appendChild(deleteButton);
 todoList.appendChild(todoDiv);
 //clear Todo INPUT VALUE
 todoInput.value = '';
}

function deleteCheck(e) {
const item = e.target;
//DELETE TODO
if(item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
}
if(item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
}
}




