// Crear un servidor TCP y un cliente que implementen un servicio 
//de "eco" con contador.  
//-El servidor debe recibir mensajes del cliente, añadir un 
//número de secuencia a cada mensaje y devolverlo al 
//cliente.  
//-El cliente debe poder enviar mensajes al servidor y mostrar 
//las respuestas recibidas.  
// Utilizar una estructura MVC (Modelo-Vista-Controlador) 
//para organizar el código.
// El controller es donde se realiza la lógica, constante y los métodos  las funciones
// en el controller si importa el model y el view


//echoController

const net = require('net');

const echoView = require('../view/echoView.js');
const echoModel = require('../model/echoModel.js');

class echoController {
    constructor() {
        this.model = new echoModel();
        this.view = new echoView();
    }

    startServer(port) {
        const server = net.createServer((socket) => {
            socket.on('data', (data) => {
                const message = data.toString().trim();
                const response = this.model.processMessage(message);
                socket.write(response);
                this.view.displayMessage(`Enviado al cliente: ${response}`);
            });
        });

        server.listen(port, () => {
            console.log(`Servidor escuchando en el puerto ${port}`);
        });
    }
}

module.exports = echoController;