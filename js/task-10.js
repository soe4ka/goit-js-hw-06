// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити, 
// після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

//     Розміри найпершого <div> - 30px на 30px.
//     Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//     Всі елементи повинні мати випадковий колір фону у форматі HEX. 
//     Використовуй готову функцію getRandomHexColor для отримання кольору.
    
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let amount = 0;
let x = 30;

const numberInput = document.querySelector('#controls > input');

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');

const divBoxes = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

numberInput.addEventListener('input', () => {
  amount = Number(numberInput.value);
});

function createBoxes() {
  for (let i = 0; i < amount; i += 1) {
    x = x + 10;
    divBoxes.insertAdjacentHTML('beforeend', '<div style="background-color:' + `${getRandomHexColor()}` + '; display: inline-block; width: ' + `${x}` + 'px' + '; height:' + `${x}` + 'px' + '"></div>');
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = '';
}
