const functions = [
    function() {
        console.log('1');
    },
    function() {
        console.log('2');
    },
    function() {
        console.log('3');
    },
    function() {
        console.log('4');
    },
];

function callFunctions(functions) {
    functions.forEach((fn) => {
        fn();
    })
}

// Берем массив функций, перебираем методом forEach, вызываем каждую функцию из массива по порядку

callFunctions(functions);