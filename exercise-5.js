// Разработайте функцию преобразования JSON в связный список. 
// На входе функция должна получать JSON, содержащий список объектов, на выходе объект, представляющий из себя односвязный список.

const json = '[{"name": "John", "age": 25, "city": "New York"}, {"name": "Jane", "age": 30, "city": "Los Angeles"}, {"name": "Jack", "age": 40, "city": "San Francisco"}]';

function usersObj(data) {
    this.data = data;
};

console.log(usersObj);

function createUsersList(json) {
    const list = {};
    const dataList = JSON.parse(json);

    dataList.forEach((data) => {
        list[data.name] = new usersObj(data);
    })

    return list;
};

// Создаем пустой объект. Создаем функцию для добавления списка пользователей в пустой объект. Создаем пустой список. Парсим JSON объект. 
// С помощью forEach добавляем каждый объект в пустой объект. Возвращаем новый список пользователей в виде объекта

const usersList = createUsersList(json);
console.log(usersList);
