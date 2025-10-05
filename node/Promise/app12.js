/*
tarea1(), tarea2(), tarea3() → cada una devuelve una 
promesa que se resuelve en distinto tiempo 
(por ejemplo, 1s, 2s y 3s). Crea una función ejecutarTareas() 
que use Promise.all() junto con await para ejecutarlas en paralelo 
y mostrar cuando todas terminen.
*/

function tarea1() {
    return new Promise ((resolve)=>setTimeout(()=>resolve("Tarea 1 Completada"), 2000));
}


function tarea2() {
    return new Promise ((resolve)=>setTimeout(()=>resolve("Tarea 2 Completada"), 4000));
}


function tarea3() {
    return new Promise ((resolve)=>setTimeout(()=>resolve("Tarea 3 Completada"), 2000));
}


async function ejecutarTareas() {
    console.log("Ejecutando Tareas")
    const resultados = await Promise.all([tarea1(), tarea2(), tarea3()]);
    console.log("Todas las tareas compledas: \n", resultados)
}

ejecutarTareas()

