// server.js

const net = require('net');

 const MessageController  = require('./controller/MessageController');
 

 const server = net.createServer((socket) => {
    console.log('Cliente Conectado en el Servidor.');
    
    socket.on('data', (data) => {
        const response = manejarMensaje(data.toString().trim());
        socket.write(response);
    });

    socket.on('end', () => {
        console.log('Cliente Desconectado.');
    });

    socket.on('error', (err) => {
        console.error('Error:', err);
    });
});

server.listen(8080, () => {
    console.log('Cliente Escuchando en el Puerto 8080');
});