// Реализовать функцию конвертации JSON в строку

const json = [{"name": "John", "age": 25, "city": "New York"}, {"name": "Jane", "age": 30, "city": "Los Angeles"}, {"name": "Jack", "age": 40, "city": "San Francisco"}];

function jsonToString(json) {
    let jsonString = '';

    function stringify(item) {
        if (typeof item === 'string') {
            jsonString += `"${item}"`;
        } 
        
        else if (typeof item === 'number' || typeof item === 'boolean' || item === null) {
            jsonString += item;
        } 
        
        else if (Array.isArray(item)) { 
            jsonString += '[';

            for (let i = 0; i < item.length; i++) { 
                stringify(item[i]);
                if (i !== item.length - 1) { 
                    jsonString += ',';
                }
            }

            jsonString += ']';
        } 
        
        else if (typeof item === 'object') { 
            jsonString += '{';
            let keys = Object.keys(item);

            for (let i = 0; i < keys.length; i++) { 
                jsonString += `"${keys[i]}":`;
                stringify(item[keys[i]]);

                if (i !== keys.length - 1) { 
                    jsonString += ',';
                }
            }

            jsonString += '}';
        }
    }

    stringify(json);
    return jsonString;
}

// Создаю функцию jsonToString, которая принимает объект. Внутри функции создаю переменную jsonString, которая будет в себе хранить преобрахованный объект.
// Создаю функцию stringify, которая принимает некий item и далее делает проверки, чем является входящий item: если принимаемый item является строкой, то обрамляем его кавычками и добавляем к строке;
// если принимаемый item является числом, булевым или null, то просто добавляем его к строке; если принимаемый item является массивом, то
// вначале добавляю открывающую скобку, циклом for прохожу по каждому элементу массива и на каждом этапе вызываю функцию stringify, 
// если элемент в массиве не последний - разделяю элементы запятой, после завершения цикла добавляю закрывающую скобку;  
// если принимаемый item является объект, то также вначале добавляю открывающую скобку, в переменную keys сохраняю ключи объекта,
// циклом for прохожусь по ключам и каждый ключ оборачиваю в кавычки и добавляю : , вызываю функцию stringify для каждого значения ключа, 
// если ключ не последний - разделяю запятой. в конце добавляю закрывающую скобку.
// После выполнения проверок вызываю функцию stringify и возвращаю переменную jsonString, в которой хранится преобразованный в строку полученный item

console.log(typeof(json));
console.log(jsonToString(json));