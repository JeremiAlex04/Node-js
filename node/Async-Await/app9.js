/*
Crea una función asíncrona que intente ejecutar 
una tarea (por ejemplo, una llamada a una API 
que falla aleatoriamente) hasta 3 veces antes de 
lanzar un error. Usa async/await y try/catch dentro de un bucle.
*/

function tareaInestable() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.7) {
            resolve("Exito")
        } else {
            reject(new Error('Fallo'))
        }

    });
}

async function reintentarTarea(intentos = 3) {
    for (let i = 0; i < intentos; i++) {
        try {
            return await tareaInestable();
        } catch (error) {
            console.log('Intento ' + (i + 1) + ' Fallido')
            if (i == intentos - 1) throw error;
        }
    }
}

reintentarTarea()
    .then(console.log)
    .catch(console.log)




