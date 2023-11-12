// Разработать функцию, изменяющую окончание слов в зависимости от падежа. Например:
// - 112 сообщения
// - 12 сообщений
// - 1 сообщение
// - 1024 пользователя
// - 1026 пользователей
// - 121 пользователь

function transformWords(num, words) {  
	let n = num % 10;

	if (num > 10 && num < 20) {
        return `${num} ${words[2]}`;
    }

	if (n > 1 && n < 5) {
        return `${num} ${words[1]}`;
    }

	if (n === 1) {
        return `${num} ${words[0]}`;
    } 

	return `${num} ${words[2]}`;
}


// Функция transformWords принимает число и массив из 3-х возможных склонений слов. 
// Создаем переменную n, которая вычисляет остаток от деления на 10 входящего числа num (это нужно для этапов проверки склонения).
// Далее делаем проверки и возвращаем входящее число и правильное окончание, в зависимости от склонения

const users = ['пользователь', 'пользователя', 'пользователей'];
const messages = ['сообщение', 'сообщения', 'сообщений'];

console.log(transformWords(112, messages)); // 112 сообщения
console.log(transformWords(12, messages)); // 12 сообщений
console.log(transformWords(1, messages)); // 1 сообщение
console.log(transformWords(1024, users)); // 1024 пользователя
console.log(transformWords(1026, users)); // 1026 пользователей
console.log(transformWords(121,users)); // 121 пользователь
