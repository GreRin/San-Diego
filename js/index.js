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
	header[0].style.position = 'static';
	footer[0].classList.add('footer-form');
	footer[0].style.position = 'static';
	form.classList.remove('hidden');
	form.style.margin = '0';
	signIn.removeEventListener('click', (event), true);
}, true);

signIn.addEventListener('touchstart', (event) => {
	main[0].classList.add('hidden');
	aside[0].classList.remove('hidden');
	header[0].classList.add('header-form');
	header[0].style.position = 'static';
	footer[0].classList.add('footer-form');
	footer[0].style.position = 'static';
	form.classList.remove('hidden');
	form.style.margin = '0';
	signIn.removeEventListener('touchstart', (event), true);
}, true);

back.addEventListener('click', (event) => {
	main[0].classList.remove('hidden');
	aside[0].classList.add('hidden');
	header[0].classList.remove('header-form');
	header[0].style.position = 'fixed';
	footer[0].classList.remove('footer-form');
	footer[0].style.position = 'fixed';
	form.classList.add('hidden');
	signIn.removeEventListener('click', (event), true);
}, true);

back.addEventListener('touchstart', (event) => {
	main[0].classList.remove('hidden');
	aside[0].classList.add('hidden');
	header[0].classList.remove('header-form');
	header[0].style.position = 'fixed';
	footer[0].classList.remove('footer-form');
	footer[0].style.position = 'fixed';
	form.classList.add('hidden');
	signIn.removeEventListener('touchstart', (event), true);
}, true);

const password = document.getElementById('passwordId');
const show = document.getElementById('show');
show.addEventListener('click', (event) => {
	(password.getAttribute('type') === 'text') ? password.setAttribute('type', 'password') : password.setAttribute('type', 'text');
	password.removeEventListener('click', (event), true);
}, true);

// const continueBtn = document.getElementById('continue');
// continueBtn.addEventListener('click', (event) => {
// 	const emailText = document.getElementById('emailId');
// 	const passwordText = document.getElementById('passwordId');
// 	console.log(emailText);
// 	continueBtn.removeEventListener('click', (event), true);
// }, true);
