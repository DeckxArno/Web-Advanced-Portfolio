document.getElementById('get-data').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const manipuleerdata = manipuleerData(data);
            tonen(manipuleerdata);
        })
        .catch(error => {
            document.getElementById('output').textContent = 'Error: ' + error.message;
        });
});

function manipuleerData(data) {
    return data.slice(0, 5).map(item => ({
        ...item,
        summary: item.body.substring(0, 50) + '...'
    }));
}

function tonen(data) {
    const output = document.getElementById('output');
    output.innerHTML = '';

    data.forEach(item => {
        const tekst = document.createElement('div');
        tekst.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.summary}</p>
        `;
        output.appendChild(tekst);
    });
}
