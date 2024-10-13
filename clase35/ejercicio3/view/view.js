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

// view.js
// Importamos el módulo readline de Node.js para manejar la entrada del usuario.
const readline = require('readline');

// Clase que maneja la interacción con el usuario.
class SumView {
    constructor(controller) {
        this.controller = controller; // Guardamos una referencia al controlador.
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    // Método para solicitar los números al usuario y mostrar el resultado.
    getNumbersAndSum() {
        this.rl.question('Introduce el primer número: ', (num1) => {
            this.rl.question('Introduce el segundo número: ', (num2) => {
                this.controller.sendNumbers(num1, num2, (result) => {
                    console.log(`El resultado de la suma es: ${result}`);
                    this.rl.close(); // Cerramos la interfaz de readline.
                });
            });
        });
    }
}

// Exportamos la clase para poder usarla en otros archivos.
module.exports = SumView;