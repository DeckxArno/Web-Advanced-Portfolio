const textElement = document.getElementById('text');
const button = document.getElementById('buttonSelecMani');

button.addEventListener('click', () => {
    textElement.innerText = 'De tekst is gewijzigd!';
});
