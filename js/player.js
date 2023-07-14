const back = document.getElementById('back');
const next = document.getElementById('next');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
let videos = [video1, video2, video3];
let x = 0;
next.addEventListener('click', function(){
	if(x >= 2){
		console.log('Видео больше нет!');
		next.classList.add('stop');
	} else{
	next.classList.remove('stop');
	back.classList.remove('stop');
	x = x + 1;
	videos[x].style.display='block';
	videos[x-1].style.display='none';
	videos[x-1].pause();
	}
})
back.addEventListener('click', function(){
	if(x <= 0){
		console.log('Видео больше нет!');
		back.classList.add('stop');
	} else{
	next.classList.remove('stop');
	back.classList.remove('stop');
	x = x - 1;
	videos[x].style.display='block';
	videos[x+1].style.display='none';
	videos[x+1].pause();
	}
})