// Задача: Рекурсивный обход дерева DOM:: Напишите функцию, которая рекурсивно обходит дерево DOM, 
// начиная с указанного элемента, и выполняет определенное действие с каждым узлом (например, выводить информацию о теге в консоль).

const div = document.querySelector('.container');

function traverseDOM(element) {
	// Если узел является элементом
	if (element.nodeType === 1) {
		// Выводим информацию об элементе
		console.log(element.nodeName);
		
		// Рекурсивно вызываем функцию для каждого дочернего элемента
		for (let i = 0; i < element.childNodes.length; i++) {
			console.log(element.childNodes[i]);
		}
	}
}

traverseDOM(div);