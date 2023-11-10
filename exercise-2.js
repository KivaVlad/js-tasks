// Задача о странных числах: 
// Напишите функцию, которая принимает число и возвращает true, если это число является странным, и false в противном случае. 
// Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя

function isStrangeNum(num) {
    const divisorSum = (num) => {
        let sum = 0;

        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                sum += i + num / i;
                if (i !== num / i) {
                    sum -= 1;
                }
            }
        }

        return sum;
    };
    
    return num === divisorSum(num);
}

// Создаем функцию divisorSum, которая принимает число и возвращает сумму всех его делителей, которые меньше или равны num. 
// Затем функция isStrangeNum вызывает функцию divisorSum и сравнивает полученный результат с числом. 
// Если результат равен числу num, функция возвращает true, что означает, что число является странным.
    
console.log(isStrangeNum(1)); // false
console.log(isStrangeNum(2)); // true
console.log(isStrangeNum(3)); // true
console.log(isStrangeNum(4)); // false
console.log(isStrangeNum(5)); // true