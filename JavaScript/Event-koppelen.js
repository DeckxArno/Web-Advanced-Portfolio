const button = document.getElementById('Event-koppelen');

button.addEventListener('click', () => {
    const name = prompt('Wat is je naam?');
    
    if (name) {
        const message = document.createElement('p');
        message.textContent = 'Een geluk dat ' + name + ' geen kat is!';
        document.body.appendChild(message);
    }
});
