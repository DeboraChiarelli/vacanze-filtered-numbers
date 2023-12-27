function filterDivisibleNumbers(userNumber, array) {
    // Utilizzo il metodo filter per selezionare i numeri divisibili per userNumber
    return array.filter(number => number % userNumber === 0);
}

function printResults(array, title) {
    // Creo un elemento paragrafo
    const resultParagraph = document.createElement('p');

    // Aggiungo il titolo al paragrafo
    resultParagraph.textContent = `${title}: [${array.join(', ')}]`;

    // Aggiungo l'elemento paragrafo al corpo del documento
    document.body.appendChild(resultParagraph);
}

const userNumber = 5;
const inputArray = [1, 3, 5, 2, 10, 6, 4, 9];

const result = filterDivisibleNumbers(userNumber, inputArray);
printResults(result, `Numeri divisibili per ${userNumber}`);