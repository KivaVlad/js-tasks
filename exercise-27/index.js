// Задача: Добавить анимацию для элемента: Напишите функцию, которая добавляет анимацию для элемента на веб-странице, 
// например, плавное изменение его положения или размера.

const element = document.getElementById('square');
let isAnimate = false;

function animate(element, duration) {
    element.style.transition = `${duration}s ease`;
    element.style.width = '300px';
    element.style.height = '300px';
    element.style.transform = 'rotate(180deg)';
    isAnimate = true;
}

function animateBack(element, duration) {
    element.style.transition = `${duration}s ease`;
    element.style.width = '200px';
    element.style.height = '200px';
    element.style.transform = 'rotate(0)';
    isAnimate = false;
}

element.onclick = () => !isAnimate ? animate(element, 1) : animateBack(element, 1);
    