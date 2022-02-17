const SUPABASE_URL = 'https://qurnakdkijnyhcuzbmgb.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1cm5ha2RraWpueWhjdXpibWdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NDMsImV4cCI6MTk1OTkxNzQ0M30.IltjE-P3qd05gdR8QTQqmRASPhJmLREfwTW5uFWm7c8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createTodo(todo) {
    // create a single incomplete todo with the correct 'todo' property for this user in supabase
    const response = await client.from('todos').insert(todo);
    // console.log(response, 'response');
    return checkError(response);
}

export async function deleteAllTodos() {
    // delete all todos for this user in supabase
    const response = await client.from('todos').delete().match({ user_id: client.auth.user().id });
    return checkError(response);
}

export async function getTodos() {
    // get all todos for this user from supabase
    const response = await client.from('todos').select().order('id', { ascending: true });
    return checkError(response);
}

export async function completeTodo(id) {
    // find the and update (set complete to true), the todo that matches the correct id
    const response = await client.from('todos').update({ complete: true }).match({ id: id });
    return checkError(response);
}

export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./todos');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
