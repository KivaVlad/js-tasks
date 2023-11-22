const API_TOKEN = '61823ac261823ac261823ac2f66294344a6618261823ac204b4b8fa744c39a26db4e8e0';
const domain = 'https://vk.com/js_hub';
const pageId = 73928914;
const count = 10;
let offset = 0;
let posts = [];

// Функция создания скрипта и отправки запроса
function getVKPosts(offset) {
    const script = document.createElement('SCRIPT');
    script.src = `https://api.vk.com/method/wall.get?owner_id=-${pageId}&domain=${domain}&offset=${offset}&count=${count}&filter=all&v=5.154&callback=callbackFunc&access_token=${API_TOKEN}`;
    document.getElementsByTagName("head")[0].appendChild(script);
}

getVKPosts(offset);

// Функция получения постов
function callbackFunc(result) {
    if (result.response) {
        localStorage.setItem('posts', JSON.stringify([...result.response.items]));
    } else if (result.error) {
        alert(result.error.error_msg);
        console.log(result.error);
    }

    if (localStorage.getItem('posts') !== null) {
        posts = [...JSON.parse(localStorage.getItem('posts'))];
        posts.forEach((post) => createPostCard(post));
    }
}

// Создаем карточку поста и выводим данные
function createPostCard(post) {
    const widgetContainer = document.querySelector('.widget_content');

    const postImg = post?.attachments[0].type === "photo" ? post?.attachments[0].photo.sizes : {};
    const postImgUrl = postImg?.length ? postImg[postImg.length - 1].url : '';

    const postDate = new Date(post?.date * 1000);
    const day = postDate.getDate();
    const month = postDate.getMonth() + 1;
    const year = postDate.getFullYear() % 100;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedYear = year < 10 ? `0${year}` : year;
    const formattedDate = `${formattedDay}.${formattedMonth}.20${formattedYear}`;

    const likes = post.likes?.count;
    const views = post.views?.count;

    widgetContainer.innerHTML += `
        <div class="post-container">
            <span className="post_date">${formattedDate}</span>
            <pre class="post_text">${post?.text}</pre>
            ${post?.attachments[0].type === "photo" 
                ? `<div class="images_container">
                        <img src="${postImgUrl}" alt="" />
                    </div>`
                : ``
            }
            <div class="card-footer">
                <div class="left-icons">
                    <div class="icon-wrapper">
                        <img src="./icons/likes.png" alt="" />
                        ${likes !== 0 ? `<span>${likes}</span>` : ''}
                    </div>
                    <div class="icon-wrapper"><img src="./icons/comments.png" alt="" /></div>
                    <div class="icon-wrapper"><img src="./icons/repost.png" alt="" /></div>
                </div>
                <div class="views-icon-wrapper">
                    <img src="./icons/views.png" alt="" />
                    <span>${views}</span>
                </div>
            </div>
        </div>
    `;
}

// Имитируем задержку при подгрузке постов
function debounce(func, delay) {
    let timer;

    return function() {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    }
}

// При скролле до конца подгружаем посты
const widget = document.getElementById('widget');
widget.addEventListener('scroll', () => {
    let bottom = widget.scrollHeight - widget.clientHeight;
    let position = widget.scrollTop;

    if (Math.ceil(position) >= bottom || Math.floor(position) >= bottom) {
        offset += count;
        debounce(getVKPosts(offset), 300);
    }
})