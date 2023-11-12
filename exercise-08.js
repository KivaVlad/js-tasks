// Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию, 
// которая вызывает каждую функцию в этом массиве и возвращает массив результатов, полученных после вызова каждой функции.

function functionsArray() {
    const sum2 = (x) => {
        return x + 2;
    }

    const multiply2 = (x) => {
        return  x * 2;
    }

    const subtract2 = (x) => {
        return x - 2;
    }

    return [sum2, multiply2, subtract2];
}


function composeFunctions(functionsArray) {
    return function() {
        const arr = [];
    
        functionsArray.forEach((fn) => {
            arr.push(fn.apply(this, arguments));
        })
    
        return arr;
    }
}


// Создал функцию functionsArray, которая возвращает массив функций. Создал функцию composeFunctions, которая принимает массив функций. 
// Эта функция создает замыкание, которое вызывает все переданные функции методом forEach и возвращает результат их выполнения 
// с помощью метода apply(). Полученные результаты выполнения функций пушим в пустой массив. 
// В конце возвращается массив с результатами выполнения каждой функции 


const result = composeFunctions(functionsArray());
console.log(result(5));