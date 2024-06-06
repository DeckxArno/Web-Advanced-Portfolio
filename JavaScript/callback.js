const randomNumber = Math.floor(Math.random() * 10) + 1;

window.addEventListener('DOMContentLoaded', function() {
    const randomNumberElement = document.getElementById('nummer');
    randomNumberElement.textContent = 'Random Number: ' + randomNumber;
});

// Functie die een Promise teruggeeft om te controleren of het gegenereerde getal even is
function Even(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve(number + ' is even.');
        } else {
            reject(new Error(number + ' is oneven.'));
        }
    });
}

// Callback functie om het resultaat van de Promise af te handelen en op de webpagina weer te geven
function handleResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'Your guess is ' + result;
}

// Callback functie om eventuele fouten af te handelen en op de webpagina weer te geven
function Fout(error) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'Fout: ' + error.message;
}

document.getElementById('Even/oneven?').addEventListener('click', function() {
    const userGuess = prompt('Is het getal even of oneven?.');

    Even(randomNumber)
        .then(result => {
            if ((result.includes('even') && userGuess === 'even') || (result.includes('oneven') && userGuess === 'oneven')) {
                handleResult('correct');
            } else {
                handleResult('niet correct');
            }
        })
        .catch(Fout);
});
  