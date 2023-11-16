// Необходимо реализовать простое поле ввода адреса с функцией геокодинга: пользователь вводит данные в поле с 
// помощью одного из геоинформационных сервисов (Яндекс.Карты, ДаДата, GraphHopper), подбирается адрес. 
// Найденные данные должны отображаться в выпадающем списке, из которого можно выбрать подходящее значение.

const API_BASE_URL = 'https://geocode-maps.yandex.ru';
const API_KEY = '9f954565-93f9-4634-a2c7-9200149b9854';
const input = document.getElementById('input');
const clearIcon = document.getElementById('clear-icon');
const listContainer = document.querySelector('.search-list-container');
const resultList = document.querySelector('.search-list');
let resultsArr = [];

// Выводим данные инпута
function printInput() {
    return input.value.trim();
}

// Получаем данные о геопозиции
async function getLocation() {
    const response = await fetch(`${API_BASE_URL}/1.x/?apikey=${API_KEY}&geocode=${printInput()}&format=json`);
    const data = await response.json();
    return data;
}

// Обрабатываем ответ
function onSubmit() {
    if (input.value.trim()) {
        getLocation()
        .then((response) => {
            openList();
            resultsArr = [];
            resultsArr.push(response.response.GeoObjectCollection.featureMember);
            resultsArr.forEach((results) => printAddress(results));
        })
        .catch(error => console.log(error))
    } else {
        closeList();
    }
}

// Выводим данные
function printAddress(results) {
    results.forEach((item) => {
        let address = item?.GeoObject?.metaDataProperty?.GeocoderMetaData?.Address?.formatted;
        let li = document.createElement('li');
        li.className = 'search-item';
        li.innerText = address;
        resultList.append(li);
        printValue(li, address)
    })
}

// Выбираем и выводим нужный элемент при клике
function printValue(li, address) {
    li.onclick = () => {
        input.value = address;
        closeList();
    }
}

// Имитация задержки
function debounce(func, delay) {
    let timer;

    return function() {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    }
}

// Очищаем список
function removeList() {
    resultList.innerHTML = '';
}

// Закрываем выпадающий список
function closeList() {
    listContainer.classList.add('hidden');
}

// Открывает выпадающий список
function openList() {
    listContainer.classList.remove('hidden');
}

// Очищаем input и список
function clearInput() {
    input.value = '';
    resultList.innerHTML = '';
    clearIcon.classList.add('hidden');
    closeList();
}


// Создаем имитацию задержки при вызове функции отправки запроса
const debounceAddress = debounce(onSubmit, 400);
// При вводе данных в input очищаем список и вызываем функцию для получения данных 
input.addEventListener('input', () => {
    clearIcon.classList.remove('hidden');
    removeList();
    debounceAddress();
});
// При клике на input открываем список, если поле ввода не пустое
input.onclick = () => input.value.trim() && openList();
// При клике на крестик очищием input
clearIcon.addEventListener('click', clearInput);
