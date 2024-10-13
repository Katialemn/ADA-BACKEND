// Crear un servidor TCP y un cliente que implementen un servicio 
//de "eco" con contador.  
//-El servidor debe recibir mensajes del cliente, añadir un 
//número de secuencia a cada mensaje y devolverlo al 
//cliente.  
//-El cliente debe poder enviar mensajes al servidor y mostrar 
//las respuestas recibidas.  
// Utilizar una estructura MVC (Modelo-Vista-Controlador) 
//para organizar el código.
// Client
const net = require('net');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const client = new net.Socket();
client.connect(8080, '127.0.0.1', () => {
    console.log('Conectado al servidor');
    rl.addListener('line', (line) => {
        client.write(line);
    });
});
client.on('data', (data) => {
    console.log(`Respuesta del servidor: ${data.toString()}`);
});
client.on('close', () => {
    console.log('Conexión cerrada');
});