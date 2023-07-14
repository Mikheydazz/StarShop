const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const numBtn = document.getElementById('num');
let n = 0

plus.addEventListener('click', function(){
	n = n + 1
	numBtn.innerHTML ='Купить '+n
})

minus.addEventListener('click', function(){
	n = n - 1
	numBtn.innerHTML = 'Купить '+n
})

