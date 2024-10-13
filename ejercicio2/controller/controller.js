//Implementar un servidor TCP y un cliente que proporcionen un 
//servicio de tiempo.  
//- El servidor debe responder con la hora actual cada vez que 
//reciba un mensaje del cliente.  
//- El cliente debe poder solicitar la hora actual al servidor y 
//mostrar la respuesta. 
//- Utilizar una estructura MVC para organizar el código. 

// controller.js

// Importamos el modelo TimeModel
const TimeModel = require('../model/model.js');

// Definimos la clase TimeController

class TimeController {
  // Constructor que inicializa el modelo
  constructor() {
    this.model = new TimeModel();
  }

  // Método para obtener la hora actual desde el modelo
  getTime() {
    return this.model.getCurrentTime();
  }
}

// Exportamos la clase para que pueda ser utilizada en otros archivos
module.exports = TimeController;
