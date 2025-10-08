/*
Crea una función asíncrona que lea un archivo de texto (por ejemplo, datos.txt) 
usando fs.promises.readFile y devuelva su contenido. Maneja errores con try/catch.
*/

const fs = require('fs').promises;


async function Operacion(ruta) {
    try {
        const contenido  = await fs.readFile(ruta, 'utf8')
        console.log(contenido)
    } catch (error) {
        console.log(new Error('Operacion Invalida'))
    }
}


Operacion('datos.txt');

