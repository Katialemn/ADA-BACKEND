//Crear un TCP  y un cliente que implemente un servicio
//de "eco" con contador.
//El servidor debe recibir mensajes del cliente,añadir un número de secuencia a cada mensaje
// y devolverlo al cliente.
//El servidor debe poder enviar mensaje al servidor 
//y mostrar las respuestas recibidas.
//Utilizar una estructura MVC (Modelo-Vista-Controlador)
//para organizar el código.
// Server
const echoController = require('./controller/echoController');
const controller = new echoController();
controller.startServer(8080);