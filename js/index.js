const signIn = document.getElementById('sign-in');
const back = document.getElementById('back');
const main = document.getElementsByTagName('main');
const aside = document.getElementsByTagName('aside');
const header = document.getElementsByTagName('header');
const footer = document.getElementsByTagName('footer');

signIn.addEventListener('click', (event) => {
	console.log(aside);
	main[0].classList.add('hidden');
	aside[0].classList.remove('hidden');
	header[0].classList.add('header-form');
	footer[0].classList.add('footer-form');
	signIn.removeEventListener('click', (event), true);
}, true);

back.addEventListener('click', (event) => {
	main[0].classList.remove('hidden');
	aside[0].classList.add('hidden');
	header[0].classList.remove('header-form');
	footer[0].classList.remove('footer-form');
	signIn.removeEventListener('click', (event), true);
}, true);