// Crear un servidor TCP y un cliente que implementen un servicio 
//de "eco" con contador.  
//-El servidor debe recibir mensajes del cliente, añadir un 
//número de secuencia a cada mensaje y devolverlo al 
//cliente.  
//-El cliente debe poder enviar mensajes al servidor y mostrar 
//las respuestas recibidas.  
// Utilizar una estructura MVC (Modelo-Vista-Controlador) 
//para organizar el código.

//View

class echoView {
    displayMessage(message) {
        console.log(message);
    }
}

module.exports = echoView;