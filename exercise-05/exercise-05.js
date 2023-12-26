// имитация json
const json = JSON.stringify([{name: "John", age: 25, city: "New York"}, {name: "Jane", age: 30, city: "Los Angeles"}, {name: "Jack", age: 40, city: "San Francisco"}]);

function jsonToObjectList(json) {
    const jsonToArray = JSON.parse(json);  // перевожу json в массив
    let list = {};

    for (let i = 0; i < jsonToArray.length; i++) {
        list[i] = jsonToArray[i]; // на каждом этапе цикла создаем новый ключ в объекте и сохраняем значение элемента массива в этом ключе
    }

    return list;
}

const result = jsonToObjectList(json);
console.log(result);