// Посчитайте сколько раз можно вызвать функцию document.write() внутри document.write(). Объясните результат

let counter = 0;

function callDocumentWrite() {
    try {
        counter++;
        document.write();
        callDocumentWrite();
    } catch (error) {
        console.log(counter);
    }
}

// Функция вызывает сама себя до тех пор, пока не произойдет переполнение стека. 
// При каждом вызове увеличивается переменная counter. Когда происходит переполнение стека, функция выбрасывает ошибку 
// и выводит переменную counter. Так мы понимаем, сколько раз вызывалась функция document.write().

callDocumentWrite(); // 8965