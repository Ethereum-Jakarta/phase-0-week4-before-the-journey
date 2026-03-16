const buttonAdd = document.getElementById('btn-add')
const inputTodo = document.getElementById('input-todo')

// to save all the todos
let todos = [];

// Add todo to the list
buttonAdd.addEventListener('click', function () {
    event.preventDefault();
    let todo = inputTodo.value;
    todos.push(todo);
    showTodos(todo);
    inputTodo.value = '';
});

// show all the todos
const listTodo = document.getElementById('list-todo');

function showTodos(todo) {
    console.log('showTodos');
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="value-list">
           <input type="checkbox">
           <span>${todo}</span>
        </div>
        <button class="delete">x</button>
    `;
    listTodo.appendChild(li);
}

// delete todo
listTodo.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        const todo = event.target.parentElement;
        todo.remove();
        console.log(todos);
    }
});

// check todo
listTodo.addEventListener('click', function (event) {
    if (event.target.type === 'checkbox') {
        const todo = event.target.parentElement;
        todo.classList.toggle('completed');
    }
});

// search todo
const searchTodo = document.getElementById('search-todo');
searchTodo.addEventListener('keyup', function () {
    const searchValue = searchTodo.value.toLowerCase();
    const todos = listTodo.getElementsByTagName('li');
    Array.from(todos).forEach(function (todo) {
        const todoText = todo.textContent.toLowerCase();
        if (todoText.indexOf(searchValue) != -1) {
            todo.style.display = 'flex';
        } else {
            todo.style.display = 'none';
        }
    });
});