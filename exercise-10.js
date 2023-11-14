// Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.

const jsonString = '[{"name": "John", "age": 25, "city": "New York"}, {"name": "Jane", "age": 30, "city": "Los Angeles"}, {"name": "Jack", "age": 40, "city": "San Francisco"}]';

function stringToJson(str) {
    const json = new Function("return" + str)();

    if (typeof json === "object") {
        return json;
    } else {
        return;
    }
}

// Создаю функцию stringToJson, которая принимает строку. Далее создаю переменную json, которая равна new Function().
// new Function - это способ создать новый объект в JavaScript. Он принимает строку, которая представляет 
// собой JavaScript код, и выполняет ее, возвращая результат. В данном случае функция создает новый экземпляр Function, 
// выполняет строку "return " + str, которая преобразует строку str в объект JSON, и возвращает результат. 
// Если результат является объектом (typeof result == “object”), функция возвращает этот объект.

console.log(stringToJson(jsonString));