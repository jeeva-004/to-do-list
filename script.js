const btn = document.querySelector('button');
const input = document.querySelector('input');
const to_do_list = document.querySelector('.to-do-list');


btn.addEventListener('click', ()=>{
    const input_val = input.value;
    const div = document.createElement('div');
    let error = 'enter something!'
    if(input_val ==''){
        console.log('value is empty')
        div.innerHTML = error;
        // div.style.border = '1px solid red';
        // div.style.color = 'red';
        to_do_list.appendChild(div)
    }
    div.innerHTML = input_val;
    to_do_list.appendChild(div);
})