const signIn = document.getElementById('sign-in');
const back = document.getElementById('back');
const main = document.getElementsByTagName('main');
const aside = document.getElementsByTagName('aside');
const header = document.getElementsByTagName('header');
const footer = document.getElementsByTagName('footer');
const form = document.getElementById('form');

signIn.addEventListener('click', (event) => {
	main[0].classList.add('hidden');
	aside[0].classList.remove('hidden');
	header[0].classList.add('header-form');
	footer[0].classList.add('footer-form');
	form.classList.remove('hidden');
	signIn.removeEventListener('click', (event), true);
}, true);

back.addEventListener('click', (event) => {
	main[0].classList.remove('hidden');
	aside[0].classList.add('hidden');
	header[0].classList.remove('header-form');
	footer[0].classList.remove('footer-form');
	form.classList.add('hidden');
	signIn.removeEventListener('click', (event), true);
}, true);

// function show() {
// 	password = document.getElementById('password');
// 	console.log('Hello');
// }