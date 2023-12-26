function passwordCheck(password) {
    const MIN_LENGTH = 4;
    let rating = 0;
    let improvements = [];

    const lowerCaseLetters = /[a-zа-я]/;
    const upperCaseLetters = /[A-ZА-Я]/;
    const numbers = /[0-9]/;
    const specialSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    let isLowerCase = false;
    let isUpperCase = false;
    let isNumbers = false;
    let isSpecialSymbols = false;

    if (password?.length) {
        // Проходим по длинне пароля и проверяем каждую букву, под какую регулярку оно попадает и меняем соотвествующий фраг на true
        for (let i = 0; i < password.length; i++) {
            if (lowerCaseLetters.test(password[i])) {
                isLowerCase = true;
            } else if (upperCaseLetters.test(password[i])) {
                isUpperCase = true;
            } else if (numbers.test(password[i])) {
                isNumbers = true;
            } else if (specialSymbols.test(password[i])) {
                isSpecialSymbols = true;
            }
        }
    } else {
        console.log('Введите пароль');
    }
    
    // Проверяем, какие флажки поменялись на true и увеличиваем переменную rating на 1 при каждом измененном флажке, если false - добавляем в массив тест-подсказку
    password.length > MIN_LENGTH ? rating++ : improvements.push('больше символов');
    isLowerCase ? rating++ : improvements.push('буквы в нижнем регистре');
    isUpperCase ? rating++ : improvements.push('буквы в верхнем регистре');
    isNumbers ? rating++ : improvements.push('цифры');
    isSpecialSymbols ? rating++ : improvements.push('спец символы');

    // В конце проверяем значение переменной rating и выводим соответствующую оценку паролю с подсказкой, что можно улучшить
    if (rating !== 0) {
        if (rating < 3) {
            console.log('Слабый пароль, можно добавить:', improvements.join(', '));
        } else if (rating === 3 || rating === 4) {
            console.log('Средний пароль, можно добавить:', improvements.join(', '));
        } else {
            console.log('Надежный пароль');
        }
    }

}

passwordCheck('парольPASSWORD-123');