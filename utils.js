function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celcius) {
    return ((9 / 5) * celcius) + 32;
}

module.exports = { generateRandomNumber, celciusToFahrenheit };
