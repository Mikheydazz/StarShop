window.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#btnMenu').addEventListener('click', function(){
		document.querySelector('#menu').classList.toggle('is-active');
		document.querySelector('#btnMenu').classList.toggle('is-pushed');
	});
});