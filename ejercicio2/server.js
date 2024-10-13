//Implementar un servidor TCP y un cliente que proporcionen un 
//servicio de tiempo.  
//- El servidor debe responder con la hora actual cada vez que 
//reciba un mensaje del cliente.  
//- El cliente debe poder solicitar la hora actual al servidor y 
//mostrar la respuesta. 
//- Utilizar una estructura MVC para organizar el código. 

// server.js

// Importamos el módulo net para crear el servidor TCP
const net = require('net');
// Importamos el controlador TimeController
const TimeController = require('./controller/controller.js');

// Creamos una instancia del controlador
const controller = new TimeController();

// Creamos el servidor TCP
const server = net.createServer((socket) => {
  // Evento que se dispara cuando el servidor recibe datos del cliente
  socket.on('data', () => {
    // Obtenemos la hora actual desde el controlador
    const currentTime = controller.getTime();
    // Enviamos la hora actual al cliente
    socket.write(currentTime);
  });

  socket.on('end', () => {
    console.log('Cliente Desconectado')
  });
});

// El servidor escucha en el puerto 8080 y en la dirección localhost
server.listen(8080, '127.0.0.1', () => {
  console.log('Servidor TCP escuchando en el puerto 8080');
});
