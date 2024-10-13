//Implementar un servidor TCP y un cliente que proporcionen un 
//servicio de suma. 
//-El servidor debe recibir dos números enviados por el 
//cliente, sumarlos, y devolver el resultado al cliente. 
//-El cliente debe poder enviar los dos números al servidor y 
//mostrar la respuesta con la suma de ambos números. 
//-Utilizar una estructura MVC para organizar el código. 
//Algunas ayuditas: 
//-Crea un archivo model.js para gestionar la lógica de la suma. 
//-Crea un archivo controller.js para manejar la interacción entre 
//el modelo y el servidor. 
//-Crea un archivo server.js para implementar el servidor TCP que 
//recibe los números y devuelve la suma. 
//-Crea un archivo client.js para implementar el cliente TCP que 
//envía los números al servidor y muestra la respuesta.

// client.js
// Importamos el módulo net de Node.js para crear el cliente TCP.
const net = require('net');
// Importamos la vista de suma.
const SumView = require('./view/view.js');

// Clase que controla la lógica del cliente.
class ClientController {
    constructor() {
        this.client = new net.Socket(); // Creamos un nuevo socket.
    }

    // Método para conectar el cliente al servidor.
    connect() {
        this.client.connect(3000, '127.0.0.1', () => {
            console.log('Conectado al servidor');
        });
    }

    // Método para enviar los números al servidor y manejar la respuesta.
    sendNumbers(num1, num2, callback) {
        this.client.write(`${num1} ${num2}`); // Envía los números al servidor.
        this.client.on('data', (data) => {
            callback(data.toString()); // Llama al callback con el resultado.
            this.client.destroy(); // Cierra la conexión.
        });
    }
}

// Creamos una instancia del controlador y de la vista.
const controller = new ClientController();
const view = new SumView(controller);

// Conectamos el cliente al servidor y solicitamos los números al usuario.
controller.connect();
view.getNumbersAndSum();