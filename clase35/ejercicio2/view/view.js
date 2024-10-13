//Implementar un servidor TCP y un cliente que proporcionen un 
//servicio de tiempo.  
//- El servidor debe responder con la hora actual cada vez que 
//reciba un mensaje del cliente.  
//- El cliente debe poder solicitar la hora actual al servidor y 
//mostrar la respuesta. 
//- Utilizar una estructura MVC para organizar el código. 
// views.js
// Definimos la clase TimeView
class TimeView {
    // Método para mostrar la hora en la consola
    displayTime(time) {
      console.log(`La hora actual es: ${time}`);
    }
  }
  
  // Exportamos la clase para que pueda ser utilizada en otros archivos
  module.exports = TimeView;
  