document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('Formulier');
    const nameInput = document.getElementById('naam');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('naamError');
    const emailError = document.getElementById('emailError');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        nameError.textContent = '';
        emailError.textContent = '';

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Naam is verplicht.';
        }

        if (emailInput.value.trim() === '') {
            emailError.textContent = 'E-mail is verplicht.';
        }

        if (nameError.textContent === '' && emailError.textContent === '') {
            alert('Formulier succesvol verzonden!');
            form.submit();
        }
    });
});
