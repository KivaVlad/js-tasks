const imageContainer = document.querySelector('.image-container');
const button = document.getElementById('button');
const url = 'https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg';

function getImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;

        image.onload = () => {
            resolve({
                width: image.width,
                height: image.height,
                src: image.src,
                image: image
            })
            
            imageContainer.innerHTML = `<img class="image" src="${image.src}" />`;
        }

        image.onerror = () => {
            reject('Ошибка загрузки изображения');
        }
    });
}

function loadImage() {
    getImage(url)
    .then((image) => console.log('Изображение загружено', image))
    .catch((error) => alert(error))
}

button.addEventListener('click', loadImage);


// Функция loadImage принимает URL изображения и возвращает промис. 
// Сначала создаю переменную image, которая равна изображению new Image(). Затем устанавливаю обработчик события onload, 
// который вызывает функцию resolve после успешной загрузки изображения. Внутри resolve функции возвращаются width, height и src изображения.
// В конце выводим изображение в контейнер.
// Далее устанавливаю обработчик событий onerror, который вызывает функцию reject в случае ошибки и передает сообщение об ошибке.

// Чтоб вывести изображение и получить данные, устанавливаю обработчик события на кнопку и вызываю функцию onSubmit, которая 
// вызывает функцию loadImage и передает ей url картинки. Далее с помощью .then обрабатываю успешный ответ и вывожу картинку и данные о картинки в консоль
// и .catch, в случае ошибки вывожу подсказку об ошибке