//Implementar un servidor TCP y un cliente que proporcionen un 
//servicio de tiempo.  
//- El servidor debe responder con la hora actual cada vez que 
//reciba un mensaje del cliente.  
//- El cliente debe poder solicitar la hora actual al servidor y 
//mostrar la respuesta. 
//- Utilizar una estructura MVC para organizar el código. 

// model.js

// Definimos la clase TimeModel
class TimeModel {
    // Método para obtener la hora actual
    getCurrentTime() {
      // Devuelve la hora actual en formato de cadena
      return new Date().toLocaleTimeString();
    }
  }
  
  // Exportamos la clase para que pueda ser utilizada en otros archivos
  module.exports = TimeModel;
  
  