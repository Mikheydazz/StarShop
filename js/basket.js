// Переменные
const empty = document.querySelector('.empty');
let addItem = document.createElement('li');
addItem.classList.add('products__list__item');
let productsList = document.querySelector('.products__list');
let titleCreator = document.createElement('h2');
let titleText = document.createTextNode('Нефрит');
titleCreator.appendChild(titleText);
let imgCreator = document.createElement('img');
imgCreator.src = 'image/nefrit.png';
let basketIsEmpty = document.querySelectorAll('.products__list__item')[0];
let deleteBtn = document.createElement('button');
let buttonText = document.createTextNode('Удалить');
deleteBtn.appendChild(buttonText);
deleteBtn.setAttribute('onclick', 'deleteItem()')

// Стили
imgCreator.classList.add('nefrit');
titleCreator.classList.add('title_shop');


// Функции
function update(){
	productsList.appendChild(addItem);
	addItem.appendChild(titleCreator);
	addItem.appendChild(imgCreator);
	basketIsEmpty.classList.add('hiddenElem');
	addItem.appendChild(deleteBtn);
	// deleteBtn.addEventListener('click', function(){
	// basketIsEmpty.classList.remove('hiddenElem');
	// addItem.style.display='none';
	// })
}
function deleteItem(){
	basketIsEmpty.classList.remove('hiddenElem');
	deleteBtn.parentNode.remove()
}
