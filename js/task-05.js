// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//  підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані 
//  повинен відображатися рядок "Anonymous".

const input = document.querySelector('#name-input');

const greeting = document.querySelector('#name-output');

function inputChange(event) {
    greeting.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
        greeting.textContent = 'Anonymous';
    }
}

input.addEventListener('input', inputChange);

