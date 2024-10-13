// MessageModel.js
let secuencia = 0;
function siguienteSecuencia(message) {
    secuencia++;
    return `Mensaje ${secuencia}: ${message}`;
}
module.exports = siguienteSecuencia;