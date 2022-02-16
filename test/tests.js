import './example.test.js';
import { renderTodo } from '../render-utils.js';

const test = QUnit.test;

const todo1 = { id: 1, created_at: '2022-02-16T19:53:56+00:00', user_id: '5b56e264-a73f-4564-a52a-1cfed3b37504', task: 'eat pizza', complete: false };
const todo2 = { id: 3, created_at: '2022-02-16T19:54:35+00:00', user_id: '5b56e264-a73f-4564-a52a-1cfed3b37504', task: 'die a little inside', complete: true };

test('render todo should return a todo div', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="todo"><p>eat pizza</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTodo(todo1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('render todo should return a todo div with correct class', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="complete todo"><p>die a little inside</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTodo(todo2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});