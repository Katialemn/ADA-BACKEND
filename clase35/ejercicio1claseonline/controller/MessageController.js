// MessageController.js

const net = require('net');

const MessageController = require('../view/MessageView');
const siguienteSecuencia  = require('../model/MessageModel');
   
function MessageController(message) {

        const seqNum = siguienteSecuencia(message);
        return MessageController (`${seqNum}: ${mensaje}`);
    }
    

module.exports = MessageController;