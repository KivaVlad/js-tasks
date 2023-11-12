// Разработайте функцию преобразования JSON в связный список. 
// На входе функция должна получать JSON, содержащий список объектов, на выходе объект, представляющий из себя односвязный список.

const json = '[{"name": "John", "age": 25, "city": "New York"}, {"name": "Jane", "age": 30, "city": "Los Angeles"}, {"name": "Jack", "age": 40, "city": "San Francisco"}]';

function parseFromJson(json) {
    let list = JSON.parse(json);
    let result = {list: []};

    list.forEach((item) => {
        result.list.push(item);
    })

    return result;
}

// Создаю ф-цию parseFromJson, которая принимает json. Полученный json парсим с помощью метода JSON.parse() и результат сохранияю в переменную.
// Создаю пустой оъект result. С помощью метода forEach каждый элемент из списка добавляю в путой объект result

console.log(parseFromJson(json));