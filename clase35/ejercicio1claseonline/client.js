// client.js

const net = require('net');
const readline = require('readline');
const { mostrarMensaje} = require('./view/echoView');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new net.Socket();
client.connect (8080, () => {
    console.log('Conectado al Servidor');
    rl.addListener('line', (line) => {
    client.write(line);
    });
});

client.on('data', (data) => {
    console.log(`Mostrar Mensaje del Servidor: ${data.toString()}`);
});

client.on('close', () => {
    console.log('Conexión cerrada');
});