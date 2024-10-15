import Siema from 'siema';

document.addEventListener('DOMContentLoaded', () => {
	const mySiema = new Siema();

	// Добавить навигацию, если нужно
	document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
	document.querySelector('.next').addEventListener('click', () => mySiema.next());
});
