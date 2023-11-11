// Реализовать функцию конвертации JSON в строку

const json = `[{"name": "John", "age": 25, "city": "New York"}, {"name": "Jane", "age": 30, "city": "Los Angeles"}, {"name": "Jack", "age": 40, "city": "San Francisco"}]`;

// function jsonToString(json) {
//     let result = '';
    
//     for (let i = 0; i < json.length; i++) {
//         const item = json[i];
//         result += '{' + Object.keys(item).map((key) => key + ':' + item[key]).join(',') + '}';
//         if (i !== json.length - 1) {
//             result += ',';
//         }
//     }
    
//     return result;
// }

// console.log(jsonToString(json));