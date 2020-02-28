const signIn = document.getElementById('sign-in');
const back = document.getElementById('back');
const sections = document.getElementsByTagName('section');

signIn.addEventListener('click', (event) => {
	console.log(sections);
	for (let i=0; i<sections.length; ++i) {
		sections[i].classList.add('hidden')
		signIn.removeEventListener('click', (event), true);
	}
}, true);

back.addEventListener('click', (event) => {
	// const sections = document.getElementsByTagName('section');
	for (let i=0; i<sections.length; ++i) {
		sections[i].classList.remove('hidden')
		back.removeEventListener('click', (event), true);
	}
}, true);