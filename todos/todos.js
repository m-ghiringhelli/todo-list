import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos,
    getUser, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

displayTodos();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');


todoForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    // on submit, create a todo, reset the form, and display the todos
    let data = new FormData(todoForm);
    const newTodo = {
        task: data.get('todo')
    };
    // console.log('click', data.get('todo'));
    await createTodo(newTodo);
    todoForm.reset();
    await displayTodos();
});

async function displayTodos() {
    // fetch the todos
    const todos = await getTodos();
    todosEl.textContent = '';
    // display the list of todos
    for (let todo of todos) {
        const newTodo = renderTodo(todo);
        // be sure to give each todo an event listener
        newTodo.addEventListener('click', async() => {
            console.log('clicked');
            // on click, complete that todo
            await completeTodo(todo.id);
            displayTodos();
        });
        todosEl.append(newTodo);
    }
}

// add an on load listener that fetches and displays todos on load
window.addEventListener('load', async() => {
    // console.log('loaded');
    // await createTodo('todo');
    await displayTodos();
});

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async() => {
    // delete all todos
    
    // then refetch and display the updated list of todos
});
