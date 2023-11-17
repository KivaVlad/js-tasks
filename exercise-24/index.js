// Разработайте страницу, отображающую таблицу с данными.
// Требования:
//  - данные должны загружаться при загрузке страницы
//  - необходимо реализовать сортировку по убыванию и по возрастания для всех колонок
//  - необходимо реализовать клиентскую пагинацию (50 элементов на странице)

async function getUsers() {
    const response = await fetch('http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true');
    const data = await response.json();
    return data;
}

async function main() {
    const usersData = await getUsers();  // получаем данные из запроса в переменную
    let currentPage = 1;  // текущая страница
    let rows = 50;  // кол-во элементов на стр

    // Выводим в таблицу результат
    function printTableList(usersArr, rows, page) {
        const tableList = document.getElementById('table-body');
        tableList.innerHTML = '';  // при каждом вызове функции очищаем таблицу
        page--;  // при вызове функции отнимаем 1 у текущей страницы, чтоб вначале в slice попал нулевой элемент

        const start = rows * page;  // кол-во элементов на стр * текущую страницу (вначале будет 50 * 0)
        const end = start + rows;
        const paginatedUsers = usersArr.slice(start, end); // в переменную сохраняем нужное кол-во элементов из массива с результатом

        paginatedUsers.forEach((user) => {
            tableList.innerHTML += `
            <tr>
                <td>${user.fname}</td>
                <td>${user.lname}</td>
                <td>${user.tel}</td>
                <td>${user.address}</td>
                <td>${user.city}</td>
                <td>${user.state}</td>
                <td>${user.zip}</td>
            </tr>`
        })
    }

    // Создаем пагинацию
    function createPagination(usersArr, rows) {
        const paginationEl = document.querySelector('.pagination');
        const pagesCount = Math.ceil(usersArr.length / rows);  // Кол-во страниц = массив в результатом / кол-во выводимых элементов
        const paginationList = document.createElement('ul');  // список для элеметов пагинации
        paginationList.classList.add('pagination_list');

        // циклом проходим по полученному результату pagesCount(кол-во страниц)
        for (let i = 0; i < pagesCount; i++) {
            let pageCounter = i + 1;  // на каждом этапе цикла увеличиваем значение на 1
            const liEl = createPaginationElement(pageCounter);  // на каждом этапе цикла создаем li и передаем значение pageCounter
            paginationList.appendChild(liEl);  // добавляем каждую li в список ul
        }

        paginationEl.appendChild(paginationList);  // список с результатом (ul) добавляем в контейнер (div)
    }

    // создание li элемента
    function createPaginationElement(page) {
        const li = document.createElement('li');
        li.classList.add('pagination_item');
        li.innerText = page;

        if (currentPage === page) {  // если текущая стр равна получаемой функцией страницы
            li.classList.add('pagination_item_active');  // присваеваем класс active
        }

        li.addEventListener('click', () => {  // вешаем обработчик при клике 
            currentPage = page;  // текущая страница приравниваем выбраной странице
            printTableList(usersData, rows, currentPage);  // вызываем функцию для отрисовки таблицы и передаем новое значение currentPage

            let currentItem = document.querySelector('li.pagination_item_active');  // находим активный элемент
            currentItem.classList.remove('pagination_item_active');  // снимаем с него класс active

            li.classList.add('pagination_item_active'); // добавляем класс active выбранному элементу
        })

        return li;
    }


    printTableList(usersData, rows, currentPage);
    createPagination(usersData, rows);
}

main();