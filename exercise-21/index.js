// Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari (если есть возможность).

let counter = 0;

function calculateStackSize() {
    try {
        return 1 + calculateStackSize();
    } catch (error) {
        return 0;
    }
}

// Функция использует рекурсию для имитации коллстека. Она вызывает себя до тех пор, пока не достигнет лимита коллстека, 
// в данном случае он равен 1. Когда коллстек достигает этого предела, функция вызывает сама себя еще раз, что вызывает 
// переполнение стека. Переполнение стека приводит к тому, что функция срабатывает и выдает ошибку. 
// Эта ошибка обрабатывается блоком catch, который возвращает 0. Затем этот ноль возвращается обратно вверх по коллстеку, 
// пока не достигает самого верхнего уровня, где его значение выводится в консоль.
  
const stackSize = calculateStackSize();
console.log(stackSize); // Chrome: 10459; Firefox: 10734