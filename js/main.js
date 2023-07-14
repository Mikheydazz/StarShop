const btnBuy = document.getElementById('btn');
const price = document.getElementById('priceBSK');
let buyFlag = 0;
let allPrice = 0;
let itemPrice = document.getElementById('price').innerHTML;
// localStorage.clear()
itemPrice = parseInt(itemPrice);
console.log(itemPrice)
if(localStorage.getItem('allPriceKey')!==null ||
	localStorage.getItem('btnKey')!==null){
	allPrice = localStorage.getItem('allPriceKey')
	buyFlag = localStorage.getItem('btnKey')
	price.innerHTML = 'Корзина ' + allPrice + '₽';
	buyFlag = parseInt(buyFlag);
	if (!buyFlag){
		btnBuy.style.background = '#7fc7ff';
		btnBuy.innerHTML = 'КУПИТЬ';
		buyFlag = 0;
	} else{
		btnBuy.style.background = '#1faee9';
		btnBuy.innerHTML = 'В КОРЗИНЕ';
		buyFlag = 1;
	}
}
function buyItem() {
	if (!buyFlag) {
		btnBuy.style.background = '#1faee9';
		btnBuy.innerHTML = 'В КОРЗИНЕ';
		buyFlag = 1;
		allPrice = +allPrice + itemPrice
	} else {
		btnBuy.style.background = '#7fc7ff';
		btnBuy.innerHTML = 'КУПИТЬ';
		buyFlag = 0;
		allPrice = +allPrice - itemPrice
	}
	console.log(allPrice);
	price.innerHTML = 'Корзина ' + allPrice + '₽';
	localStorage.setItem('allPriceKey', allPrice);
	localStorage.setItem('btnKey', buyFlag);
}