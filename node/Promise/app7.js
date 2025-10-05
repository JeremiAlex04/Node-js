/*
Crea una función conectarBD() que devuelva una promesa.
La conexión tarda 2 segundos (setTimeout), y debe tener una probabilidad del 50% de éxito.

- Si es exitosa → resolve("Conexión exitosa a la base de datos").
- Si falla → reject("Error al conectar a la base de datos").
*/

function conectarBaseDatos(conectar) {
    return new Promise((resolve, reject) => {
        console.log("Conectando a base de datos - UTP / Loading...")
        setTimeout(() => {
            if (conectar !== 0) {
                resolve("Conexion exitosa")
            } else {
                reject("Conexion fallida")
            }
        }, 3000);
    })

}

let key = 0;

conectarBaseDatos(key)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    })

