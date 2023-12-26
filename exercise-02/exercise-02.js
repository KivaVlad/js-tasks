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

// Создаю функцию isStrangeNum, которая принимает число и  проверяет, является ли число странным числом. 
// Странное число - это число, которое равно сумме всех своих делителей, кроме самого числа и единицы. 
// Сначала функция определяет функцию divisorSum, которая принимает число и возвращает сумму всех его делителей. 
// Затем функция проверяет, равно ли исходное число результату функции divisorSum. 
// Если эти числа равны, возвращаем true
    
console.log(isStrangeNum(1)); // false
console.log(isStrangeNum(2)); // true
console.log(isStrangeNum(3)); // true
console.log(isStrangeNum(4)); // false
console.log(isStrangeNum(5)); // true