// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const rangeInput = document.querySelector('#font-size-control');

const testText = document.querySelector('#text');

rangeInput.addEventListener('input', fontSizeChange);

function fontSizeChange(event) {
    testText.style.fontSize = `${event.currentTarget.value}` + 'px';
}