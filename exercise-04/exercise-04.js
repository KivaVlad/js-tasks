function transformWords(num, words) {  
    let n = Math.abs(num);
  
    n %= 100;
    if (n >= 5 && n <= 20) return `${num} ${words[2]}`;

    n %= 10;
    if (n === 1) return `${num} ${words[0]}`;
    if (n >= 2 && n <= 4) return `${num} ${words[1]}`
    
	return `${num} ${words[2]}`;
}

const users = ['пользователь', 'пользователя', 'пользователей'];
const messages = ['сообщение', 'сообщения', 'сообщений'];

console.log(transformWords(112, messages)); // 112 сообщений
console.log(transformWords(12, messages)); // 12 сообщений
console.log(transformWords(1, messages)); // 1 сообщение
console.log(transformWords(1024, users)); // 1024 пользователя
console.log(transformWords(1026, users)); // 1026 пользователей
console.log(transformWords(121, users)); // 121 пользователь
