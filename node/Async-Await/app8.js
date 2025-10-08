/*
Crea una función asíncrona que ejecute 3 tareas 
asíncronas en paralelo (por ejemplo, 3 retrasos 
de 1, 2 y 3 segundos) y devuelva un array con los 
resultados en orden. Usa Promise.all
*/

function tareas(id, tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve("Tarea Nº "+id+ " completada") }, tiempo)
    })
}

async function ejecutarTareasParalelo() {
    const resultados = await Promise.all([
        tareas(1, 2000),
        tareas(2, 4000),
        tareas(3, 6000)
    ])
    return resultados;
}


ejecutarTareasParalelo().then(console.log)
