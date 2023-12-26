const url = 'https://jsonplaceholder.typicode.com/users';

async function getUsers() {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

getUsers()
.then(response => console.log(response))
.catch(error => console.log(error))


// Создаю асинхронную функцию getUser, которая получает список пользователей через fetch запрос и сохраняет в переменную response.
// Результат response вернет Promise, поэтому нужно использовать слово await, чтоб получить ответ. Получаемый ответ нужно преобразовать 
// в читабельный формат. Создаю переменную data, которая равна преобразованному ответу в json формат. Вначале также ставлю слово await
// чтоб дождаться выполнения преобразования. Сохраняю полученный ответ в переменной data.
// Асинхронная функция всегда возвращает Promise. Если просто вызвать функцию getUser(), то в ответе будет Promise.
// Нужно обработать Promise: с помощью метода .then(), который вернет успешный ответ от сервера в консоль, и метода .catch(), для обработки ошибок
