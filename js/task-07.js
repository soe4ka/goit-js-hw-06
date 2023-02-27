// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const rangeInput = document.querySelector('#font-size-control');

const testText = document.querySelector('#text');

testText.style.fontSize = `${rangeInput.value}px`;

rangeInput.addEventListener('input', fontSizeChange);

function fontSizeChange() {
    testText.style.fontSize = `${rangeInput.value}px`;
}