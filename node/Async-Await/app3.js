/*
Usa el módulo fs.promises para leer dos archivos: a.txt y b.txt.
Crea una función leerArchivos() que lea ambos usando await 
(uno después del otro) y luego muestre su contenido combinado.
*/
const fs = require("node:fs").promises


async function leerArchivos() {
    try {
        console.log("Leyendo archivos...")
        const contenidoA = await fs.readFile("mensaje.txt", "utf8")
        const contenidoB = await fs.readFile("mensaje2.txt", "utf8")

        console.log("Contenido combinado: ")
        console.log(contenidoA+" \n  "+contenidoB)
    } catch (error) {
        console.log("Error al leer los archivos: ", error.message)
    }

}
leerArchivos()


