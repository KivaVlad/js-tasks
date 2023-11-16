// Задача: Взаимодействие с формами: Напишите функцию, которая получает данные из формы на веб-странице и выполняет 
// определенные действия с этими данными, например, отправляет их на сервер или отображает всплывающее окно с результатами.

const userName = document.getElementById('username-input');
const password = document.getElementById('password-input');
const button = document.getElementById('button');

button.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (userName.value.trim() && password.value.trim()) {
        alert(`Логин: ${userName.value} Пароль: ${password.value}`);
    }
}