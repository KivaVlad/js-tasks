function isPalindrome(str){
    let oldStr = str.replace(/\s/g, '').toLowerCase();
    let newStr = str.split('').reverse().join('').replace(/\s/g, '').toLowerCase();

    return oldStr === newStr ? true : false;
}

// Функция принимает строку. Создаю переменную oldStr, убираем все пробелы в строке и приводим к нижнему регистру, чтоб исключить заглавные буквы.
// Создаю переменную newStr, которая берет входящую строку, преобразует ее в массив, переворачивает его и преобразует обратно в строку. 
// Далее также убираем все пробелы и приводим к нижнему регистру.
// В конце сравниваем две переменные, если переменная oldStr равна newStr - возвращаем true, заданная строка является палиндромом, если нет - возвращаем false

console.log(isPalindrome('аргентина манит негра')); // true
console.log(isPalindrome('топот'));  // true
console.log(isPalindrome('привет'));  // false
console.log(isPalindrome('Шалаш'));  // true