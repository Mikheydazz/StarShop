const btnB = document.querySelector('.burger');
const menuB = document.querySelector('.shop_menu');
btnB.addEventListener('click', function(){
	menuB.classList.toggle('shop_menu_on');
})