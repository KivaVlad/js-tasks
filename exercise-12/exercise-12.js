const book = {
    title: 'Название книги',
    author: 'Автор',
    year: null,

    // метод изменения названия
    setTitle: function(newTitle) {
        this.title = newTitle;
    },

    // метод изменения автора
    setAuthor: function(newAuthor) {
        this.author = newAuthor;
    },

    // метод изменения год издания
    setYear: function(newYear) {
        this.year = newYear;
    }
}

book.setTitle('Цветы для Элджертона');
book.setAuthor('Дэниел Киз');
book.setYear(1966);

const {title, author, year} = book;

console.log(title, author, year);
console.log(book);

// Чтобы изменить значения в книге, создаю функцию внутри объекта, которая принимает новое значение, обращается к необходимому ключу
// через this и присваивает новое значение. Чтобы получить новое значение можно использовать деструктуризацию.

