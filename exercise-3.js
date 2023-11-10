// Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:
// - вычисление N-го числа в ряду Фибоначчи 
// - вычисление всех чисел в ряду Фибоначчи до числа N
// - вычисление N-го просто числа
// - вычисление всех простых чисел до числа N


function MathX() {
    // Вычисление N-го числа в ряду Фибоначчи
    function getNthFibonacci(num) {
        let a = 0;
        let b = 1;
        let result = 0;

        for (let i = 0; i < num; i++) {
            result = a;
            a += b;
            b += result;
        }

        return result;
    }

    // Вычисление всех чисел в ряду Фибоначчи до числа N
    function getFibonacciNumbers(num) { 
        let a = 0;
        let b = 1;
        let result = 0;
        let arrNums = [];

        for (let i = 0; i < num - 2; i++) {
            result = a + b;
            a = b;
            b = result;
            arrNums.push(result);
        }

        return arrNums.join(' ');
    }

    //  Вычисление N-го просто числа
    function isPrimeNumber(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num !== 1;
    }
          
    // Вычисление всех простых чисел до числа N
    function getPrimesNthNumbers(num) {
        let primeNums = [];

        for (let i = 2; i <= num; i++) {
            if (isPrimeNumber(i)) {
                primeNums.push(i);
            }
        }

        return primeNums.join(' ');
    }

    return {
        getNthFibonacci: getNthFibonacci,
        getFibonacciNumbers: getFibonacciNumbers,
        isPrimeNumber: isPrimeNumber,
        getPrimesNthNumbers: getPrimesNthNumbers,
    }
}

const getResult = MathX();
console.log(getResult.getNthFibonacci(5));  // 8
console.log(getResult.getFibonacciNumbers(5));  // 1 2 3
console.log(getResult.isPrimeNumber(5));  // true
console.log(getResult.getPrimesNthNumbers(5));  // 2 3 5


// Термины

// N-е число Фибоначчи — это число в последовательности чисел Фибоначчи с номером N. 
// Последовательность чисел Фибоначчи начинается с двух единиц и каждый следующий член равен сумме двух предыдущих. 
// Например, 1-е, 2-е и 3-е числа Фибоначчи равны 1, 2 и 3 соответственно. 4-е число равно 5 (1 + 2 + 3), а 5-е — 8 (1 + 2 + 3 + 5).

// Простые числа - это числа, которые делятся без остатка только на 1 и на само себя.