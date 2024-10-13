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

// // model.js

// Esta clase se encarga de la lógica de la suma.
class SumModel {
    // Método estático que recibe dos números y devuelve su suma.
    static sum(a, b) {
        return a + b;
    }
}

// Exportamos la clase para poder usarla en otros archivos.
module.exports = SumModel;