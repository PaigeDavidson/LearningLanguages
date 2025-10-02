let hex = [];
// let numHex = 10;
// sort shapes by the value of their color hex value

function generateHex(numHex) {
    for (let i = 0; i < numHex; i++) {
        // Generate random number 0 - 16777215 (0xFFFFFF)
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);

        // Pad with zeros if shorter than 6 chars
        randomColor = "#" + randomColor.padStart(6, "0");

        hex.push(randomColor);
    }
    return shapes;
}
// ADCAD6