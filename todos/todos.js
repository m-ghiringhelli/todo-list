import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

window.addEventListener('load', async () => {
    await displayTodos();
});

todoForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    // on submit, create a todo, reset the form, and display the todos
    let data = new FormData(todoForm);
    // console.log('click', data.get('todo'));
});

async function displayTodos() {
    let todos = [];
    // fetch the todos
    todos = await getTodos();
    // display the list of todos
    for (let todo of todos) {
        todosEl.append(renderTodo(todo));
    }
    // be sure to give each todo an event listener

    // on click, complete that todo
}

// add an on load listener that fetches and displays todos on load

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async() => {
    // delete all todos

    // then refetch and display the updated list of todos
});
