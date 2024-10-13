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

// server.js
// Importamos el módulo net de Node.js para crear el servidor TCP.
const net = require('net');
// Importamos el controlador de suma.
const SumController = require('./controller/controller.js');

// Creamos el servidor TCP.
const server = net.createServer((socket) => {
    // Evento que se ejecuta cuando el servidor recibe datos.
    socket.on('data', (data) => {
        // Maneja la solicitud de suma y obtiene el resultado.
        const result = SumController.handleSumRequest(data.toString());
        // Envía el resultado de vuelta al cliente.
        socket.write(result);
    });
});

// El servidor escucha en el puerto 3000 y en la dirección localhost.
server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor escuchando en el puerto 3000');
});