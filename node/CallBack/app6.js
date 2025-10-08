/*
Usa el módulo fs de Node.js para leer el contenido de un archivo datos.txt.
Crea una función leerArchivo que reciba el nombre del archivo y un callback.
El callback debe recibir un mensaje indicando si la lectura fue exitosa o si hubo error.
*/
const fs = require('fs');

function leerArchivo(nombreArchivo, callback) {
    fs.readFile(nombreArchivo, 'utf8', (error, datos)=>{
        if (error) {
            callback("Error al leer archivo")
        } else{
            callback("Archivo leido corectamente:"+datos)
        }
    });
}

leerArchivo('hola.txt', (mensaje) =>{
    console.log(mensaje);
})

