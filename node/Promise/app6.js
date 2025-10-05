/*
Usa el módulo fs.promises para leer el contenido de un archivo info.txt.
Crea una función leerArchivo() que devuelva una promesa:
- Se resuelve con el contenido del archivo.
- Se rechaza si ocurre un error (por ejemplo, el archivo no existe).
*/

const fs = require("node:fs").promises


function leerArchivo() {
    return fs.readFile("mensaje.txt", "utf8");
}

leerArchivo()
.then((mensaje)=>{
    console.log(mensaje);
})
.catch((error)=>{
    console.log(error);
})

