// Задача на модули и использование внешних библиотек: напишите модуль, который экспортирует функцию для работы с датами. 
// Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами.

function formatedDate() {
    return moment().format("DD.MM.YYYY");
}

document.getElementById('date').innerHTML = formatedDate();
console.log(formatedDate());