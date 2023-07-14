// let color = '';
const header = document.querySelector('.header_shop');
const itemNav = document.querySelectorAll('.txtm')
const itemNav2 = document.querySelector('.txtm1')
const text = document.querySelectorAll('.txt');
const main = document.querySelector('main');
const body = document.querySelector('body');
const slide = document.querySelectorAll('.itc-slider-item');
const menu = document.getElementById('menu');
const btn = document.querySelector('.menu_btn');
const tovar = document.getElementById('tovar');
const about = document.getElementById('karta');
const cena = document.getElementById('cena');
const buy = document.getElementById('btn');
const btnMenu = document.getElementById('btnMenu');
const foot = document.querySelector('.footer');
const choise = document.getElementById('choise');
const accord = document.querySelectorAll('.accordion__header');




function choiseDark(){


	// choise.classList.toggle('theme_light');
	console.log('выбран чёрный');
	//header
	header.style.background="#08457e";
	for(let i = 0; i<itemNav.length; i++){
		itemNav[i].style.color='white';
	}
	//main
	text.forEach((el)=>{
		el.style.color='white';
	});
	console.log(tovar)
	main.style.background='#50545e';
	body.style.background='#50545e';
	btn.style.background='#08457e';

	for(let i = 0; i<accord.length; i++){
		accord[i].style.background='#08457e';
	}
	tovar.style.color='white';
	btnMenu.style.background='#08457e';
	menu.style.background='#08457e';
	if(btnMenu.classList.contains('is-pushed')){
		btnMenu.style.background='#052a4d';
	};
	itemNav2.style.color='white';


	for(let i = 0; i<slide.length; i++){
		slide[i].style.background='#50545e';
	}
	about.style.color='white';
	cena.style.color='white';
	buy.style.background='#08457e';

	// localStorage.setItem('bg-ground', 'black');
}
function choiseLight(){

	// choise.classList.toggle('theme_light');
	// ;
	console.log('выбран белый');
	//header
	header.style.background="#7fc7ff";
	for(let i = 0; i<itemNav.length; i++){
		itemNav[i].style.color='black';
	}
	//main
	text.forEach((el)=>{
		el.style.color='black';
	});
	console.log(tovar)

	for(let i = 0; i<accord.length; i++){
		accord[i].style.background='#7fc7ff';
	}
	main.style.background='white';
	body.style.background='white';
	btn.style.background='#7fc7ff';
	tovar.style.color='black';
	btnMenu.style.background='#7fc7ff';
	menu.style.background='#7fc7ff';
	if(btnMenu.classList.contains('is-pushed')){
		btnMenu.style.background='#1faee9';
	};
	itemNav2.style.color='black';


	for(let i = 0; i<slide.length; i++){
		slide[i].style.background='white';
	}
	about.style.color='black';
	cena.style.color='black';
	buy.style.background='#7fc7ff';

	// localStorage.setItem('bg-ground', 'white');
}

choise.addEventListener('click', function(){
	if(!choise.classList.contains('theme_light')){
		choise.classList.add('theme_light');
		choiseDark();
	} else{
		choise.classList.remove('theme_light');
		choiseLight();
	}
})

// if(localStorage.getItem('bg-ground')!==null){
// color = localStorage.getItem('bg-ground');
// if (color=='white'){
// 	choiseLight();
// } else{
// 	choise.classList.toggle('theme_light');
//  	choiseDark();
// }
// }
