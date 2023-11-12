// Задача на промисы: напишите функцию, которая принимает URL изображения и возвращает промис, 
// который разрешается с данными об изображении, когда оно загружено. Когда говорится "промис разрешается с данными об изображении", 
// это означает, что промис должен быть успешно выполнен (resolved) с данными об изображении после того, как изображение будет загружено.


const imageContainer = document.querySelector('.image-container');
const button = document.getElementById('button');
const url = 'https://nft-arty.com/wp-content/uploads/2021/10/trbmxfykze8.jpg';

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;

        image.onload = () => {
            resolve({
                width: image.width,
                height: image.height,
                src: image.src
            })
            imageContainer.innerHTML = `<img class="image" src="${image.src}" />`;
        }

        image.onerror = () => {
            reject('Ошибка загрузки изображения');
        }
    });
}

function onSubmit() {
    loadImage(url)
    .then((image) => console.log('Изображение загружено', image))
    .catch((error) => alert(error))
}

button.addEventListener('click', onSubmit);


// Функция loadImage принимает URL изображения и возвращает промис. 
// Сначала создаю переменную image, которая равна изображению new Image(). Затем устанавливаю обработчик события onload, 
// который вызывает функцию resolve после успешной загрузки изображения. Внутри resolve функции возвращаются width, height и src изображения.
// В конце выводим изображение в контейнер.
// Далее устанавливаю обработчик событий onerror, который вызывает функцию reject в случае ошибки и передает сообщение об ошибке.

// Чтоб вывести изображение и получить данные, устанавливаю обработчик события на кнопку и вызываю функцию onSubmit, которая 
// вызывает функцию loadImage и передает ей url картинки. Далее с помощью .then обрабатываю успешный ответ и вывожу картинку и данные о картинки в консоль
// и .catch, в случае ошибки вывожу подсказку об ошибке