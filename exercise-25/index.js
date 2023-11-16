// Задача: Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент, 
// добавляет его в DOM и устанавливает для него стиль с помощью CSS

const container = document.querySelector('.squares-wrapper');
const button = document.getElementById('button');

function createDiv() {
    const div = document.createElement('div');
    div.className = 'square';
    container.append(div);
}

button.addEventListener('click', createDiv);