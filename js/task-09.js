// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color 
// і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function colorChanging() {
  widget.parentNode.style.backgroundColor = `${getRandomHexColor()}`;
  codeOfColor.textContent = `${getRandomHexColor()}`;
}

const changeButton = document.querySelector('.change-color');

const codeOfColor = document.querySelector('.color');

const widget = document.querySelector('.widget');

changeButton.addEventListener("click", colorChanging);




