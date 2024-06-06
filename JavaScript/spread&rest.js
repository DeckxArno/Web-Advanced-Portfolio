function Rekenmachine() {
    const g1 = document.getElementById('g1').value;
    const g2 = document.getElementById('g2').value;
    const g3 = document.getElementById('g3').value;
    const g4 = document.getElementById('g4').value;
    const numbers = [g1, g2, g3, g4].map(Number);
    const result = sum(...numbers);
    document.getElementById('som').textContent = `Som: ${result}`;
}

function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}