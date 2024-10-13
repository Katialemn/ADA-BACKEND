//Implementar un servidor TCP y un cliente que proporcionen un 
//servicio de tiempo.  
//- El servidor debe responder con la hora actual cada vez que 
//reciba un mensaje del cliente.  
//- El cliente debe poder solicitar la hora actual al servidor y 
//mostrar la respuesta. 
//- Utilizar una estructura MVC para organizar el código. 

// client.js

// Importamos el módulo net para crear el cliente TCP
const net = require('net');
// Importamos la vista TimeView
const TimeView = require('./view/view.js');

// Creamos una instancia de la vista
const view = new TimeView();

// Creamos un nuevo socket para el cliente
const client = new net.Socket();
// Conectamos el cliente al servidor en el puerto 8080 y en la dirección localhost
client.connect(8080, '127.0.0.1', () => {
  console.log('Conectado al servidor');
  // Enviamos un mensaje al servidor para solicitar la hora
  client.write('getTime');
});

// Evento que se dispara cuando el cliente recibe datos del servidor
client.on('data', (data) => {
  // Mostramos la hora recibida utilizando la vista
  view.displayTime(data.toString());
  // Cerramos la conexión después de recibir la respuesta
  client.destroy();
});

// Evento que se dispara cuando la conexión se cierra
client.on('close', () => {
  console.log('Conexión cerrada');
});
