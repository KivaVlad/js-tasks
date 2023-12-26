function counter() {
    let x = 0;

    function incrementCounter() {
        return x += 1;
    }

    return incrementCounter
}

// Функция counter возвращает функцию incrementCounter, которая увеличивает переменную x, 
// из области видимости counter, на 1 при каждом ее вызове и сохраняет значение в памяти.

const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3