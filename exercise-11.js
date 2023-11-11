// Задача о замыканиях и области видимости: напишите функцию, которая возвращает другую функцию. 
// Внутренняя функция должна иметь доступ к переменной, определенной во внешней функции, даже после того, 
// как внешняя функция завершила свое выполнение

function outer() {
    let counter = 0;

    function incrementCounter() {
        return counter += 1;
    }

    return incrementCounter
}

const myCounter = outer();

console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
console.log(myCounter()); // 4
console.log(myCounter()); // 5