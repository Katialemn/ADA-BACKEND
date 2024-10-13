// Crear un servidor TCP y un cliente que implementen un servicio 
//de "eco" con contador.  
//-El servidor debe recibir mensajes del cliente, añadir un 
//número de secuencia a cada mensaje y devolverlo al 
//cliente.  
//-El cliente debe poder enviar mensajes al servidor y mostrar 
//las respuestas recibidas.  
// Utilizar una estructura MVC (Modelo-Vista-Controlador) 
//para organizar el código.
//Model
class echoModel {
    constructor() {
        this.counter = 0;
    }
    processMessage(message) {
        this.counter++;
        return `Mensaje ${this.counter}: ${message}`;
    }
}
module.exports = echoModel;