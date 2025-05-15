const btn = document.querySelector('button');
const input = document.querySelector('input');
const to_do = document.querySelector('.to-do-list');
let todos = [];

window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => to_do_list(todo));
}

btn.addEventListener('click', () => {
    const input_val = input.value;
    if (input_val == '')
        alert('enter some do to...')
    todos.push(input_val);
    localStorage.setItem('todos', JSON.stringify(todos))
    to_do_list(input_val)
    input.value = ' ';
})

function to_do_list(val) {
    let para = document.createElement('para');
    para.style.cursor = 'pointer';
    para.innerHTML = val ;
    to_do.appendChild(para);

    para.addEventListener('click', () => {
        para.style.textDecoration = 'line-through';
        remove_todo(val);
    })
    para.addEventListener('dblclick', () => {
        to_do.removeChild(para);
        remove_todo(val);
    })
}

function remove_todo(todo) {
    let index = todos.indexOf(todo);
    if (index > -1)
        todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos))
}