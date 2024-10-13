//Implementar un servidor TCP y un cliente que proporcionen un 
//servicio de suma. 
//-El servidor debe recibir dos números enviados por el 
//cliente, sumarlos, y devolver el resultado al cliente. 
//-El cliente debe poder enviar los dos números al servidor y 
//mostrar la respuesta con la suma de ambos números. 
//-Utilizar una estructura MVC para organizar el código. 
//Algunas ayuditas: 
//-Crea un archivo model.js para gestionar la lógica de la suma. 
//-Crea un archivo controller.js para manejar la interacción entre 
//el modelo y el servidor. 
//-Crea un archivo server.js para implementar el servidor TCP que 
//recibe los números y devuelve la suma. 
//-Crea un archivo client.js para implementar el cliente TCP que 
//envía los números al servidor y muestra la respuesta.


// controller.js

// Importamos el modelo de suma.

const SumModel = require('../model/model.js');

// Esta clase se encarga de manejar la lógica de control.
class SumController {
    // Método estático que maneja la solicitud de suma.
    // Recibe los datos como una cadena, los convierte a números,
    // y devuelve el resultado de la suma.
    static handleSumRequest(data) {
        const numbers = data.split(' '); // Dividimos la cadena en dos números.
        const a = parseInt(numbers[0], 10); // Convertimos el primer número a entero.
        const b = parseInt(numbers[1], 10); // Convertimos el segundo número a entero.
        return SumModel.sum(a, b).toString(); // Sumamos los números y devolvemos el resultado como cadena.
    }
}

// Exportamos la clase para poder usarla en otros archivos.
module.exports = SumController;