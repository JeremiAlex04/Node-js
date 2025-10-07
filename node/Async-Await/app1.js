/*
Crea una función procesarDatos() que use async/await para:
- Esperar 2 segundos (usa una promesa con setTimeout).
- Luego mostrar en consola "Datos procesados correctamente".
*/

function esperar(ms) {
   return new Promise((resolve)=>setTimeout(resolve, ms));
}

async function procesarDatos() {
    console.log("Procesando datos");

    await esperar(4000);
    console.log("Datos procesados correctamente")
}

procesarDatos();
